"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Linkedin, Mail } from "lucide-react";

const navigation = [
    { title: "Startseite", href: "/" },
    { title: "Warum investieren?", href: "/waruminvestieren" },
    { title: "Leistungen", href: "/services" },
    { title: "Photovoltaik", href: "/photovoltaic-investments" },
    { title: "Über uns", href: "/about" },
    { title: "Blog", href: "/blog" },
    { title: "Kontakt", href: "/contact" },
];

const advantages = [
    "Kapitalanlage-Immobilien mit Strategie",
    "Photovoltaik als zusätzlicher Cashflow",
    "Individuelle Finanz- & Steuerbetrachtung",
    "Begleitung durch Expertennetzwerk",
];

const legal = [
    { title: "Impressum", href: "/impressum" },
    { title: "Datenschutz", href: "/datenschutz" },
];

export default function Footer() {
    return (
        <footer className="border-t bg-[#0b1412] text-slate-200">
            <div className="mx-auto max-w-7xl px-4 md:px-6">
                <div className="grid gap-x-10 gap-y-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <p className="text-sm font-semibold tracking-tight text-white">
                            Graf Bernstorff Consulting
                        </p>
                        <p className="text-sm text-slate-300">
                            Strategische Beratung für Kapitalanlage-Immobilien und
                            Photovoltaik im deutschsprachigen Raum – mit Fokus auf
                            Vermögensschutz, Cashflow und langfristige Planung.
                        </p>
                    </div>

                    <div>
                        <h6 className="text-sm font-semibold text-white">Navigation</h6>
                        <ul className="mt-4 space-y-2 text-sm">
                            {navigation.map((item) => (
                                <li key={item.title}>
                                    <Link
                                        href={item.href}
                                        className="text-slate-300 block py-1 hover:text-white"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h6 className="text-sm font-semibold text-white">Ihr Vorteil</h6>
                        <ul className="mt-4 space-y-2 text-sm text-slate-300">
                            {advantages.map((item) => (
                                <li key={item} className="py-1">{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h6 className="text-sm font-semibold text-white">
                            Kurz informiert bleiben
                        </h6>
                        <p className="text-sm text-slate-300">
                            Gelegentliche Einblicke zu Immobilien, Photovoltaik und
                            Vermögensstrategie. Kein Spam, jederzeit abbestellbar.
                        </p>
                        <form className="flex items-center flex-col gap-2 sm:flex-row">
                            <Input
                                type="email"
                                placeholder="Ihre E-Mail-Adresse"
                                className="bg-transparent py-5   text-sm text-slate-100 placeholder:text-slate-400 sm:max-w-xs"
                            />
                            <Button className="gap-2 bg-[#3d6252] md:w-auto w-full text-xs font-semibold hover:bg-[#314e42]">
                                <Mail className="h-4 w-4" />
                                Anmelden
                            </Button>
                        </form>
                    </div>
                </div>

                <Separator className="border-slate-800" />

                <div className="flex flex-col gap-4 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                    <div className="space-y-1">
                        <p>
                            © {new Date().getFullYear()} Graf Bernstorff Consulting. Alle
                            Rechte vorbehalten.
                        </p>
                        <p>Deutsche / EU-Datenschutzstandards · DSGVO-konform.</p>
                    </div>

                    <div className="flex flex-col items-start gap-3 sm:items-end">
                        <div className="flex gap-5 text-slate-300">
                            <Link href="https://www.linkedin.com" aria-label="LinkedIn">
                                <Linkedin className="h-4 w-4 hover:text-white" />
                            </Link>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {legal.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="text-xs text-slate-400 hover:text-slate-200"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
