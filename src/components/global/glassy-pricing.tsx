"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

// --- Internal Helper Component --- //
const CheckIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M20 6 9 17l-5-5" />
    </svg>
);

// --- Props --- //
export interface PricingCardProps {
    planName: string;
    description: string;
    price: string;
    features: string[];
    buttonText: string;
    isPopular?: boolean;
    buttonVariant?: string;
    priceId: string;
}

// --- Pricing Card --- //
export const PricingCard = ({
    planName,
    description,
    price,
    features,
    buttonText,
    isPopular = false,
    buttonVariant = "primary",
    priceId,
}: PricingCardProps) => {
    const cardClasses = `
    backdrop-blur-[14px] bg-gradient-to-br rounded-2xl shadow-xl flex-1 max-w-xs px-7 py-8 flex flex-col transition-all duration-300
    from-black/5 to-black/0 border
    ${isPopular
            ? "border-[#6cfbed] scale-105 relative ring-2 ring-[#6cfbed]/40 shadow-2xl"
            : "border-black/10 dark:border-white/10"
        }
  `;

    const buttonClasses = `
    mt-auto w-full py-2.5 rounded-xl font-semibold text-[14px] transition font-sans
    ${buttonVariant === "primary"
            ? "bg-[#6cfbed] hover:bg-cyan-300 text-black"
            : "bg-transparent border border-[#6cfbed] text-[#6cfbed] hover:bg-[#6cfbed]/10"
        }
  `;

    return (
        <div className={cardClasses.trim()}>
            {isPopular && (
                <div className="absolute -top-4 right-4 px-3 py-1 text-[12px] font-semibold rounded-full bg-[#6cfbed] text-black">
                    Most Popular
                </div>
            )}

            <div className="mb-3">
                <h2 className="text-[28px] font-extralight tracking-[-0.03em] text-foreground font-display">
                    {planName}
                </h2>
                <p className="text-[16px] text-foreground/70 mt-1 font-sans">
                    {description}
                </p>
            </div>
            <div className="my-6 flex items-baseline gap-2">
                <span className="text-[48px] font-extralight text-foreground font-display">
                    {price === "Free" ? price : `$${price}`}
                </span>
                {price !== "Free" && (
                    <span className="text-[14px] text-foreground/70 font-sans">/mo</span>
                )}
            </div>

            <div className="card-divider w-full mb-5 h-px bg-[linear-gradient(90deg,transparent,rgba(0,0,0,0.1)_50%,transparent)] dark:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.09)_20%,rgba(255,255,255,0.22)_50%,rgba(255,255,255,0.09)_80%,transparent)]"></div>

            <ul className="flex flex-col gap-2 text-[14px] text-foreground/90 mb-6 font-sans">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <CheckIcon className="text-[#6cfbed] w-4 h-4" /> {feature}
                    </li>
                ))}
            </ul>
            <Link href={`/agency?plan=${priceId}`} className="relative w-full"><Button className={buttonClasses.trim()}>{buttonText}</Button></Link>

        </div>
    );
};

// --- Page Wrapper --- //
interface ModernPricingPageProps {
    title: React.ReactNode;
    subtitle: React.ReactNode;
    plans: PricingCardProps[];
    showAnimatedBackground?: boolean;
}

export const ModernPricingPage = ({
    title,
    subtitle,
    plans,
    showAnimatedBackground = true,
}: ModernPricingPageProps) => {
    return (
        <div className="bg-background text-foreground min-h-screen w-full overflow-x-hidden">
            <main className="relative w-full min-h-screen flex flex-col items-center justify-center px-4 py-8">
                <div className="w-full max-w-5xl mx-auto text-center mb-14">
                    <h1 className="text-[48px] md:text-[64px] font-extralight leading-tight tracking-[-0.03em] bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-cyan-500 to-blue-600 dark:from-white dark:via-teal-300 dark:to-blue-400 font-display">
                        {title}
                    </h1>
                    <p className="mt-3 text-[16px] md:text-[20px] text-foreground/80 max-w-2xl mx-auto font-sans">
                        {subtitle}
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-8 md:gap-6 justify-center items-center w-full max-w-4xl">
                    {plans.map((plan) => (
                        <PricingCard key={plan.planName} {...plan} />
                    ))}
                </div>
            </main>
        </div>
    );
};
