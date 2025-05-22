import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { subscriptionCreated } from "@/lib/stripe/stripe-actions";

// List of Stripe event types you want to handle
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

  // Get raw request body as string
  const body = await req.text();

  // Get Stripe signature from headers
  const sig = headers().get("Stripe-Signature");

  // Choose appropriate secret based on env
  const webhookSecret =
    process.env.STRIPE_WEBHOOK_SECRET_LIVE || process.env.STRIPE_WEBHOOK_SECRET;

  console.log("🔔 Stripe Webhook Received:", {
    hasSignature: !!sig,
    hasWebhookSecret: !!webhookSecret,
    bodyLength: body.length,
  });

  if (!sig || !webhookSecret) {
    console.error("❌ Missing Stripe signature or webhook secret");
    return NextResponse.json(
      { error: "Webhook Error: Missing signature or secret" },
      { status: 400 }
    );
  }

  try {
    // Verify and construct event
    stripeEvent = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err: any) {
    console.error("❌ Webhook signature verification failed:", err.message);
    return NextResponse.json(
      { error: `Webhook signature error: ${err.message}` },
      { status: 400 }
    );
  }

  // Skip processing if not a relevant event
  if (!stripeWebhookEvents.has(stripeEvent.type)) {
    console.log("ℹ️ Ignoring unrelated event:", stripeEvent.type);
    return NextResponse.json({ received: true });
  }

  // Skip connected account events (handle them separately if needed)
  if (stripeEvent.account) {
    console.log("🔁 Skipping connected account event:", stripeEvent.type);
    return NextResponse.json({ received: true });
  }

  try {
    switch (stripeEvent.type) {
      case "customer.subscription.created":
      case "customer.subscription.updated": {
        const subscription = stripeEvent.data.object as Stripe.Subscription;

        if (subscription.status === "active") {
          await subscriptionCreated(
            subscription,
            subscription.customer as string
          );
          console.log("✅ Subscription processed:", subscription.id);
        } else {
          console.log("⚠️ Subscription not active:", {
            id: subscription.id,
            status: subscription.status,
          });
        }
        break;
      }

      case "checkout.session.completed": {
        const session = stripeEvent.data.object as Stripe.Checkout.Session;
        console.log("✅ Checkout session completed:", session.id);
        break;
      }

      case "product.created":
      case "product.updated":
      case "price.created":
      case "price.updated": {
        const object = stripeEvent.data.object;
        console.log(`📦 Stripe event: ${stripeEvent.type}`, object);
        break;
      }

      default:
        console.log("⚠️ Unhandled event type:", stripeEvent.type);
    }

    return NextResponse.json({ received: true });
  } catch (err: any) {
    console.error("❌ Error handling event:", {
      type: stripeEvent.type,
      message: err.message,
    });

    return NextResponse.json(
      { error: `Webhook Error: ${err.message}` },
      { status: 500 }
    );
  }
}
