"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface MenuItem {
    title: string;
    url: string;
    description?: string;
    items?: MenuItem[];
}

const mainMenu: MenuItem[] = [
    { title: "Startseite", url: "/" },
    {
        title: "Warum investieren",
        url: "/warum-investieren",
        items: [
            {
                title: "Kapitalanlage Immobilien",
                url: "/kapitalanlage-immobilien",
                description: "Stabile Sachwerte, planbare Einnahmen, steuerliche Vorteile.",
            },
            {
                title: "Photovoltaik",
                url: "/photovoltaik",
                description: "Profitieren Sie vom Energiewandel und staatlichen Rahmenbedingungen.",
            },
            {
                title: "Vergleich: Nicht investieren vs. investieren",
                url: "/warum-investieren#vergleich",
                description: "Wie sich Vermögen mit und ohne Investment entwickelt.",
            },
        ],
    },
    {
        title: "Leistungen",
        url: "/leistungen",
        items: [
            {
                title: "Persönliche Investment-Strategie",
                url: "/leistungen#strategie",
                description: "Maßgeschneiderte Konzepte für Unternehmer & Führungskräfte.",
            },
            {
                title: "Begleitung von A–Z",
                url: "/leistungen#prozess",
                description: "Von Analyse über Objektwahl bis Finanzierung & Abschluss.",
            },
            {
                title: "Mallorca Option",
                url: "/mallorca-option",
                description: "Exklusive Immobilien- und Lifestyle-Konzepte für VIP-Kunden.",
            },
        ],
    },
    { title: "Über uns", url: "/ueber-uns" },
    { title: "Blog", url: "/blog" },
    { title: "Kontakt", url: "/kontakt" },
];

export default function Navbar() {
    return (
        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0b1412]/80 backdrop-blur-md">
            <div className="container mx-auto flex h-20 max-w-6xl items-center justify-between px-4 lg:px-6">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    {/* Replace src with your local logo/icon */}
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e5e6e7]">
                        <Image
                            src="/logo-mark-graf-bernstorff.svg"
                            alt="Graf Bernstorff Consulting"
                            width={24}
                            height={24}
                            className="h-6 w-6"
                        />
                    </div>
                    <span className="hidden flex-col leading-tight text-sm font-medium tracking-tight text-slate-50 sm:flex">
                        <span className="text-base font-semibold uppercase tracking-[0.18em]">
                            Graf Bernstorff
                        </span>
                        <span className="text-xs text-slate-300">Real Estate &amp; Investment Consulting</span>
                    </span>
                </Link>

                {/* Desktop navigation */}
                <nav className="hidden items-center gap-8 lg:flex">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-2">
                            {mainMenu.map((item) =>
                                item.items ? (
                                    <NavigationMenuItem key={item.title}>
                                        <NavigationMenuTrigger className="bg-transparent text-sm font-medium text-slate-100 hover:bg-white/5">
                                            {item.title}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent className="mt-2 rounded-xl border border-slate-100/10 bg-[#0f1816] p-2 shadow-xl">
                                            <div className="grid w-[360px] gap-1 p-1">
                                                {item.items.map((sub) => (
                                                    <NavigationMenuLink asChild key={sub.title}>
                                                        <Link
                                                            href={sub.url}
                                                            className="flex flex-col rounded-lg p-3 text-left transition hover:bg-white/5"
                                                        >
                                                            <span className="text-sm font-semibold text-slate-50">
                                                                {sub.title}
                                                            </span>
                                                            {sub.description && (
                                                                <span className="mt-1 text-xs text-slate-300">
                                                                    {sub.description}
                                                                </span>
                                                            )}
                                                        </Link>
                                                    </NavigationMenuLink>
                                                ))}
                                            </div>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                ) : (
                                    <NavigationMenuItem key={item.title}>
                                        <NavigationMenuLink asChild>
                                            <Link
                                                href={item.url}
                                                className="text-sm font-medium text-slate-100 transition hover:text-[#d7f2e3]"
                                            >
                                                {item.title}
                                            </Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                )
                            )}
                        </NavigationMenuList>
                    </NavigationMenu>

                    {/* Main CTA */}
                    <Button
                        asChild
                        className="rounded-full bg-[#3d6252] px-5 text-sm font-semibold tracking-tight text-white shadow-sm hover:bg-[#314e42]"
                    >
                        <Link href="/kontakt#beratung">
                            Jetzt Beratung anfragen
                        </Link>
                    </Button>
                </nav>

                {/* Mobile menu */}
                <div className="flex items-center gap-2 lg:hidden">
                    <Button
                        asChild
                        size="sm"
                        className="rounded-full bg-[#3d6252] px-4 text-xs font-semibold tracking-tight text-white hover:bg-[#314e42]"
                    >
                        <Link href="/kontakt#beratung">Beratung</Link>
                    </Button>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="border-white/20 bg-white/5 text-slate-50 hover:bg-white/10"
                            >
                                <Menu className="h-4 w-4" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[80vw] max-w-sm bg-[#0f1816] text-slate-50">
                            <SheetHeader className="border-b border-white/5 pb-3">
                                <SheetTitle className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e5e6e7]">
                                        <Image
                                            src="/logo-mark-graf-bernstorff.svg"
                                            alt="Graf Bernstorff Consulting"
                                            width={22}
                                            height={22}
                                        />
                                    </div>
                                    <span className="text-sm font-semibold uppercase tracking-[0.14em]">
                                        Graf Bernstorff
                                    </span>
                                </SheetTitle>
                            </SheetHeader>

                            <div className="mt-4 flex flex-col gap-6">
                                <Accordion type="single" collapsible className="flex flex-col gap-2">
                                    {mainMenu.map((item) =>
                                        item.items ? (
                                            <AccordionItem key={item.title} value={item.title} className="border-b-0">
                                                <AccordionTrigger className="text-left text-sm font-medium">
                                                    {item.title}
                                                </AccordionTrigger>
                                                <AccordionContent className="mt-1 flex flex-col gap-2">
                                                    {item.items.map((sub) => (
                                                        <Link
                                                            key={sub.title}
                                                            href={sub.url}
                                                            className="text-sm text-slate-200 hover:text-[#d7f2e3]"
                                                        >
                                                            {sub.title}
                                                        </Link>
                                                    ))}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ) : (
                                            <button
                                                key={item.title}
                                                className="text-left text-sm font-medium text-slate-100"
                                            >
                                                <Link href={item.url}>{item.title}</Link>
                                            </button>
                                        )
                                    )}
                                </Accordion>

                                <Button
                                    asChild
                                    className="w-full rounded-full bg-[#3d6252] text-sm font-semibold text-white hover:bg-[#314e42]"
                                >
                                    <Link href="/kontakt#beratung">Jetzt Beratung anfragen</Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
