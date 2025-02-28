"use client";

import Image from "next/image";
import React from "react";
import { Carousel, Card } from "../ui/AceternityUI/cards-carousel";

interface CardData {
  category: string;
  title: string;
  src: string;
  content: JSX.Element;
}

interface DummyContentProps {
  img: string;
  title: string;
  desc: string;
}

const DummyContent: React.FC<DummyContentProps> = ({ img, title, desc }) => {
  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">
          {title}
        </span>
        {desc}
      </p>
      <Image
        src={img}
        alt={title}
        height={500}
        width={500}
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const data: CardData[] = [
  {
    category: "Website Builder",
    title: "Drag-and-Drop Website Creation",
    src: "/assets/dummy11.png",
    content: (
      <DummyContent
        img="/assets/dummy11.png"
        title="Effortless Website Design"
        desc="Build visually stunning websites with our intuitive drag-and-drop interface. Easily add, rearrange, and customize elements without any coding knowledge, ensuring a seamless design experience."
      />
    ),
  },
  {
    category: "Customization",
    title: "Tailored Sales Funnels",
    src: "/assets/funnels.jpg",
    content: (
      <DummyContent
        img="/assets/funnels.jpg"
        title="Optimized Marketing Funnels"
        desc="Create and customize high-converting sales funnels tailored to different audiences and goals. Manage multiple campaigns in one place, fine-tuning every detail to maximize engagement and conversions."
      />
    ),
  },
  {
    category: "Team Collaboration",
    title: "Multi-User Account Management",
    src: "/assets/team.jpg",
    content: (
      <DummyContent
        img="/assets/team.jpg"
        title="Efficient Teamwork & Role-Based Access"
        desc="Enhance collaboration by managing multiple team members with customizable roles and permissions. Assign tasks, track progress, and streamline workflow with shared access and real-time updates."
      />
    ),
  },
  {
    category: "Responsive Design",
    title: "Adaptive Previews",
    src: "/assets/responsive-design.jpg",
    content: (
      <DummyContent
        img="/assets/responsive-design.jpg"
        title="Seamless Cross-Device Experience"
        desc="Ensure your website looks flawless on all devices with real-time responsive previews. Instantly adapt layouts for desktop, tablet, and mobile to provide an optimal user experience."
      />
    ),
  },
  {
    category: "Editor Tools",
    title: "Version Control & Editing",
    src: "/assets/editor.jpg",
    content: (
      <DummyContent
        img="/assets/editor.jpg"
        title="Undo & Redo for Flexible Editing"
        desc="Make adjustments confidently with the ability to undo and redo changes. Experiment with different layouts, restore previous versions, and refine your design without risk."
      />
    ),
  },
  {
    category: "Subscription Management",
    title: "Integrated Payment Processing",
    src: "/assets/payment.jpg",
    content: (
      <DummyContent
        img="/assets/payment.jpg"
        title="Seamless Subscription Handling"
        desc="Manage customer subscriptions effortlessly with Stripe integration. Accept multiple payment methods securely while automating billing cycles for hassle-free revenue management."
      />
    ),
  },
];

export function CardsCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Discover BuildFlow Features
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
