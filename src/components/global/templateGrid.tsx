"use client";

import Image from "next/image";
import { motion } from "framer-motion";



const headingText = "Explore Tailored Templates for Every Need";

const templates = [
    {
        name: "Agency",
        icon: "💼",
        color: "from-[#63ffdb] to-[#0011FF]",
        img: "/assets/dummy5.jpg",
    },
    {
        name: "Business",
        icon: "📈",
        color: "from-[#fbee32] to-[#FF6A00]",
        img: "/assets/dummy7.jpg",
    },
    {
        name: "Portfolio",
        icon: "👜",
        color: "from-[#c4ff4d] to-[#37b710]",
        img: "/assets/portfolio.jpg",
    },
    {
        name: "SaaS",
        icon: "☁️",
        color: "from-[#6d4cff] to-[#ff0978]",
        img: "/assets/saas.jpg",
    },
];

export default function TemplatesGrid() {
    const container = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.04,
            },
        },
    }
    const child = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };


    return (
        <section className="w-full px-4 py-20 ">
            <div className="mx-auto max-w-7xl">
                <motion.h2
                    className="mb-12 text-center text-4xl md:text-5xl font-bold"
                    variants={container}
                    initial="hidden"
                    animate="visible"
                >
                    {headingText.split("").map((char, index) => (
                        <motion.span
                            key={index}
                            variants={child}
                            // display inline-block so y transforms work
                            style={{
                                display: "inline-block",
                                background: "linear-gradient(90deg, #6cfbed 0%, #26a9c3 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </motion.h2>

                {/* Row 1 */}
                <div className="grid grid-cols-12 gap-6">
                    <TemplateCard data={templates[0]} className="col-span-12 md:col-span-4" />
                    <TemplateCard data={templates[1]} className="col-span-12 md:col-span-8" />
                </div>

                {/* Row 2 */}
                <div className="mt-6 grid grid-cols-12 gap-6">
                    <TemplateCard data={templates[2]} className="col-span-12 md:col-span-7" />
                    <TemplateCard data={templates[3]} className="col-span-12 md:col-span-5" />
                </div>
            </div>
        </section>
    );
}

function TemplateCard({ data, className }: { data: any; className: string }) {
    return (
        <motion.div
            whileHover={{ scale: 0.98 }}
            className={`relative min-h-[400px] rounded-3xl overflow-hidden shadow-xl ${className}`}
        >
            {/* Full-bleed image */}
            <Image
                src={data.img}
                alt={data.name}
                fill
                className="absolute inset-0 object-cover z-0"
            />

            {/* Gradient overlay */}
            <div
                className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-70 z-10`}
            />

            {/* Content */}
            <div className="relative z-20 flex h-full flex-col items-center justify-between p-8 text-white text-center">
                
                <h3 className="text-3xl font-semibold">{data.name}</h3>
            </div>
        </motion.div>
    );
}
