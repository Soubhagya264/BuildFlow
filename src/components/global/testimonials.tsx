"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
    {
        text: "BuildFlow’s AI Assistant literally cut our development time in half. We went from idea to prototype overnight!",
        image: "https://randomuser.me/api/portraits/women/12.jpg",
        name: "Anika Sharma",
        role: "Product Lead",
    },
    {
        text: "The prompt engineering UI is a game‑changer. Our designers and marketers collaborate seamlessly on layouts and copy.",
        image: "https://randomuser.me/api/portraits/men/13.jpg",
        name: "Rahul Desai",
        role: "Marketing Director",
    },
    {
        text: "With BuildFlow’s full app ecosystem, we launched on web, mobile and desktop from a single codebase—no additional effort required.",
        image: "https://randomuser.me/api/portraits/women/14.jpg",
        name: "Priya Nair",
        role: "CTO",
    },
    {
        text: "Custom components, real‑time previews, and one‑click deployments—BuildFlow has empowered our small dev team to punch above its weight.",
        image: "https://randomuser.me/api/portraits/men/15.jpg",
        name: "Vikram Patel",
        role: "Lead Engineer",
    },
    {
        text: "The AI‑driven template library got us off the ground in minutes. We spent more time refining UX than writing boilerplate.",
        image: "https://randomuser.me/api/portraits/women/16.jpg",
        name: "Simran Kaur",
        role: "UX Designer",
    },
    {
        text: "BuildFlow’s collaboration features mean stakeholders can comment directly on mockups. No more endless email chains!",
        image: "https://randomuser.me/api/portraits/women/17.jpg",
        name: "Aditya Rao",
        role: "Project Manager",
    },
    {
        text: "Scaling was effortless—BuildFlow handled performance optimizations and responsive layouts out of the box.",
        image: "https://randomuser.me/api/portraits/men/18.jpg",
        name: "Naveen Singh",
        role: "DevOps Engineer",
    },
    {
        text: "The support team at BuildFlow is top‑notch. They helped us integrate our custom API endpoints in hours.",
        image: "https://randomuser.me/api/portraits/women/19.jpg",
        name: "Sara Ali",
        role: "Integration Specialist",
    },
    {
        text: "Thanks to BuildFlow’s analytics dashboard, we’re making data‑driven decisions faster than ever.",
        image: "https://randomuser.me/api/portraits/men/20.jpg",
        name: "Rohan Mehta",
        role: "Growth Hacker",
    },
];

export default function Testimonials() {
    const firstColumn = testimonials.slice(0, 3);
    const secondColumn = testimonials.slice(3, 6);
    const thirdColumn = testimonials.slice(6, 9);

    return (
        <section className="bg-background my-20">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.1,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center max-w-[540px] mx-auto text-center gap-4"
                >
                    <div className="border py-1 px-4 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-medium">
                        Testimonials
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5 bg-gradient-to-r from-slate-800 via-black to-slate-800 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                        What our users say
                    </h2>
                    <p className="opacity-70 mt-4 text-gray-600 dark:text-gray-300">
                        See what our customers have to say about us.
                    </p>
                </motion.div>

                {/* Columns */}
                <div className="flex justify-center gap-6 mt-10 overflow-hidden max-h-[740px] [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
                    {[firstColumn, secondColumn, thirdColumn].map((column, colIdx) => (
                        <Column
                            key={colIdx}
                            testimonials={column}
                            duration={[15, 19, 17][colIdx]}
                            className={
                                colIdx === 1
                                    ? "hidden md:block"
                                    : colIdx === 2
                                        ? "hidden lg:block"
                                        : ""
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface Testimonial {
    text: string;
    image: string;
    name: string;
    role: string;
}

function Column({
    testimonials,
    duration,
    className = "",
}: {
    testimonials: Testimonial[];
    duration: number;
    className?: string;
}) {
    const items = [...testimonials, ...testimonials];

    return (
        <div className={className}>
            <motion.div
                animate={{ translateY: "-50%" }}
                transition={{ duration, repeat: Infinity, ease: "linear" }}
                className="flex flex-col gap-6 pb-6"
            >
                {items.map(({ text, image, name, role }, idx) => (
                    <div
                        key={idx}
                        className="relative p-8 rounded-3xl border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-950/60 shadow-xl overflow-hidden"
                    >
                        {/* Dots only in dark mode */}
                        <div
                            className="absolute inset-0 pointer-events-none dark:block hidden"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle, rgba(255,255,255,0.06) 1.2px, transparent 1px)",
                                backgroundSize: "8px 8px",
                            }}
                        />

                        {/* Gradient corners (optional) */}
                        <div className="absolute -top-1 -left-1 h-20 w-20 bg-gradient-to-tr from-purple-400 to-indigo-400 opacity-10 blur-2xl rounded-full pointer-events-none" />

                        {/* Content */}
                        <div className="relative z-10">
                            <p className="text-gray-800 dark:text-gray-200">{text}</p>
                            <div className="flex items-center gap-3 mt-5">
                                <img
                                    src={image}
                                    alt={name}
                                    width={40}
                                    height={40}
                                    className="h-10 w-10 rounded-full object-cover"
                                />
                                <div>
                                    <div className="font-semibold text-gray-900 dark:text-white">
                                        {name}
                                    </div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        {role}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
