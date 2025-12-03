"use client"
import Wrapper from '@/app/Wrapper'
import React from 'react'
import { PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
    Area,
    AreaChart,
    PieChart,
    Pie,
    Cell,
} from "recharts";

import { PieChart as PieIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { ShieldCheck, LineChart, Coins, SunMedium } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BarChart3 } from "lucide-react";
import { Home, Sun, Layers } from "lucide-react";
import { TrendingDown, TrendingUp, CheckCircle2, XCircle } from "lucide-react";
import CallToAction from '@/components/CallToAction';


const features = [
    {
        category: "Kapitalanlage-Immobilien",
        title: "Starker Immobilienkern als Basis",
        details:
            "Neubau- oder Denkmalschutz-Immobilien bilden das Fundament Ihrer Strategie: stabile Werte, langfristige Mieteinnahmen und attraktive steuerliche Abschreibungen.",
        tutorialLink: "/contact",
        img:"https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        category: "Photovoltaik-Investments",
        title: "Zusätzlicher PV-Cashflow on top",
        details:
            "Moderne Photovoltaik-Anlagen erzeugen laufende Erträge – unabhängig vom Mieter. Staatliche Förderungen und langfristige Verträge schaffen zusätzliche Sicherheit.",
        tutorialLink: "/contact",
        img:"https://images.unsplash.com/photo-1713789296574-0e56ecd53cbb?q=80&w=1220&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        category: "Synergie-Effekt",
        title: "Immobilie + PV = Maximale Stabilität",
        details:
            "Die Kombination aus Sachwert Immobilie und technischem Cashflow aus Photovoltaik nutzt Steuervorteile, senkt Nebenkosten und steigert die Gesamtrendite deutlich.",
        tutorialLink: "/contact",
        img:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        category: "Vermögensaufbau",
        title: "Planbare Strategie für Entscheider",
        details:
            "Wir denken Vermögensaufbau langfristig: strukturierte Konzepte, klare Zahlen und Strategien, die speziell auf Unternehmer, Fach- und Führungskräfte zugeschnitten sind.",
        tutorialLink: "/contact",
        img:"https://images.unsplash.com/photo-1576941089067-2de3c901e126?q=80&w=1278&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
];

export default function Waruminvestieren() {
    const immobilienData = [
        { year: "2008", value: 40 },
        { year: "2015", value: 80 },
        { year: "2023", value: 120 },
        { year: "2024", value: 160 },
        { year: "2025", value: 180 },
    ];

    const inflationData = [
        { year: "2013", value: 100 },
        { year: "2018", value: 85 },
        { year: "2023", value: 75 },
        { year: "2023", value: 65 },
        { year: "2023", value: 55 },
        { year: "2023", value: 45 },
        { year: "2023", value: 35 },
    ];

    const steuerData = [
        { name: "Steuervorteil", value: 65 },
        { name: "Rest", value: 35 },
    ];

    const COLORS = ["#3d6252", "#cfe7dc"];
    return (
        <Wrapper>

            <section
                className="relative flex items-center justify-center py-24 md:pt-36 pt-36 md:py-36"
            >
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Blog Hintergund – Immobilien & Investments"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70" />
                </div>

                <div className="relative mx-auto max-w-3xl space-y-6 px-6 text-center">
                    <p data-aos="fade-up" className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d7f2e3]">
                        Warum investieren?
                    </p>

                    <h1 data-aos-delay="200" data-aos="fade-up" className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                        Ihr Vermögen arbeitet – auch wenn Sie es nicht tun.
                    </h1>

                    <p data-aos-delay="400" data-aos="fade-up" className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-100/90 md:text-base">
                        Kapitalanlage-Immobilien und Photovoltaik bieten Stabilität,
                        steuerliche Vorteile und planbare Cashflows – unabhängig von
                        wirtschaftlichen Schwankungen. Eine klare Strategie entscheidet über
                        Ihren langfristigen Vermögenszuwachs.
                    </p>

                    <div data-aos-delay="600" data-aos="fade-up" className="flex justify-center pt-2">
                        <Button
                            asChild
                            className="bg-[#3d6252] px-7 py-6 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,0.5)] hover:bg-[#2f4f42]"
                        >
                            <Link href="#readmore">Mehr lesen <ArrowRight /></Link>

                        </Button>
                    </div>
                </div>
            </section>


            <section id='readmore' className="bg-white py-16 md:py-24" data-aos="fade-up">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-3xl space-y-4 text-center">
                        <p
                            className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d6252]"
                            data-aos="fade-up"
                        >
                            Ihre Vorteile
                        </p>

                        <h2
                            className="text-balance text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl"
                            data-aos="fade-up"
                        >
                            Warum Immobilien &amp; Photovoltaik zu den stabilsten Investments gehören
                        </h2>

                        <p
                            className="text-sm leading-relaxed text-slate-600 md:text-base"
                            data-aos="fade-up"
                        >
                            Zwei starke Sachwerte – kombiniert in einem klar berechneten Konzept.
                            Sie profitieren von Sicherheit, steuerlichen Vorteilen und planbaren
                            Cashflows.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <div
                            className="rounded-2xl border border-slate-200 bg-white p-6 md:py-10 transition-all hover:shadow-md"
                            data-aos="fade-up"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f3ec]">
                                <ShieldCheck className="h-5 w-5 text-[#3d6252]" />
                            </div>
                            <h3 className="mt-6 text-lg font-semibold text-slate-900">
                                Krisensichere Sachwerte
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                Immobilien &amp; PV-Anlagen behalten langfristig Wert – unabhängig
                                von Marktvolatilität.
                            </p>
                        </div>

                        <div
                            className="rounded-2xl border border-slate-200 bg-white p-6 md:py-10 transition-all hover:shadow-md"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f3ec]">
                                <LineChart className="h-5 w-5 text-[#3d6252]" />
                            </div>
                            <h3 className="mt-6 text-lg font-semibold text-slate-900">
                                Planbare Renditen
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                Laufende Mieteinnahmen &amp; PV-Erträge sorgen für stabile Cashflows.
                            </p>
                        </div>

                        <div
                            className="rounded-2xl border border-slate-200 bg-white p-6 md:py-10 transition-all hover:shadow-md"
                            data-aos-delay="200"
                            data-aos="fade-up"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f3ec]">
                                <Coins className="h-5 w-5 text-[#3d6252]" />
                            </div>
                            <h3 className="mt-6 text-lg font-semibold text-slate-900">
                                Steuerliche Vorteile
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                Abschreibungen &amp; Finanzierungsmodelle reduzieren Ihre jährliche
                                Steuerlast.
                            </p>
                        </div>

                        <div
                            className="rounded-2xl border border-slate-200 bg-white p-6 md:py-10 transition-all hover:shadow-md"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f3ec]">
                                <SunMedium className="h-5 w-5 text-[#3d6252]" />
                            </div>
                            <h3 className="mt-6 text-lg font-semibold text-slate-900">
                                Zusatz-Cashflow durch PV
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">
                                Moderne Photovoltaik sorgt für zusätzliche Erträge – oft völlig
                                unabhängig vom Mieter.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="bg-[#f8f9fa] py-16 md:py-24"

            >
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-3xl text-center space-y-4">
                        <p
                            className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d6252]"
                            data-aos="fade-up"
                        >
                            Der Unterschied
                        </p>

                        <h2
                            className="text-balance text-2xl md:text-3xl font-semibold tracking-tight text-slate-900"
                            data-aos="fade-up"
                        >
                            So entwickelt sich Ihr Vermögen – mit und ohne Investment
                        </h2>

                        <p
                            className="text-sm md:text-base leading-relaxed text-slate-600"
                            data-aos="fade-up"
                        >
                            Zahlen sind ehrlich: Wer nicht investiert, verliert langfristig Kaufkraft.
                            Wer strategisch investiert, baut planbares Vermögen auf.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-6 md:grid-cols-2">
                        <div
                            className="rounded-3xl border border-red-200 bg-white p-8 shadow-sm"
                            data-aos="fade-up"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                                    <TrendingDown className="h-6 w-6 text-red-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-red-600">
                                    Ohne Investment
                                </h3>
                            </div>

                            <p className="mt-4 text-sm leading-relaxed text-slate-600">
                                Geld verliert jedes Jahr durch Inflation an Wert. Parallel sinken
                                Chancen für steuerliche Vorteile oder die Nutzung von Fremdkapital.
                            </p>

                            <ul className="mt-6 space-y-3 text-sm">
                                <li className="flex items-center gap-2 text-red-600">
                                    <XCircle className="h-4 w-4" />
                                    Kein Vermögenswachstum
                                </li>
                                <li className="flex items-center gap-2 text-red-600">
                                    <XCircle className="h-4 w-4" />
                                    Hohe Inflation = Kaufkraftverlust
                                </li>
                                <li className="flex items-center gap-2 text-red-600">
                                    <XCircle className="h-4 w-4" />
                                    Keine Nutzung steuerlicher Möglichkeiten
                                </li>
                                <li className="flex items-center gap-2 text-red-600">
                                    <XCircle className="h-4 w-4" />
                                    Keine Mieteinnahmen oder Zusatzcashflow
                                </li>
                            </ul>

                            <div className="mt-6 rounded-lg bg-red-50 p-4 text-center">
                                <p className="text-sm font-semibold text-red-700">
                                    Prognose: <span className="font-bold">–25% Kaufkraft in 10 Jahren</span>
                                </p>
                            </div>
                        </div>

                        <div
                            className="rounded-3xl border border-green-200 bg-white p-8 shadow-sm"
                            data-aos="fade-up"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f3ec]">
                                    <TrendingUp className="h-6 w-6 text-[#3d6252]" />
                                </div>
                                <h3 className="text-xl font-semibold text-[#3d6252]">
                                    Strategisches Investment
                                </h3>
                            </div>

                            <p className="mt-4 text-sm leading-relaxed text-slate-600">
                                Immobilien & Photovoltaik erzeugen laufende Einnahmen, reduzieren steuerliche Belastungen und wachsen langfristig im Wert.
                            </p>

                            <ul className="mt-6 space-y-3 text-sm">
                                <li className="flex items-center gap-2 text-[#3d6252]">
                                    <CheckCircle2 className="h-4 w-4" />
                                    Stabiler Vermögensaufbau
                                </li>
                                <li className="flex items-center gap-2 text-[#3d6252]">
                                    <CheckCircle2 className="h-4 w-4" />
                                    Mieteinnahmen & PV-Erträge
                                </li>
                                <li className="flex items-center gap-2 text-[#3d6252]">
                                    <CheckCircle2 className="h-4 w-4" />
                                    Nutzbare Abschreibungen & Steuervorteile
                                </li>
                                <li className="flex items-center gap-2 text-[#3d6252]">
                                    <CheckCircle2 className="h-4 w-4" />
                                    Langfristige Wertsteigerung
                                </li>
                            </ul>

                            <div className="mt-6 rounded-lg bg-[#e7f3ec] p-4 text-center">
                                <p className="text-sm font-semibold text-[#2d4c3d]">
                                    Prognose: <span className="font-bold">+80–150% Vermögenszuwachs in 15 Jahren</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id='Zahlen&Entwicklungen' className="bg-white py-16 md:py-24" >
                <div className="mx-auto max-w-7xl px-6">
                    <div className="mx-auto max-w-3xl text-center space-y-4">
                        <p
                            className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d6252]"
                            data-aos="fade-up"
                        >
                            Zahlen & Entwicklungen
                        </p>

                        <h2
                            className="text-balance text-2xl md:text-3xl font-semibold tracking-tight text-slate-900"
                            data-aos="fade-up"
                        >
                            Der deutsche Markt zeigt klar: Sachwerte schlagen Geldwerte
                        </h2>

                        <p
                            className="text-sm md:text-base leading-relaxed text-slate-600"
                            data-aos="fade-up"
                        >
                            Während Kaufkraft durch Inflation sinkt, steigen Immobilienwerte und
                            PV-Erträge konstant. Fakten zeigen, warum ein Einstieg heute sinnvoller
                            ist als in 5 Jahren.
                        </p>
                    </div>

                    {/* CHART GRID */}
                    <div className="mt-14 grid gap-4 md:grid-cols-3">
                        {/* CARD 1 — BAR CHART */}
                        <div
                            className="rounded-lg border border-slate-200 bg-slate-50 p-8 "
                            data-aos="fade-up"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f3ec]">
                                <BarChart3 className="h-6 w-6 text-[#3d6252]" />
                            </div>

                            <h3 className="mt-5 text-lg font-semibold text-slate-900">
                                Immobilienpreis-Entwicklung
                            </h3>

                            <div className="mt-4 h-40 w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={immobilienData}>
                                        <XAxis dataKey="year" hide />
                                        <YAxis hide />
                                        <Tooltip cursor={{ fill: "#f1f5f9" }} />
                                        <Bar dataKey="value" fill="#3d6252" radius={6} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>

                            <p className="mt-3 text-xs text-slate-500">
                                Durchschnittliche Wertsteigerung der letzten 15 Jahre
                            </p>
                        </div>

                        {/* CARD 2 — AREA CHART */}
                        <div
                            className="rounded-lg border border-slate-200 bg-slate-50 p-8 "
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f3ec]">
                                <TrendingUp className="h-6 w-6 text-[#3d6252]" />
                            </div>

                            <h3 className="mt-5 text-lg font-semibold text-slate-900">
                                Inflation & Kaufkraftverlust
                            </h3>

                            <div className="mt-4 h-40 w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={inflationData}>
                                        <XAxis dataKey="year" hide />
                                        <YAxis hide />
                                        <Tooltip cursor={{ fill: "#fee2e2" }} />
                                        <Area
                                            type="monotone"
                                            dataKey="value"
                                            stroke="#3d6252"
                                            fill="#cfe7dc"
                                            strokeWidth={2}
                                        />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>

                            <p className="mt-3 text-xs text-slate-500">
                                Kaufkraftverlust der letzten 10 Jahre
                            </p>
                        </div>

                        {/* CARD 3 — DONUT CHART */}
                        <div
                            className="rounded-lg border border-slate-200 bg-slate-50 p-8 "
                            data-aos="fade-up"
                            data-aos-delay="400"

                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f3ec]">
                                <PieIcon className="h-6 w-6 text-[#3d6252]" />
                            </div>

                            <h3 className="mt-5 text-lg font-semibold text-slate-900">
                                Steuerliche Vorteile nutzen
                            </h3>

                            <div className="mt-4 h-40 w-full flex items-center justify-center">
                                <ResponsiveContainer width="80%" height="80%">
                                    <PieChart>
                                        <Pie
                                            data={steuerData}
                                            innerRadius={40}
                                            outerRadius={60}
                                            paddingAngle={3}
                                            dataKey="value"
                                        >
                                            {steuerData.map((_, index) => (
                                                <Cell key={index} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>

                            <p className="mt-3 text-xs text-slate-500">
                                Abschreibungen, Zinsen & PV-Förderungen
                            </p>
                        </div>
                    </div>

                    {/* FOOTER BOX */}
                    <div
                        className="mt-6 rounded-lg border border-slate-200 bg-[#e7f3ec] p-4   text-center"
                        data-aos="fade-up"
                    >
                        <p className="text-sm md:text-base font-semibold text-[#2f4a3d]">
                            Daten zeigen: Wer heute strategisch investiert,
                            <span className="text-[#3d6252]"> baut doppelt so schnell Vermögen auf.</span>
                        </p>
                    </div>
                </div>
            </section>


            <section
                className="relative overflow-hidden bg-[#f3f4f5] py-20 md:py-28"
                id="strategie"
                data-aos="fade-up"
            >
                {/* Mesh Background */}
                <div className="absolute inset-0 -z-10 opacity-70">
                    <div className="absolute top-[-10%] left-[10%] h-72 w-72 rounded-full bg-[#d7f2e3] blur-[120px]" />
                    <div className="absolute bottom-[-10%] right-[5%] h-80 w-80 rounded-full bg-[#3d6252]/30 blur-[140px]" />
                    <div className="absolute top-[40%] left-[55%] h-60 w-60 rounded-full bg-[#bfe8d5] blur-[100px]" />
                </div>

                <div className="relative mx-auto w-full max-w-6xl px-6">
                    {/* Heading */}
                    <div className="mx-auto max-w-3xl text-center">
                        <p
                            className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d6252]"
                            data-aos="fade-up"
                        >
                            Strategie im Überblick
                        </p>
                        <h2
                            className="mt-3 text-balance text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl"
                            data-aos="fade-up"
                        >
                            So verbindet unsere Methode Immobilie &amp; Photovoltaik
                        </h2>
                        <p
                            className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base"
                            data-aos="fade-up"
                        >
                            Ein stabiler Immobilienkern, ergänzt durch modernen PV-Cashflow –
                            für mehr Sicherheit, höhere Rendite und echten Vermögensaufbau im
                            deutschsprachigen Raum.
                        </p>
                    </div>

                    {/* Feature Rows */}
                    <div className="mt-12 md:mt-16 w-full mx-auto space-y-16">
                        {features.map((feature, index) => (
                            <div
                                key={feature.category}
                                className="flex flex-col items-center gap-x-12 gap-y-6 md:flex-row md:even:flex-row-reverse"
                                data-aos="fade-up"
                                data-aos-delay={index * 80}
                            >
                                {/* Visual / Placeholder */}
                                <div className="basis-1/2 w-full">
                                    <div className="aspect-[4/3] rounded-3xl border border-white/60 bg-white/60 shadow-md backdrop-blur-lg" >
                                        <Image src={feature.img} alt='Img' fill className='rounded-lg' />
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="basis-1/2 shrink-0">
                                    <span className="uppercase text-xs font-semibold tracking-[0.18em] text-[#3d6252]">
                                        {feature.category}
                                    </span>
                                    <h4 className="my-3 text-2xl md:text-3xl font-semibold tracking-[-0.02em] text-slate-900">
                                        {feature.title}
                                    </h4>
                                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                                        {feature.details}
                                    </p>
                                    <Button
                                        asChild
                                        size="lg"
                                        className="mt-6 rounded-lg gap-3 bg-[#3d6252] hover:bg-[#2d4c3d]"
                                    >
                                        <Link href={feature.tutorialLink}>
                                            Mehr erfahren <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <CallToAction />

        </Wrapper>
    )
}
