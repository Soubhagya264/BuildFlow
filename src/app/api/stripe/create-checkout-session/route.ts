import { db } from "@/lib/db";
import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";

interface CheckoutRequest {
  subAccountConnectAccId: string;
  prices: { recurring: boolean; productId: string }[];
  subaccountId: string;
}

export async function POST(req: Request) {
  const origin = req.headers.get("origin") || "*";
  const { subAccountConnectAccId, prices, subaccountId }: CheckoutRequest =
    await req.json();

  if (!subAccountConnectAccId || !prices.length) {
    return new NextResponse("Stripe Account ID or Prices are missing.", {
      status: 400,
    });
  }

  const {
    NEXT_PUBLIC_PLATFORM_SUBSCRIPTION_PERCENT,
    NEXT_PUBLIC_PLATFORM_ONETIME_FEE,
    NEXT_PUBLIC_PLATFORM_AGENY_PERCENT,
  } = process.env;

  if (
    !NEXT_PUBLIC_PLATFORM_SUBSCRIPTION_PERCENT ||
    !NEXT_PUBLIC_PLATFORM_ONETIME_FEE ||
    !NEXT_PUBLIC_PLATFORM_AGENY_PERCENT
  ) {
    console.error("❌ Missing platform fee environment variables");
    return NextResponse.json({
      error: "Platform fee configuration is missing.",
    });
  }

  const hasRecurring = prices.some((p) => p.recurring);

  try {
    const session = await stripe.checkout.sessions.create(
      {
        line_items: prices.map((p) => ({
          price: p.productId,
          quantity: 1,
        })),

        mode: hasRecurring ? "subscription" : "payment",
        ui_mode: "embedded",
        redirect_on_completion: "never",

        ...(hasRecurring && {
          subscription_data: {
            metadata: { connectAccountSubscriptions: "true" },
            application_fee_percent: +NEXT_PUBLIC_PLATFORM_SUBSCRIPTION_PERCENT,
          },
        }),

        ...(!hasRecurring && {
          payment_intent_data: {
            metadata: { connectAccountPayments: "true" },
            application_fee_amount: +NEXT_PUBLIC_PLATFORM_ONETIME_FEE * 100,
          },
        }),
      },
      {
        stripeAccount: subAccountConnectAccId,
      }
    );

    return NextResponse.json(
      { clientSecret: session.client_secret },
      {
        headers: {
          "Access-Control-Allow-Origin": origin,
          "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      }
    );
  } catch (error: any) {
    console.error("🔴 Stripe Session Error:", error);
    return new NextResponse(`Stripe Error: ${error.message}`, {
      status: 500,
    });
  }
}

export async function OPTIONS(req: Request) {
  const origin = req.headers.get("origin") || "*";
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers":
        "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
      "Access-Control-Max-Age": "86400",
    },
  });
}
