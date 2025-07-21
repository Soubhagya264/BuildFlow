"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

export function Features() {
    const features = [
        {
            title: "Smart AI Assistant",
            desc: "Automate workflows and generate entire sites with a single AI prompt.",
            img: "/assets/AI_Prompts-.png",
        },
        {
            title: "Full App Ecosystem",
            desc: "Visualize and deploy your website across devices with our integrated builder.",
            img: "/assets/APP.png",
        },
        {
            title: "Prompt Engineering UI",
            desc: "Fine-tune AI-generated layouts, copy, and designs with an intuitive UI.",
            img: "/assets/APPDEV.png",
        },
    ];

    useEffect(() => {
        gsap.to(".glow-line", {
            strokeDashoffset: 0,
            repeat: -1,
            ease: "power1.inOut",
            duration: 1.5,
            stagger: 0.1,
        });
    }, []);

    const lines = [
        { x1: "30%", y1: "50%", x2: "40%", y2: "50%" },
        { x1: "60%", y1: "50%", x2: "70%", y2: "50%" },
        { x1: "30%", y1: "40%", x2: "40%", y2: "45%" },
        { x1: "30%", y1: "60%", x2: "40%", y2: "55%" },
        { x1: "60%", y1: "45%", x2: "70%", y2: "40%" },
        { x1: "60%", y1: "55%", x2: "70%", y2: "60%" },
        { x1: "25%", y1: "45%", x2: "35%", y2: "48%" },
        { x1: "25%", y1: "55%", x2: "35%", y2: "52%" },
        { x1: "65%", y1: "48%", x2: "75%", y2: "45%" },
        { x1: "65%", y1: "52%", x2: "75%", y2: "55%" },
        { x1: "20%", y1: "50%", x2: "30%", y2: "50%" },
        { x1: "70%", y1: "50%", x2: "80%", y2: "50%" },
    ];

    return (
        <>
            <div className="text-center mt-12 mb-5">
                <h2 className="text-6xl font-semibold text-gray-900 dark:text-white">
                    Build Smarter with AI
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
                    Unlock advanced AI tools to streamline and supercharge your development.
                </p>
                {/* Glowing Horizontal Line */}
                <hr className="mx-auto mt-6 w-full h-1 bg-teal-400 border-none rounded-full animate-pulse shadow-[0_0_30px_#6cfbed]" />
            </div>

            <section className="relative py-24 mb-14 overflow-hidden">
                {/* Connector Lines */}
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <filter
                            id="glowFilter"
                            x="-50%"
                            y="-50%"
                            width="200%"
                            height="200%"
                            colorInterpolationFilters="sRGB"
                        >
                            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>

                        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#6cfbed" stopOpacity="1" />
                            <stop offset="50%" stopColor="#6cfbed" stopOpacity="1" />
                            <stop offset="100%" stopColor="#6cfbed" stopOpacity="1" />
                        </linearGradient>
                    </defs>

                    {lines.map((coords, i) => (
                        <line
                            key={i}
                            {...coords}
                            className="glow-line"
                            stroke="url(#lineGrad)"
                            strokeWidth="3"
                            filter="url(#glowFilter)"
                            strokeDasharray="8 4"
                            strokeDashoffset="40"
                        />
                    ))}
                </svg>

                {/* Feature Cards */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="max-w-sm w-full  mx-auto min-h-[400px] rounded-full border-[rgba(255,255,255,0.10)] bg-gray-100 dark:bg-[rgba(40,40,40,0.70)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] p-10 text-center  group"
                        >
                            <div className="relative mx-auto w-56 h-56 min-h-[200px]">
                                <Image
                                    src={feature.img}
                                    alt={feature.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
