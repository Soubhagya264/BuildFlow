"use server";

import { stripe } from "@/lib/stripe";
import { ModernPricingPage } from "./glassy-pricing";
import type { PricingCardProps } from "./glassy-pricing";
import { pricingCards } from "@/lib/constants";

export const Pricing = async () => {
    // 🔵 Fetch dynamic Stripe prices
    const prices = await stripe.prices.list({
        product: process.env.NEXT_BUILDFLOW_PRODUCT_ID,
        active: true,
    });

    // 🔵 Map Stripe plans and merge static config
    const dynamicPlans: PricingCardProps[] = prices.data.map((price) => {
        const match = pricingCards.find((c) => c.planName === price.nickname);

        return {
            planName: price.nickname ?? "Unnamed Plan",
            description: match?.description ?? "Flexible billing",
            price: ((price.unit_amount ?? 0) / 100).toFixed(2),
            features: match?.features ?? [],
            buttonText: match?.buttonText ?? "Sign Up",
            isPopular: match?.isPopular ?? false,
            buttonVariant: match?.buttonVariant ?? "primary",
            priceId: price.id,
        };
    });

    // ✅ Add your Starter plan statically
    const starterPlan = pricingCards.find((c) => c.planName === "Starter");

    const starterCard: PricingCardProps | undefined = starterPlan
        ? {
            planName: starterPlan.planName,
            description: starterPlan.description,
            price: starterPlan.price,
            features: starterPlan.features,
            buttonText: starterPlan.buttonText ?? "Get Started",
            isPopular: starterPlan.isPopular ?? false,
            buttonVariant: starterPlan.buttonVariant ?? "secondary", // keep Starter as outline
            priceId: starterPlan.priceId,
        }
        : undefined;

    // ✅ Combine Starter + dynamic plans
    const allPlans: PricingCardProps[] = starterCard
        ? [starterCard, ...dynamicPlans]
        : dynamicPlans;

    return (
        <ModernPricingPage
            title={
                <>
                    Find the <span className="text-teal-400">Perfect Plan</span> for Your Business
                </>
            }
            subtitle="Start for free, then grow with us. Flexible plans for projects of all sizes."
            plans={allPlans}
            showAnimatedBackground={true}
        />
    );
};
