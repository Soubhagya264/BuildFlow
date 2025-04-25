import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { subscriptionCreated } from "@/lib/stripe/stripe-actions";

const stripeWebhookEvents = new Set([
  "product.created",
  "product.updated",
  "price.created",
  "price.updated",
  "checkout.session.completed",
  "customer.subscription.created",
  "customer.subscription.updated",
  "customer.subscription.deleted",
]);

export async function POST(req: NextRequest) {
  let stripeEvent: Stripe.Event;
  const body = await req.text();
  const sig = headers().get("Stripe-Signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET_LIVE
    ? process.env.STRIPE_WEBHOOK_SECRET_LIVE
    : process.env.STRIPE_WEBHOOK_SECRET;

  console.log("Webhook Debug Info:", {
    hasSignature: !!sig,
    signature: sig,
    hasWebhookSecret: !!webhookSecret,
    webhookSecret: webhookSecret
      ? `${webhookSecret.substring(0, 10)}...`
      : "none",
    bodyLength: body.length,
    bodyPreview: body.substring(0, 100) + "...",
  });

  try {
    if (!sig || !webhookSecret) {
      console.error("Missing webhook signature or secret");
      return new NextResponse("Webhook Error: Missing signature or secret", {
        status: 400,
      });
    }

    stripeEvent = stripe.webhooks.constructEvent(body, sig, webhookSecret);

    if (stripeWebhookEvents.has(stripeEvent.type)) {
      const subscription = stripeEvent.data.object as Stripe.Subscription;

      // Skip if it's a connected account event
      if (
        subscription.metadata?.connectAccountPayments ||
        subscription.metadata?.connectAccountSubscriptions
      ) {
        console.log("Skipping connected account event");
        return NextResponse.json({ received: true });
      }

      switch (stripeEvent.type) {
        case "customer.subscription.created":
        case "customer.subscription.updated": {
          if (subscription.status === "active") {
            await subscriptionCreated(
              subscription,
              subscription.customer as string
            );
            console.log(
              "Subscription processed successfully:",
              subscription.id
            );
          } else {
            console.log("Subscription not active:", {
              id: subscription.id,
              status: subscription.status,
            });
          }
          break;
        }
        case "checkout.session.completed": {
          // Handle checkout completion if needed
          console.log("Checkout session completed");
          break;
        }
        case "product.created":
        case "product.updated":
        case "price.created":
        case "price.updated": {
          // Handle product/price updates if needed
          console.log("Product/Price event:", stripeEvent.type);
          break;
        }
        default:
          console.log("Unhandled event type:", stripeEvent.type);
      }
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error("Webhook Error:", error.message);
    return new NextResponse(`Webhook Error: ${error.message}`, { status: 400 });
  }
}
