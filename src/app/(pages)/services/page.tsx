import Wrapper from '@/app/Wrapper'
import React from 'react'
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { Building2, SunMedium, LineChart, ArrowRight } from "lucide-react";
import CallToAction from '@/components/CallToAction';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
    BookCheck,
    ChartPie,
    FolderSync,
    Goal,
    Users,
    Zap,
} from "lucide-react";

const features = [
    {
        icon: Goal,
        title: "Zahlenbasierte Strategien",
        description:
            "Wir planen nicht mit Bauchgefühl, sondern mit belastbaren Cashflow- und Szenario-Rechnungen – auf Basis konservativer Annahmen.",
    },
    {
        icon: BookCheck,
        title: "Immobilien & Photovoltaik aus einer Hand",
        description:
            "Sie erhalten Konzepte, die Immobilien und PV-Anlagen sinnvoll kombinieren – steuerlich durchdacht und langfristig ausgerichtet.",
    },
    {
        icon: ChartPie,
        title: "Transparente Rendite-Szenarien",
        description:
            "Wir zeigen klar, welche Spannen realistisch sind, wie sich Inflation auswirkt und welche Risiken berücksichtigt werden müssen.",
    },
    {
        icon: Users,
        title: "Begleitung auf Augenhöhe",
        description:
            "Als Sparringspartner für Unternehmer:innen und Führungskräfte sprechen wir Ihre Sprache – ohne Produktverkauf um jeden Preis.",
    },
    {
        icon: FolderSync,
        title: "Struktur statt Stückwerk",
        description:
            "Statt einzelner Produkte entwickeln wir eine kohärente Struktur, die zu Ihrer Vermögenssituation, Steuerlast und Lebensplanung passt.",
    },
    {
        icon: Zap,
        title: "Fokus Vermögensschutz",
        description:
            "Ziel ist nicht die nächste „Chance“, sondern ein belastbares Konzept, das Ihr Vermögen langfristig vor Kaufkraftverlust schützt.",
    },
];

import Link from 'next/link';

export default function Services() {
    return (
        <Wrapper>

            <section
                className="relative flex items-center justify-center py-24 md:pt-36 pt-36 md:py-36"
            >
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="https://images.unsplash.com/photo-1584752242818-b4bd7fb3fe10?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Blog Hintergund – Immobilien & Investments"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70" />
                </div>

                <div className="relative mx-auto max-w-3xl space-y-6 px-6 text-center">
                    <p data-aos="fade-up" className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d7f2e3]">
                        Leistungen
                    </p>

                    <h1 data-aos-delay="200" data-aos="fade-up" className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                        Strategische Leistungen
                    </h1>

                    <p data-aos-delay="400" data-aos="fade-up" className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-100/90 md:text-base">
                        Lösungsorientierte Beratung für Kapitalanlage-Immobilien und Photovoltaik-Investments.
                    </p>

                    <div data-aos-delay="600" data-aos="fade-up" className="flex justify-center pt-2">
                        <Button
                            asChild
                            className="bg-[#3d6252] px-7 py-6 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,0.5)] hover:bg-[#2f4f42]"
                        >
                            <Link href="#leistungen-übersicht">Leistungen im Überblick <ArrowRight /></Link>

                        </Button>
                    </div>
                </div>
            </section>

            <section className=" py-16 md:pb-24">
                <div className="mx-auto max-w-7xl px-6 text-center">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3d6252]">
                        Warum Graf Bernstorff Consulting
                    </p>

                    <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-[#1e1e1e]">
                        Was Mandant:innen besonders schätzen
                    </h2>

                    <p className="mt-4 text-base md:text-lg text-slate-600">
                        Rückmeldungen aus der Zusammenarbeit mit Unternehmer:innen, Selbständigen und Führungskräften.
                    </p>

                    <div className="mt-12 grid justify-center gap-x-12 gap-y-12 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="mx-auto max-w-xs">
                            <span className="text-5xl font-semibold text-[#3d6252]">98%</span>
                            <p className="mt-4 text-sm md:text-lg text-slate-700">
                                erleben mehr Klarheit bei der Strukturierung ihres Vermögens
                            </p>
                        </div>
                        <div className="mx-auto max-w-xs">
                            <span className="text-5xl font-semibold text-[#3d6252]">97%</span>
                            <p className="mt-4 text-sm md:text-lg text-slate-700">
                                bewerten die Aufbereitung von Zahlen, Szenarien und Risiken als „sehr hilfreich“
                            </p>
                        </div>
                        <div className="mx-auto max-w-xs">
                            <span className="text-5xl font-semibold text-[#3d6252]">99%</span>
                            <p className="mt-4 text-sm md:text-lg text-slate-700">
                                fühlen sich besser auf Entscheidungen zu Immobilien- und Photovoltaik-Investments vorbereitet
                            </p>
                        </div>
                    </div>

                    <p className="mt-6 text-xs text-slate-500">
                        Angaben basieren auf internen Auswertungen und Mandanten-Feedback – keine Garantie für zukünftige Ergebnisse.
                    </p>
                </div>
            </section>

            <section
                id="leistungen-übersicht"
                className="bg-[#f3f4f5] py-16 md:py-24"
            >
                <div className="mx-auto max-w-6xl px-6">
                    {/* Header */}
                    <div className="mb-10 text-center" data-aos="fade-up">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d6252]">
                            Leistungen im Überblick
                        </p>
                        <h2 className="mt-3 text-2xl font-semibold text-[#1e1e1e] md:text-3xl">
                            Drei Bausteine für Ihren Vermögensaufbau
                        </h2>
                        <p className="mt-3 text-sm text-slate-600 md:text-base">
                            Klar strukturiert, strategisch gedacht und abgestimmt auf Unternehmer:innen,
                            Selbständige und Führungskräfte.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid gap-4 md:grid-cols-3">
                        {/* Card 1 */}
                        <div
                            className="group flex flex-col rounded-xl border border-[#e0e4e7] bg-white p-6  transition-all duration-300 hover:border-[#d7f2e3] hover:shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="50"
                        >
                            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d7f2e3] text-[#3d6252]">
                                <Building2 className="h-5 w-5" />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold text-[#1e1e1e]">
                                Kapitalanlage-Immobilien
                            </h3>
                            <p className="mb-3 text-sm text-slate-600">
                                Auswahl, Strukturierung und Begleitung beim Aufbau eines professionellen
                                Immobilienportfolios.
                            </p>
                            <ul className="mt-1 space-y-1 text-sm text-slate-600">
                                <li>• Standort- und Objektanalyse</li>
                                <li>• Mietrendite & Cashflow-Planung</li>
                                <li>• Steuerlich optimierte Strukturierung</li>
                            </ul>
                        </div>

                        {/* Card 2 */}
                        <div
                            className="group flex flex-col rounded-xl border border-[#e0e4e7] bg-white p-6  transition-all duration-300 hover:border-[#d7f2e3] hover:shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="120"
                        >
                            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d7f2e3] text-[#3d6252]">
                                <SunMedium className="h-5 w-5" />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold text-[#1e1e1e]">
                                Photovoltaik-Investments
                            </h3>
                            <p className="mb-3 text-sm text-slate-600">
                                Planbare Erträge aus PV-Anlagen als Ergänzung zu klassischen
                                Kapitalanlage-Strategien.
                            </p>
                            <ul className="mt-1 space-y-1 text-sm text-slate-600">
                                <li>• Prüfung von Projekten & Betreibern</li>
                                <li>• Rendite- & Szenarioanalysen</li>
                                <li>• Integration in Ihre Vermögensstruktur</li>
                            </ul>
                        </div>

                        {/* Card 3 */}
                        <div
                            className="group flex flex-col rounded-xl border border-[#e0e4e7] bg-white p-6  transition-all duration-300 hover:border-[#d7f2e3] hover:shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="190"
                        >
                            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d7f2e3] text-[#3d6252]">
                                <LineChart className="h-5 w-5" />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold text-[#1e1e1e]">
                                Vermögensaufbau & Struktur
                            </h3>
                            <p className="mb-3 text-sm text-slate-600">
                                Ganzheitliche Betrachtung von Liquidität, Immobilien und
                                Beteiligungen – mit Fokus auf Klarheit.
                            </p>
                            <ul className="mt-1 space-y-1 text-sm text-slate-600">
                                <li>• Analyse Ihrer Vermögenssituation</li>
                                <li>• Strukturierung nach Risiko & Zielsetzung</li>
                                <li>• Laufende Begleitung nach Absprache</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>



            <section
                id="warum-graf-bernstorff-features"
                className="relative overflow-hidden bg-[#121914] py-18 md:py-24"
            >
                {/* Gradient accents using brand + accent */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#3d6252]/35 blur-3xl" />
                    <div className="absolute bottom-0 right-[-80px] h-72 w-72 rounded-full bg-[#d7f2e3]/25 blur-3xl" />
                </div>

                <div className="relative mx-auto max-w-6xl px-6">
                    {/* Section heading */}
                    <div className="max-w-xl space-y-4" data-aos="fade-up">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d7f2e3]">
                            Warum mit Graf Bernstorff arbeiten
                        </p>
                        <h2 className="text-2xl md:text-3xl font-semibold text-white">
                            Strukturierte Vermögensplanung statt Produktverkauf
                        </h2>
                        <p className="text-sm md:text-base text-slate-200/90">
                            Wir verbinden Immobilien, Photovoltaik und steuerliche Aspekte zu
                            einer klar nachvollziehbaren Strategie – speziell für
                            Unternehmer:innen und Führungskräfte.
                        </p>
                    </div>

                    {/* Content grid */}
                    <div className="mt-8 md:mt-12 grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-start">
                        {/* Left: Accordion with features */}
                        <div data-aos="fade-up" data-aos-delay="80">
                            <Accordion defaultValue="item-0" type="single" className="w-full">
                                {features.map(({ title, description, icon: Icon }, index) => (
                                    <AccordionItem
                                        key={index}
                                        value={`item-${index}`}
                                        className="group/accordion-item border-b border-white/10 data-[state=open]:border-b-2 data-[state=open]:border-[#3d6252]"
                                    >
                                        <AccordionTrigger className="text-sm md:text-base text-slate-100 [&>svg]:hidden group-first/accordion-item:pt-0">
                                            <div className="flex items-center gap-3">
                                                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#1b2621] text-[#d7f2e3] ring-1 ring-[#3d6252]/40">
                                                    <Icon className="h-4 w-4" />
                                                </span>
                                                <span>{title}</span>
                                            </div>
                                        </AccordionTrigger>
                                        <AccordionContent className="text-sm leading-relaxed text-slate-300">
                                            {description}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        {/* Right: Highlight card / Kennzahlen */}
                        <div
                            className="relative"
                            data-aos="zoom-in"
                            data-aos-delay="140"
                        >
                            {/* subtle brand gradient border */}
                            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-[#3d6252] via-[#d7f2e3] to-transparent opacity-60 blur-sm" />
                            <div className="relative rounded-3xl bg-[#0b1410] px-7 py-7 shadow-xl md:px-8 md:py-8">
                                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#d7f2e3]">
                                    Für Unternehmer:innen &amp; Führungskräfte
                                </p>

                                <div className="grid grid-cols-2 gap-5">
                                    <div className="space-y-1">
                                        <p className="text-3xl font-semibold text-white">15+</p>
                                        <p className="text-xs text-slate-300">
                                            Jahre Erfahrung im gehobenen Investment-Umfeld
                                        </p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-3xl font-semibold text-white">7–10%</p>
                                        <p className="text-xs text-slate-300">
                                            Ziel-Spanne für projektabhängige Rendite-Szenarien*
                                        </p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-3xl font-semibold text-white">1:1</p>
                                        <p className="text-xs text-slate-300">
                                            Persönliche Begleitung statt Standardkonzepten
                                        </p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-3xl font-semibold text-white">100%</p>
                                        <p className="text-xs text-slate-300">
                                            Fokus auf langfristigen Vermögensschutz vor Inflation
                                        </p>
                                    </div>
                                </div>

                                <p className="mt-5 text-[11px] text-slate-400">
                                    *Keine Renditegarantie – Szenarien auf Basis konservativer
                                    Annahmen und aktueller Marktdaten.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>






            {/* SECTION 3: WIE WIR ARBEITEN / PROZESS */}
            <section
                id="prozess"
                className="bg-white py-16 md:py-24"
            >
                <div className="mx-auto max-w-5xl px-6">
                    {/* Header */}
                    <div className="mb-12 text-center" data-aos="fade-up">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d6252]">
                            Prozess
                        </p>
                        <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-[#1e1e1e]">
                            In drei Schritten zur passenden Strategie
                        </h2>
                        <p className="mt-3 text-sm md:text-base text-slate-600">
                            Klar strukturierter Ablauf – mit Fokus auf Ihre Ziele, Zahlen und steuerliche Situation.
                        </p>
                    </div>

                    {/* Steps */}
                    <div className="relative grid gap-4 md:grid-cols-3">
                        {/* Vertical / horizontal line (for desktop) */}
                        <div className="pointer-events-none absolute inset-x-8 top-16 hidden h-px bg-gradient-to-r from-transparent via-[#d7f2e3] to-transparent md:block" />

                        {/* Step 1 */}
                        <div
                            className="relative flex flex-col rounded-xl border border-[#e2e5e8] bg-[#f9fafb] p-6 transition-all duration-300 hover:border-[#d7f2e3] hover:shadow-md"
                            data-aos="fade-up"
                            data-aos-delay="50"
                        >
                            <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#3d6252] text-sm font-semibold text-white">
                                1
                            </div>
                            <h3 className="mb-2 text-lg font-semibold text-[#1e1e1e]">
                                Analyse & Einordnung
                            </h3>
                            <p className="text-sm text-slate-600">
                                Verständnis Ihrer Vermögenssituation, Ziele und steuerlichen Rahmenbedingungen – diskret und strukturiert.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div
                            className="relative flex flex-col rounded-xl border border-[#e2e5e8] bg-white p-6 transition-all duration-300 hover:border-[#d7f2e3] hover:shadow-md"
                            data-aos="fade-up"
                            data-aos-delay="120"
                        >
                            <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#d7f2e3] text-sm font-semibold text-[#1e1e1e]">
                                2
                            </div>
                            <h3 className="mb-2 text-lg font-semibold text-[#1e1e1e]">
                                Strategische Konzeption
                            </h3>
                            <p className="text-sm text-slate-600">
                                Entwicklung eines klaren Konzepts mit Kapitalanlage-Immobilien und Photovoltaik-Investments – mit belastbaren Zahlen.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div
                            className="relative flex flex-col rounded-xl border border-[#e2e5e8] bg-white p-6 transition-all duration-300 hover:border-[#d7f2e3] hover:shadow-md"
                            data-aos="fade-up"
                            data-aos-delay="190"
                        >
                            <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-[#f3f4f5] text-sm font-semibold text-[#1e1e1e]">
                                3
                            </div>
                            <h3 className="mb-2 text-lg font-semibold text-[#1e1e1e]">
                                Umsetzung & Begleitung
                            </h3>
                            <p className="text-sm text-slate-600">
                                Auswahl konkreter Projekte, Abstimmung mit Partnern und fortlaufende Überprüfung der Strategie nach Bedarf.
                            </p>
                        </div>
                    </div>
                </div>
            </section>



            <CallToAction />


        </Wrapper>
    )
}
