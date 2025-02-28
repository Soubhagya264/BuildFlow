
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

export default function Home() {
  // const prices = await stripe.prices.list({
  //   product: process.env.NEXT_BUILDFLOW_PRODUCT_ID,
  //   active: true,
  // })
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
      <div className=" mt-[150px] flex justify-center items-center text-center flex-col">


        <Vortex

          particleCount={20}
        >
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />
          <p className="text-center text-xl">Run your agency, in one place</p>
          <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent bg-clip-text relative">
            <h3 className="text-6xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-fuchsia-500 text-center md:text-[200px]"
              style={{ textShadow: "2px 2px 4px rgba(255, 255, 255, 0.5)" }}
            >
              BuildFlow
            </h3>
          </div>
          <div className="flex justify-center items-center relative md:mt-[-20px]">
            <Image
              src={'/assets/preview.jpg'}
              alt="banner image"
              height={400}
              width={650}
              className="rounded-tl-2xl rounded-tr-2xl border-2 border-gray-300 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            />
          </div>
        </Vortex>
      </div>
      <section className="flex justify-center items-center flex-col gap-4 ">
        <LampContainer>
          <h2 className="text-4xl text-center"> Choose what fits you right</h2>
          <p className="text-muted-foreground text-center">
            Our straightforward pricing plans are tailored to meet your needs. If
            {" you're"} not <br />
            ready to commit you can get started for free.
          </p>

          <div className="flex  justify-center gap-4 flex-wrap mt-6">

            {pricingCards.map((card, idx) => (


              <Card key={card.title} className={clsx('w-[300px] flex flex-col justify-between rounded-[22px] p-1 bg-gradient-to-r from-yellow-200 to-pink-200')}>
                <CardHeader>
                  <CardTitle
                    className={clsx({
                      
                      'text-blue-900': true,
                      'font-bold':true
                      
                      
                      
                    })} 
                  >
                    {card.title}
                  </CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-4xl font-bold text-black ">{card.price}</span>
                  {card.title !== "Starter" && (
                    <span className=" text-gray-700">/month</span>
                  )}
                </CardContent>
                <CardFooter className="flex flex-col  items-start gap-4 ">
                  <div>
                    {pricingCards
                      .find((c) => c.title === card.title)
                      ?.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex gap-2 text-black"
                        >
                          <Check />
                          <p>{feature}</p>
                        </div>
                      ))}
                  </div>
                  <AnimatedLink priceId={card.priceId} />
                </CardFooter>
              </Card>


            ))}
          </div>

        </LampContainer>
      </section >
      <div className="">
        <StickyScroll content={content} />
        <CardsCarousel />
      </div>

    </>
  );


}
