"use client"
import React from 'react'
import Link from 'next/link'
import { ChevronRight, Menu, Moon, Sun, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'
import { useScroll } from "framer-motion";
import { TextEffectComponent } from '../ui/text-effect'
import { useTheme } from 'next-themes'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <section>
                    <div className="relative pt-24">
                        <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(145%_145%_at_50%_100%,transparent_30%,var(--background)_95%)]"></div>
                        <svg
                            className="absolute inset-0 -z-20 w-full h-full"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <defs>
                                <pattern
                                    id="grid"
                                    width="50"
                                    height="50"
                                    patternUnits="userSpaceOnUse"
                                >
                                    <path
                                        d="M40 0H0V40"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="0.7"
                                    />
                                </pattern>
                                <linearGradient id="grid-fade" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="white" stopOpacity="0.2" />
                                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                                </linearGradient>
                                <mask id="grid-mask">
                                    <rect
                                        width="100%"
                                        height="100%"
                                        fill="url(#grid-fade)"
                                    />
                                </mask>
                            </defs>
                            <rect
                                width="100%"
                                height="100%"
                                fill="url(#grid)"
                                mask="url(#grid-mask)"
                                className="text-zinc-800/20 dark:text-zinc-200/10"
                            />
                        </svg>
                        <div className="mx-auto max-w-5xl px-6">
                            <div className="sm:mx-auto lg:mr-auto">
                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                >
                                    <TextEffectComponent />
                                    <p
                                        className="mt-8 max-w-2xl text-pretty text-xl">
                                        Tailwindcss highly customizable components for building modern websites and applications that look and feel the way you mean it.
                                    </p>
                                    <div className="mt-12 flex items-center gap-2">


                                        <div className="mt-auto">
                                            <Button asChild className="relative inline-block overflow-hidden  p-[1.5px] rounded-xl w-full"

                                            >
                                                <span className="relative inline-block overflow-hidden rounded-xl p-[1.5px] w-full">
                                                    {/* 🌀 Cyan conic border */}
                                                    <span
                                                        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]"
                                                        style={{
                                                            background: 'conic-gradient(from 90deg at 50% 50%, #6cfbed 0%, #1518f3 50%, #6cfbed 100%)',
                                                        }}
                                                    />
                                                    {/* Inner glassy button */}
                                                    <span
                                                        className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl
                                                            bg-white dark:bg-gray-950 text-xs font-medium backdrop-blur-3xl
                                                            text-black dark:text-white border border-[#6cfbed]
                                                            bg-gradient-to-tr from-[#6cfbed]/10 via-[#6cfbed]/20 to-transparent
                                                            hover:from-[#6cfbed]/20 hover:via-[#6cfbed]/30 hover:to-transparent
                                                            transition-all py-4 px-10"
                                                    >
                                                        <Link href="/agency"> <span className="relative">
                                                            Get started</span></Link>
                                                    </span>
                                                </span>
                                            </Button>
                                        </div>
                                        <Button
                                            key={2}
                                            asChild
                                            size="lg"
                                            variant="outline"
                                            className="h-[42px] rounded-xl px-5 text-base">
                                            <Link href="#link">
                                                <span className="text-nowrap">Request a demo</span>
                                            </Link>
                                        </Button>
                                    </div>
                                </AnimatedGroup>
                            </div>
                        </div>
                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                                <div
                                    aria-hidden
                                    className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                                />
                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-5xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
                                    <img
                                        className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                                        src="/assets/builder.png"
                                        alt="app screen"
                                        width="2700"
                                        height="1440"
                                    />
                                    <img
                                        className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                                        src="/assets/builder.png"
                                        alt="app screen"
                                        width="2700"
                                        height="1440"
                                    />
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
                <section className="bg-background pb-16 pt-16 md:pb-32">
                    <div className="group relative m-auto max-w-5xl px-6">
                        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                            <Link
                                href="/"
                                className="block text-sm duration-150 hover:opacity-75">
                                <span> Meet Our Customers</span>

                                <ChevronRight className="ml-1 inline-block size-3" />
                            </Link>
                        </div>
                        <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                    alt="Nvidia Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/column.svg"
                                    alt="Column Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/github.svg"
                                    alt="GitHub Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/nike.svg"
                                    alt="Nike Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                    alt="Lemon Squeezy Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/laravel.svg"
                                    alt="Laravel Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-7 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/lilly.svg"
                                    alt="Lilly Logo"
                                    height="28"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-6 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/openai.svg"
                                    alt="OpenAI Logo"
                                    height="24"
                                    width="auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}




const menuItems = [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const { scrollYProgress } = useScroll()
    const { theme, setTheme } = useTheme()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className={cn(
                    'group fixed z-20 w-full border-b transition-colors duration-150',
                    scrolled ? 'bg-background/90 backdrop-blur-6xl' : 'bg-background/80 backdrop-blur-9xl'
                )}
            >
                <div className="mx-auto max-w-5xl px-6 transition-all duration-300">
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        {/* Left Section */}
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <Link href="/" aria-label="home" className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
                            >
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>

                            {/* Desktop Nav */}
                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150"
                                            >
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="bg-background group-data-[state=active]:block lg:group-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            {/* Mobile Nav */}
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150"
                                            >
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA + Theme */}
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit items-center">
                                <Button asChild variant="outline" size="sm">
                                    <Link href="/agency">
                                        <span>Login</span>
                                    </Link>
                                </Button>
                                <Button asChild size="sm">
                                    <Link href="/agency">
                                        <span>Build</span>
                                    </Link>
                                </Button>

                                {/* 🌗 Stylish Theme Toggle Button */}
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                                    aria-label="Toggle Theme"
                                    className={cn(
                                        "relative overflow-hidden rounded-full border-2 border-primary/40 shadow-md transition-all duration-300 hover:scale-105 hover:bg-transparent" ,
                                        "before:absolute before:inset-0 before:-z-10 before:animate-pulse before:rounded-full before:bg-primary/20",
                                        "hover:ring-2 hover:ring-primary/40"
                                    )}
                                >
                                    <div className="transition-transform duration-300 scale-110 text-primary">
                                        {theme === 'dark' ? (
                                            <Sun className="h-5 w-5" />
                                        ) : (
                                            <Moon className="h-5 w-5" />
                                        )}
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}



const Logo = ({ className }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 96 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn("h-5 w-auto", className)}
        >
            <path
                d="M3 0H5V18H3V0ZM13 0H15V18H13V0ZM18 3V5H0V3H18ZM0 15V13H18V15H0Z"
                fill="url(#logo-gradient)"
            />
            {/* ✅ Use <text> for text inside SVG */}
            <text
                x="20"         // adjust position
                y="15"         // adjust position
                fontSize="16"  // adjust size
                fill="currentColor"
                fontFamily="sans-serif"
            >
                BuildFlow
            </text>

            <defs>
                <linearGradient
                    id="logo-gradient"
                    x1="10"
                    y1="0"
                    x2="10"
                    y2="20"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#9B99FE" />
                    <stop offset="1" stopColor="#2BC8B7" />
                </linearGradient>
            </defs>
        </svg>
    );
};