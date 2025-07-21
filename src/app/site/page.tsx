
import Image from "next/image";
import { Vortex } from "@/components/ui/AceternityUI/vortex";
import { HeroHighlight, Highlight } from "@/components/ui/AceternityUI/hero-highlight";
import { ContainerScroll } from "@/components/ui/AceternityUI/container-scroll-animation";
import { LampContainer } from "@/components/ui/AceternityUI/lamp";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { pricingCards } from '@/lib/constants'

import clsx from 'clsx'
import { Check } from 'lucide-react'
import { BackgroundGradient } from '../../components/ui/AceternityUI/background-gradient';
import { StickyScroll } from "@/components/ui/AceternityUI/sticky-scroll-reveal";
import { CardsCarousel } from "@/components/site/carousel";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedLink from "./design/animated-link";
import { stripe } from "@/lib/stripe";
import { HeroSection } from "@/components/global/hero-section";
import { PricingCard } from "@/components/global/glassy-pricing";
import { Pricing } from "@/components/global/pricing";
import { Features } from "@/components/global/features";
import TemplatesGrid from "@/components/global/templateGrid";
import Testimonials from "@/components/global/testimonials";

export default async function Home() {
  const prices = await stripe.prices.list({
    product: process.env.NEXT_BUILDFLOW_PRODUCT_ID,
    active: true,
  })
  const content = [
    {
      title: "SaaS Website Builder",
      description:
        "Build and customize your websites effortlessly with our drag-and-drop functionality. Create high-converting funnels and manage custom domains seamlessly within the application.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/assets/dummy10.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="web builder"
          />
        </div>
      ),
    },
    {
      title: "Responsive Previews",
      description:
        "Easily switch between different responsive views and preview your website in production mode. Ensure your site looks perfect on all devices, from desktops to mobile phones.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/assets/responsive-design.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="responsive preview demo"
          />
        </div>
      ),
    },
    {
      title: "Customizable Add-Ons",
      description:
        "Access additional add-on products on the billing page and create custom add-on products. Agency owners can provide a White Glove onboarding experience with a custom Stripe form and create sub-accounts for their clients.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/assets/dummy6.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="responsive preview demo"
          />
        </div>
      ),
    },
    {
      title: "Comprehensive Software Functionality",
      description:
        "Manage contacts, media, funnels, and class names efficiently. Utilize agency sidebar options, invitations, notifications, and Stripe integration for subscription management. Our platform helps you handle multiple leads from sub-accounts seamlessly.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          <Image
            src="/assets/dummy2.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="software functionality demo"
          />
        </div>
      ),
    },
  ];
  return (
    <>
      <HeroSection />
      <section className="flex justify-center items-center flex-col gap-4 ">
        <Features />
        <Pricing />
        <TemplatesGrid />
      </section >
      <div className="">
        <StickyScroll content={content} />
        <Testimonials />
      </div>
    </>
  );
}
