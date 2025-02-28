"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function AnimatedLink({ priceId }: { priceId: string | null}) {
    return (
        <Link href={`/agency?plan=${priceId}`} className="relative w-full">
            {/* Animated Gradient Border */}
            <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-full rounded-lg p-[2px] bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 transition-all duration-300"
            >
                {/* Inner Button */}
                <div className="flex items-center justify-center w-full text-center bg-blue-950 text-white py-2 rounded-md relative overflow-hidden">
                    {/* Hover Background Effect */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 opacity-30"
                    />
                    <span className="relative z-10">Get Started</span>
                </div>
            </motion.div>
        </Link>
    );
}
