"use client";

import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { cn } from "@/lib/utils";

type StickyScrollContent = {
  title: string;
  description: string;
  content?: React.ReactNode;
};

type StickyScrollProps = {
  content: StickyScrollContent[];
  contentClassName?: string;
};

export const StickyScroll: React.FC<StickyScrollProps> = ({
  content,
  contentClassName,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });

  const [activeCard, setActiveCard] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const breakpoints = content.map((_, i) => i / content.length);
    const index = breakpoints.reduce((acc, val, i) =>
      Math.abs(latest - val) < Math.abs(latest - breakpoints[acc]) ? i : acc
      , 0);
    setActiveCard(index);
  });

  const lightGradients = [
    "linear-gradient(to bottom right, #a1c4fd, #c2e9fb)",
    "linear-gradient(to bottom right, #fbc2eb, #a6c1ee)",
    "linear-gradient(to bottom right, #fddb92, #d1fdff)",
  ];

  const darkGradients = [
    "linear-gradient(to bottom right, #0f2027, #203a43, #2c5364)",
    "linear-gradient(to bottom right, #41295a, #2F0743)",
    "linear-gradient(to bottom right, #373B44, #4286f4)",
  ];

  const [gradient, setGradient] = useState(lightGradients[0]);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    const gradients = isDark ? darkGradients : lightGradients;
    setGradient(gradients[activeCard % gradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: "transparent", // we now rely on gradient for color
      }}
      ref={ref}
      className="h-[34rem] overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10 transition-colors duration-700"
    >
      {/* Text Content */}
      <div className="relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-20">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.4 }}
                className={cn(
                  "text-3xl font-extrabold",
                  "text-gray-800 dark:text-white",
                  activeCard === index && "drop-shadow-[0_0_0.35rem_#68fff2]"
                )}
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                transition={{ duration: 0.4 }}
                className="text-md text-gray-600 dark:text-gray-300 max-w-md mt-6"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>

      {/* Visual Content Panel */}
      <div
        style={{ background: gradient }}
        className={cn(
          "hidden lg:flex h-64 w-80 rounded-xl sticky top-10 overflow-hidden  transition-all duration-500 border shadow-[2px_4px_16px_0px_rgba(132, 130, 130, 0.06)_inset]  border-white/3 backdrop-blur-md",
          "dark:border-white/20",
          contentClassName
        )}
      >
        {content[activeCard]?.content ?? null}
      </div>
    </motion.div>
  );
};
