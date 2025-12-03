"use client"
import Wrapper from '@/app/Wrapper'
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, LineChart, HelpCircle, Contact, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Euro, TrendingUp } from "lucide-react";
import { Compass, FileSignature, Handshake } from "lucide-react";
import { Building2, SunMedium, BarChart3 } from "lucide-react";
import { CheckCircle2, User, Briefcase } from "lucide-react";
import { Calculator, BarChart } from "lucide-react";
import { Clock, Newspaper } from "lucide-react";
import Testimonials from '@/components/Testimonials';
import Faqs from '@/components/Faqs';

import { useState } from "react";
import { Play, X } from "lucide-react";



export default function HomePage() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <Wrapper>


            <section className="relative overflow-hidden pt-40 pb-16 text-slate-50 min-h-screen">
                <div className="pointer-events-none absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Moderne Immobilie mit Photovoltaik"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-black/40" />
                </div>

                <div
                    className="relative mx-auto max-w-7xl px-4 md:px-6"
                >
                    <div
                        className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="space-y-6" data-aos="fade-in" data-aos-delay="150">
                            <div
                                className="md:inline-flex flex md:justify-start  justify-center items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] backdrop-blur"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <span className="h-1.5 w-1.5 rounded-full bg-[#3d6252]" />
                                Graf Bernstorff Consulting
                            </div>

                            <div
                                className="space-y-4 md:text-start text-center"
                                data-aos="fade-up"
                                data-aos-delay="300"
                                data-aos-duration="900"
                            >
                                <h1 className="text-balance  text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
                                    Vermögen sichern mit Immobilien &amp; Photovoltaik.
                                    <span
                                        className="block text-[#a8e8c9]"
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                    >
                                        Planbare Erträge für anspruchsvolle Investor:innen.
                                    </span>
                                </h1>
                                <p
                                    className="max-w-xl text-sm leading-relaxed text-slate-100/90 sm:text-base"
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                >
                                    Wir entwickeln für Sie klare Investmentkonzepte mit ausgewählten
                                    Kapitalanlage-Immobilien und Photovoltaik – transparent,
                                    zahlenbasiert und persönlich begleitet.
                                </p>
                            </div>

                            <div
                                className="flex items-center md:block hidden gap-2 text-xs text-slate-200/90"
                                data-aos="fade-up"
                                data-aos-delay="500"
                            >
                                <MapPin className="h-4 w-4 text-[#a8e8c9]" />
                                <span>Standorte mit starker Nachfrage im deutschsprachigen Raum</span>
                            </div>

                            <div
                                className="flex flex-wrap items-center gap-4"
                                data-aos="fade-up"
                                data-aos-delay="600"
                            >
                                <Button
                                    asChild
                                    className="bg-[#265440] px-6 md:w-auto w-full text-sm font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,0.6)] hover:bg-[#2f6a51]"
                                >
                                    <Link href="/kontakt#beratung">
                                        Finanzmodell anfordern
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>

                                <Button
                                    asChild
                                    variant="outline"
                                    className="border-white/50 bg-transparent px-6 md:w-auto w-full text-sm font-semibold text-slate-50 hover:bg-white/10 hover:text-white"
                                >
                                    <Link href="/warum-investieren">
                                        Warum jetzt investieren?
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <div
                            className="mt-4 flex justify-end lg:mt-0"
                            data-aos-delay="250"
                        >
                            <div className="flex w-full max-w-xs flex-col gap-4">
                                <div
                                    className="rounded-xl border border-white/25 bg-white/10 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.65)] backdrop-blur-md"
                                    data-aos="fade-up"
                                    data-aos-delay="100"
                                >
                                    <div className="flex items-center justify-between gap-2">
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.16em] text-slate-200">
                                                Geplante Mietrendite*
                                            </p>
                                            <p className="mt-1 text-2xl font-semibold text-white">
                                                3–5&nbsp;% p.a.
                                            </p>
                                        </div>
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3d6252]/60">
                                            <LineChart className="h-5 w-5 text-[#a8e8c9]" />
                                        </div>
                                    </div>
                                    <p className="mt-3 text-[0.7rem] text-slate-200/90">
                                        Langfristige Ertragsmodelle mit Fokus auf solide Vermietung.
                                    </p>
                                </div>

                                <div
                                    className="rounded-xl border border-white/25 bg-white/10 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.6)] backdrop-blur-md"
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                >
                                    <div className="flex items-center justify-between gap-2">
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.16em] text-slate-200">
                                                Anlagehorizont
                                            </p>
                                            <p className="mt-1 text-2xl font-semibold text-white">
                                                10–20 Jahre
                                            </p>
                                        </div>
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3d6252]/60">
                                            <Clock className="h-5 w-5 text-[#a8e8c9]" />
                                        </div>
                                    </div>
                                    <p className="mt-3 text-[0.7rem] text-slate-200/90">
                                        Strategische Planung von Tilgung, Steuern und Cashflows.
                                    </p>
                                </div>

                                <div
                                    className="rounded-xl border border-white/25 bg-white/10 p-4 shadow-[0_18px_40px_rgba(0,0,0,0.55)] backdrop-blur-md"
                                    data-aos="fade-up"
                                    data-aos-delay="500"
                                >
                                    <div className="flex items-center justify-between gap-2">
                                        <div>
                                            <p className="text-xs uppercase tracking-[0.16em] text-slate-200">
                                                Sicherheit &amp; Struktur
                                            </p>
                                            <p className="mt-1 text-2xl font-semibold text-white">
                                                1:1 Betreuung
                                            </p>
                                        </div>
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3d6252]/60">
                                            <ShieldCheck className="h-5 w-5 text-[#a8e8c9]" />
                                        </div>
                                    </div>
                                    <p className="mt-3 text-[0.7rem] text-slate-200/90">
                                        Direkter Kontakt zu Moritz Bernstorff und seinem Expertennetzwerk.
                                    </p>
                                </div>

                                <p
                                    className="mt-1 md:block hidden text-[0.65rem] text-slate-300/90"
                                    data-aos="fade-in"
                                    data-aos-delay="600"
                                >
                                    Beispielwerte. Konkrete Zahlen erhalten Sie in Ihrer
                                    persönlichen Berechnung.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="bg-[#f3f4f5] py-16 md:py-24 overflow-x-hidden"
                data-aos="fade-in"
                data-aos-duration="800"
            >
                <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 text-slate-900 md:grid md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center md:gap-16">
                    {/* Text side */}
                    <div
                        className="space-y-5"
                        data-aos="fade-up"
                        data-aos-delay="120"
                    >
                        <p
                            className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500"
                            data-aos="fade-up"
                        >
                            Über&nbsp;uns
                        </p>

                        <h1
                            className="text-balance text-2xl font-bold leading-tight tracking-tight md:text-3xl"
                            data-aos="fade-right"
                        >
                            Wir planen, strukturieren und begleiten –{" "}
                            <span className="text-[#3d6252]">
                                Sie bauen Vermögen auf.
                            </span>
                        </h1>

                        <p
                            className="text-sm leading-relaxed text-slate-700 md:text-base"
                            data-aos="fade-up"
                        >
                            Sie investieren in ausgewählte Kapitalanlage-Immobilien und
                            Photovoltaik-Projekte – wir kümmern uns um Analyse, Konzept,
                            Objektwahl und die Abstimmung mit Finanzierung, Steuer- und
                            Rechtspartnern. Ziel ist ein klares, nachvollziehbares
                            Gesamtkonzept, das zu Ihrer Lebenssituation und Ihren Zielen passt.
                        </p>

                        <p
                            className="text-sm leading-relaxed text-slate-700 md:text-base"
                            data-aos="fade-up"
                        >
                            Klarheit, Zahlen, Strategie –{" "}
                            <span
                                className="font-semibold text-[#3d6252]"
                                data-aos="zoom-in-up"
                                data-aos-delay="380"
                            >
                                wir gestalten, Sie profitieren.
                            </span>{" "}
                            An Ihrer Seite: Moritz von Graf Bernstorff mit über 28 Jahren
                            Erfahrung in Finanzplanung, Immobilien und langfristigem
                            Vermögensaufbau.
                        </p>

                        <div
                            className="mt-4 flex flex-wrap gap-3 text-xs text-slate-600"
                            data-aos="fade-up"
                        >
                            <span className="rounded-full bg-white px-3 py-1">
                                28+ Jahre Erfahrung in Finanz- &amp; Immobilienstrategie
                            </span>
                            <span className="rounded-full bg-white px-3 py-1">
                                Fokus: Kapitalanlage-Immobilien &amp; Photovoltaik
                            </span>
                            <span className="rounded-full bg-white px-3 py-1">
                                Persönliche 1:1-Begleitung
                            </span>
                        </div>
                    </div>

                    {/* Image side */}
                    <div
                        className="relative mx-auto h-[30rem] w-full max-w-lg md:h-96"
                        data-aos="zoom-in-up"
                    >
                        <div className="absolute -inset-4 rounded-3xl bg-[#3d6252]/10 blur-2xl" />
                        <div className="relative h-full w-full overflow-hidden rounded-3xl bg-slate-200 shadow-[0_18px_40px_rgba(15,23,42,0.3)]">
                            <Image
                                src="/moritz-von-graf-bernstorff.jpg"
                                alt="Moritz von Graf Bernstorff"
                                width={700}
                                height={700}
                                className="object-cover h-full"
                                priority
                            />
                        </div>

                        <div
                            className="absolute -bottom-8 left-4 w-[93%] rounded-2xl bg-white px-4 py-3 text-xs text-slate-800 shadow-lg md:text-[0.7rem]"
                            data-aos="fade-up"
                            data-aos-delay="420"
                        >
                            <p className="font-semibold">
                                Moritz von Graf Bernstorff
                            </p>
                            <p className="text-[0.7rem] text-slate-600">
                                Gründer &amp; Berater · Spezialisiert auf Kapitalanlage-Immobilien,
                                Photovoltaik &amp; strategische Vermögensplanung für
                                Unternehmer:innen und Führungskräfte.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section
                className="bg-[#f3f4f5] md:pb-24 md:py-16 py-8 text-slate-900"
                data-aos="fade-in"
                data-aos-duration="800"
            >
                <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 md:px-6">
                    {/* Headline */}
                    <div
                        className="mx-auto max-w-4xl text-center"
                        data-aos="fade-up"
                        data-aos-delay="150"
                        data-aos-duration="900"
                    >
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d6252]">
                            Struktur statt Zufall
                        </p>
                        <h2 className="mt-2 text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-4xl">
                            In drei klaren Schritten vom ersten Gespräch zum tragfähigen Investment.
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                            Wir strukturieren Ihren Weg zur Kapitalanlage – verständlich, planbar und
                            auf Ihre Situation abgestimmt.
                        </p>
                    </div>

                    {/* 3 steps */}
                    <div className="grid gap-6 md:grid-cols-3">
                        {/* Step 01 */}
                        <div
                            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition-transform hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(15,23,42,0.12)]"
                            data-aos="fade-up"

                        >
                            <div className="mb-5 flex items-center justify-between">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3d6252] text-sm font-semibold text-white">
                                    01
                                </span>
                                <Compass className="h-5 w-5 text-slate-500" />
                            </div>
                            <h3 className="text-sm font-semibold tracking-tight">
                                Analyse &amp; Klarheit
                            </h3>
                            <p className="mt-2 text-xs leading-relaxed text-slate-600">
                                Wir sprechen über Ziele, Einkommen, Vermögen und bestehende Verträge.
                                Sie erhalten eine klare Einschätzung, welcher Investitionsrahmen realistisch ist.
                            </p>
                            <div className="mt-4 rounded-2xl bg-slate-50 px-3 py-2 text-[0.7rem] text-slate-500">
                                Ergebnis: ein klares Bild Ihrer Ausgangssituation.
                            </div>
                        </div>

                        {/* Step 02 */}
                        <div
                            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition-transform hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(15,23,42,0.12)]"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <div className="mb-5 flex items-center justify-between">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                                    02
                                </span>
                                <FileSignature className="h-5 w-5 text-slate-500" />
                            </div>
                            <h3 className="text-sm font-semibold tracking-tight">
                                Konzept &amp; Objektwahl
                            </h3>
                            <p className="mt-2 text-xs leading-relaxed text-slate-600">
                                Auf Basis Ihrer Kennzahlen entwickeln wir konkrete Szenarien mit
                                geprüften Immobilien und passenden PV-Lösungen.
                            </p>
                            <ul className="mt-3 space-y-1 text-[0.7rem] text-slate-500">
                                <li>• Standort- &amp; Objektanalyse</li>
                                <li>• Finanzierung &amp; Steuer im Blick</li>
                                <li>• Szenarien: konservativ bis dynamisch</li>
                            </ul>
                        </div>

                        {/* Step 03 */}
                        <div
                            className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] transition-transform hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(15,23,42,0.12)]"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            <div className="mb-5 flex items-center justify-between">
                                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#e5e6e7] text-sm font-semibold text-slate-900">
                                    03
                                </span>
                                <Handshake className="h-5 w-5 text-slate-500" />
                            </div>
                            <h3 className="text-sm font-semibold tracking-tight">
                                Umsetzung &amp; Begleitung
                            </h3>
                            <p className="mt-2 text-xs leading-relaxed text-slate-600">
                                Wir begleiten Sie von der Finanzierungszusage bis zur Vermietung und
                                Inbetriebnahme der PV-Anlage.
                            </p>
                            <div className="mt-4 grid grid-cols-1 gap-2 text-[0.7rem] text-slate-500">
                                <div className="rounded-2xl bg-slate-50 px-3 py-2">
                                    Abstimmung mit Steuer-, Finanz- und Rechtspartnern.
                                </div>
                                <div className="rounded-2xl bg-slate-50 px-3 py-2">
                                    Regelmäßige Überprüfung und Anpassung der Strategie.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Centered CTA below cards */}
                    <div
                        className="mt-4 flex flex-col items-center gap-2 text-center"
                        data-aos="fade-up"
                    >
                        <Button
                            asChild
                            className="px-6 text-sm font-semibold text-white bg-[#3d6252] hover:bg-[#314e42]"
                        >
                            <Link href="/lead-anfrage">
                                In 4 Schritten prüfen, ob Sie passen
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <p className="text-[0.7rem] text-slate-600">
                            Kurzes Erstgespräch, klare Einschätzung – unverbindlich.
                        </p>
                    </div>
                </div>
            </section>


            <section
                className="bg-[#0b1412] py-16 md:py-28 text-slate-50"
            >
                <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:px-6 lg:grid lg:grid-cols-[1.1fr_minmax(0,1.1fr)] lg:items-stretch">
                    {/* Left content */}
                    <div
                        className="flex flex-col justify-center gap-6"
                        data-aos="fade-up"
                        data-aos-delay="120"
                        data-aos-duration="900"
                    >
                        <div
                            className="inline-flex max-w-max items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.18em]"
                            data-aos="zoom-in-up"
                            data-aos-delay="180"
                        >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#3d6252]" />
                            Zwei Säulen, ein Ziel
                        </div>

                        <h2
                            className="text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-3xl"
                            data-aos="fade-up"
                            data-aos-delay="220"
                        >
                            Premium-Immobilien &amp; Photovoltaik
                            <span
                                className="block text-[#d7f2e3]"
                                data-aos="zoom-in-up"
                                data-aos-delay="260"
                            >
                                als klar strukturierte Kapitalanlage.
                            </span>
                        </h2>

                        <p
                            className="max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base"
                            data-aos="fade-up"
                            data-aos-delay="280"
                        >
                            Graf Bernstorff Consulting kombiniert ausgewählte Neubau- und
                            Bestandsimmobilien mit leistungsstarken Photovoltaik-Lösungen.
                            So entsteht ein Investment, das regelmäßige Einnahmen, Substanz
                            im Hintergrund und Energiewende im Vordergrund verbindet.
                        </p>

                        <div
                            className="mt-2 flex flex-wrap gap-3 text-[0.7rem] text-slate-200"
                            data-aos="zoom-in-up"
                            data-aos-delay="320"
                        >
                            <span className="rounded-full bg-white/5 px-3 py-1">
                                Fokus: Deutschland mit DACH-Perspektive
                            </span>
                            <span className="rounded-full bg-white/5 px-3 py-1">
                                Neue Energie durch Photovoltaik
                            </span>
                            <span className="rounded-full bg-white/5 px-3 py-1">
                                Langfristige Vermögensstrategie
                            </span>
                        </div>

                        <div
                            className="mt-4 grid gap-3 text-xs text-slate-200 sm:grid-cols-3"
                            data-aos="fade-up"
                            data-aos-delay="360"
                        >
                            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                                <p className="text-[0.68rem] uppercase tracking-[0.16em] text-slate-300">
                                    Typische Laufzeit
                                </p>
                                <p className="mt-1 text-sm font-semibold">10–20 Jahre</p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                                <p className="text-[0.68rem] uppercase tracking-[0.16em] text-slate-300">
                                    Einnahmequellen
                                </p>
                                <p className="mt-1 text-sm font-semibold">
                                    Miete + PV-Erträge
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                                <p className="text-[0.68rem] uppercase tracking-[0.16em] text-slate-300">
                                    Ziel
                                </p>
                                <p className="mt-1 text-sm font-semibold">
                                    Vermögen schützen &amp; ausbauen
                                </p>
                            </div>
                        </div>

                        <div
                            className="mt-6 flex flex-wrap items-center gap-4"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <Button
                                asChild
                                className="bg-[#3d6252] px-6 text-sm font-semibold text-white hover:bg-[#314e42]"
                            >
                                <Link href="/leistungen">
                                    Alle Investment-Bausteine entdecken
                                </Link>
                            </Button>
                            <button className="text-xs font-semibold text-slate-200 underline-offset-4 hover:underline">
                                <Link href="/photovoltaik">
                                    Mehr über Photovoltaik-Investments
                                </Link>
                            </button>
                        </div>
                    </div>

                    {/* Right cards */}
                    <div
                        className="relative mt-4 grid gap-4 lg:mt-0"
                        data-aos="fade-up"
                        data-aos-delay="180"
                        data-aos-duration="900"
                    >
                        <div
                            className="relative w-full rounded-3xl border border-white/10 bg-gradient-to-br from-[#e5e6e7] via-white to-[#d7f2e3] p-5 text-slate-900 shadow-[0_20px_45px_rgba(0,0,0,0.45)]"
                            data-aos="zoom-in-up"
                            data-aos-delay="220"
                        >
                            <div className="mb-4 flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[#0b1412] text-white">
                                        <Building2 className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                                            Säule 1
                                        </p>
                                        <p className="text-sm font-semibold">
                                            Kapitalanlage-Immobilien
                                        </p>
                                    </div>
                                </div>
                                <span className="rounded-full bg-[#0b1412] px-3 py-1 text-[0.68rem] font-medium text-[#d7f2e3]">
                                    Neubau &amp; Bestand
                                </span>
                            </div>
                            <div
                                className="relative mb-4 h-32 overflow-hidden rounded-2xl"
                                data-aos="zoom-in-up"
                                data-aos-delay="260"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1505873242700-f289a29e1e0f?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Moderne Kapitalanlage-Immobilie"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="text-xs leading-relaxed text-slate-700">
                                Gezielte Auswahl von Lagen mit solider Nachfrage, moderner
                                Bauqualität und langfristiger Vermietbarkeit – abgestimmt auf
                                Ihre persönliche Liquidität und Steuer-Situation.
                            </p>
                            <div
                                className="mt-4 grid md:grid-cols-3 grid-cols-1 gap-2 text-[0.68rem] text-slate-700"
                                data-aos="fade-up"
                                data-aos-delay="300"
                            >
                                <div className="rounded-2xl bg-white px-3 py-2">
                                    Potenzial für Wertsteigerung
                                </div>
                                <div className="rounded-2xl bg-white px-3 py-2">
                                    Planbare Mieteinnahmen
                                </div>
                                <div className="rounded-2xl bg-white px-3 py-2">
                                    Tilgung als Vermögensaufbau
                                </div>
                            </div>
                        </div>

                        <div
                            className="relative self-end rounded-3xl border border-[#3d6252]/40 bg-[#101c19] p-5 text-slate-50 shadow-[0_16px_40px_rgba(0,0,0,0.65)]"
                            data-aos="zoom-in-up"
                            data-aos-delay="260"
                        >
                            <div className="mb-4 flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#3d6252] text-white">
                                        <SunMedium className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">
                                            Säule 2
                                        </p>
                                        <p className="text-sm font-semibold">
                                            Photovoltaik-Investments
                                        </p>
                                    </div>
                                </div>
                                <BarChart3 className="h-5 w-5 text-[#d7f2e3]" />
                            </div>
                            <div
                                className="relative mb-4 h-28 overflow-hidden rounded-2xl"
                                data-aos="zoom-in-up"
                                data-aos-delay="300"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Photovoltaik-Anlage als Investment"
                                    fill
                                    className="object-cover opacity-90"
                                />
                            </div>
                            <p className="text-xs leading-relaxed text-slate-200">
                                Mit Photovoltaik nutzen Sie die Energiewende aktiv für Ihr
                                Portfolio: Stromerträge, mögliche Einspeisevergütungen und
                                die Option, steigende Strompreise für sich arbeiten zu lassen.
                            </p>
                            <div
                                className="mt-4 grid grid-cols-2 gap-2 text-[0.68rem] text-slate-100"
                                data-aos="fade-up"
                                data-aos-delay="340"
                            >
                                <div className="rounded-2xl bg-white/10 px-3 py-2">
                                    Zusätzlicher Cashflow neben Mieteinnahmen
                                </div>
                                <div className="rounded-2xl bg-white/10 px-3 py-2">
                                    Beitrag zur Energiewende &amp; ESG-Strategie
                                </div>
                            </div>
                            <p
                                className="mt-4 text-[0.65rem] text-slate-400"
                                data-aos="fade-in"
                                data-aos-delay="380"
                            >
                                Die genaue Struktur Ihrer Immobilie- &amp; PV-Kombination
                                erarbeiten wir in einer individuellen Strategie-Session.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section
                className="bg-[#f3f4f5] md:py-32 py-16 text-slate-900"
                data-aos="fade-in"
                data-aos-duration="800"
            >
                <div className="mx-auto max-w-7xl px-4 md:px-6">
                    <div className="grid md:gap-14 gap-7 lg:grid-cols-[1fr_1.3fr] lg:items-center">
                        <div
                            className="space-y-6"
                            data-aos="fade-up"
                        >
                            <p
                                className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d6252]"
                                data-aos="zoom-in-up"
                            >
                                Vertrauen &amp; Persönlichkeit
                            </p>

                            <h2
                                className="text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-3xl"
                                data-aos="fade-up"
                            >
                                Beratung, die auf Erfahrung, Klarheit
                                <span
                                    className="block text-[#3d6252]"
                                    data-aos="fade-up"
                                >
                                    und persönlicher Verantwortung basiert.
                                </span>
                            </h2>

                            <p
                                className="text-sm leading-relaxed text-slate-600 sm:text-base max-w-lg"
                                data-aos="fade-up"
                            >
                                Hinter Graf Bernstorff Consulting steht nicht ein anonymes Team,
                                sondern eine durchdachte, persönliche Beratung durch Moritz Bernstorff.
                                Mit über 28 Jahren Erfahrung in Finanzplanung, Immobilienanalyse
                                und Strategieentwicklung begleitet er Unternehmer:innen und
                                Führungskräfte, die echte Klarheit und langfristige Partnerschaft suchen.
                            </p>

                            <div
                                className="grid gap-4 text-[0.8rem] sm:grid-cols-2"

                            >
                                <div data-aos="fade-up" className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                                    <User className="h-5 w-5 shrink-0 text-[#3d6252]" />
                                    <span className="text-slate-700">
                                        1:1 Begleitung ohne wechselnde Ansprechpartner
                                    </span>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="200" className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                                    <Briefcase className="h-5 w-5 shrink-0 text-[#3d6252]" />
                                    <span className="text-slate-700">
                                        Über 28 Jahre Erfahrung in Finanz- &amp; Immobilienstrategie
                                    </span>
                                </div>
                                <div data-aos="fade-up" className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#3d6252]" />
                                    <span className="text-slate-700">
                                        Netzwerk aus Steuer-, Finanz- &amp; Rechtsexperten
                                    </span>
                                </div>
                                <div data-aos="fade-up" data-aos-delay="200" className="flex items-start gap-3 rounded-2xl bg-white p-4 shadow-sm">
                                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#3d6252]" />
                                    <span className="text-slate-700">
                                        Persönliche Strategie statt Massenvermittlung
                                    </span>
                                </div>
                            </div>

                            <Button
                                asChild
                                className="mt-4 md:w-auto w-full bg-[#3d6252] px-6 text-sm font-semibold text-white hover:bg-[#314e42]"
                                data-aos="fade-up"

                            >
                                <Link href="/ueber-uns">Mehr über Moritz Bernstorff</Link>
                            </Button>
                        </div>

                        <div
                            className="relative"
                        >
                            <div
                                className="relative md:h-[40rem] h-96 w-full overflow-hidden rounded-xl shadow-[0_20px_45px_rgba(0,0,0,0.25)]"
                                data-aos="zoom-in"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Moritz Bernstorff – Investmentberater"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div
                                className="absolute md:block hidden -bottom-6 -left-6 rounded-2xl bg-[#3d6252] px-6 py-4 text-white shadow-xl"
                                data-aos="zoom-in"
                            >
                                <p className="text-[0.65rem] uppercase tracking-[0.16em] opacity-90">
                                    Erfahrung &amp; Integrität
                                </p>
                                <p className="text-sm font-semibold">28+ Jahre Beratung</p>
                            </div>

                            <div
                                className="absolute md:block hidden -top-6 -right-6 rounded-2xl bg-[#e5e6e7] px-6 py-4 text-[#0b1412] shadow-xl"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            >
                                <p className="text-[0.65rem] uppercase tracking-[0.16em] text-[#3d6252]">
                                    Premium Beratung
                                </p>
                                <p className="text-sm font-semibold">Deutschlandweit aktiv</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section
                className="relative overflow-hidden bg-[#0f1816] py-16 md:py-24 text-slate-50"
                data-aos="fade-in"
                data-aos-duration="800"
            >
                <div className="absolute left-1/2 top-0 -z-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#3d6252]/30 blur-3xl" />
                <div className="absolute bottom-0 right-0 -z-0 h-72 w-72 rounded-full bg-[#d7f2e3]/10 blur-3xl" />

                <div className="relative mx-auto max-w-6xl px-4 md:px-6">
                    <div
                        className="mx-auto max-w-3xl text-center"
                        data-aos="fade-up"
                        data-aos-delay="120"
                    >
                        <p
                            className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d7f2e3]"
                            data-aos="fade-up"
                            data-aos-delay="160"
                        >
                            Analyse in Echtzeit
                        </p>
                        <h2
                            className="mt-2 text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-3xl"
                            data-aos="fade-up"
                        >
                            Berechnen Sie Ihr persönliches Investment­potenzial
                            <span
                                className="block text-[#d7f2e3]"
                                data-aos="fade-up"
                            >
                                und vergleichen Sie Szenarien live.
                            </span>
                        </h2>
                        <p
                            className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base"
                            data-aos="fade-up"
                        >
                            Der interaktive Rechner zeigt Ihnen, wie sich Rendite, Cashflow und
                            Vermögensaufbau über die Jahre verändern – basierend auf realen
                            Finanzparametern und aktuellen Marktbedingungen im deutschen Markt.
                        </p>
                    </div>

                    <div
                        className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_minmax(0,1fr)] lg:gap-16"
                        data-aos="fade-up"
                    >
                        {/* Left card / preview */}
                        <div
                            className="relative rounded-3xl border border-white/10 bg-white/5 md:p-6 p-4 shadow-[0_20px_45px_rgba(0,0,0,0.45)] backdrop-blur-lg"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#3d6252] text-white">
                                        <Calculator className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
                                            Vorschau
                                        </p>
                                        <p className="text-sm font-semibold text-slate-50">
                                            Investment-Rechner
                                        </p>
                                    </div>
                                </div>
                                <span className="rounded-full bg-[#d7f2e3]/20 px-3 py-1 text-[0.7rem] font-medium text-[#d7f2e3]">
                                    Live Simulation
                                </span>
                            </div>

                            <div className="mt-6 space-y-6">
                                <div
                                    className="rounded-2xl bg-[#162421] md:px-5"
                                    data-aos="fade-up"
                                    data-aos-delay="330"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs uppercase tracking-wide text-slate-300">
                                            Vermögensverlauf
                                        </span>
                                        <TrendingUp className="h-4 w-4 text-[#d7f2e3]" />
                                    </div>

                                    <div className="mt-4 flex h-48 items-end gap-2">
                                        <Image
                                            src={
                                                "https://images.unsplash.com/photo-1700074788751-34099265f014?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            }
                                            width={500}
                                            height={500}
                                            alt="img"
                                            className="h-48 rounded-lg w-full object-cover"
                                        />
                                    </div>

                                    <div className="mt-4 flex gap-4 text-[0.65rem] text-slate-300">
                                        <div className="flex items-center gap-2">
                                            <span className="h-2 w-2 rounded-full bg-white/40" />
                                            Konservativ
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="h-2 w-2 rounded-full bg-white/60" />
                                            Ausgewogen
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="h-2 w-2 rounded-full bg-[#d7f2e3]" />
                                            Dynamisch
                                        </div>
                                    </div>
                                </div>

                                <div
                                    className="rounded-2xl bg-[#162421] md:px-5"
                                    data-aos="fade-up"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs uppercase tracking-wide text-slate-300">
                                            Cashflow-Betrachtung
                                        </span>
                                        <BarChart className="h-4 w-4 text-[#d7f2e3]" />
                                    </div>

                                    <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                                        <div className="rounded-xl bg-white/5 py-3">
                                            <p className="text-[0.65rem] text-slate-300">Jahr 1</p>
                                            <p className="text-sm font-semibold text-slate-50">+820 €</p>
                                        </div>
                                        <div className="rounded-xl bg-white/5 py-3">
                                            <p className="text-[0.65rem] text-slate-300">Jahr 5</p>
                                            <p className="text-sm font-semibold text-slate-50">+3.450 €</p>
                                        </div>
                                        <div className="rounded-xl bg-white/5 py-3">
                                            <p className="text-[0.65rem] text-slate-300">Jahr 10</p>
                                            <p className="text-sm font-semibold text-slate-50">+7.920 €</p>
                                        </div>
                                    </div>
                                </div>

                                <p
                                    className="text-[0.7rem] text-slate-400"
                                    data-aos="fade-in"
                                >
                                    Diese Werte sind beispielhaft. Die reale Berechnung erfolgt im
                                    persönlichen Gespräch – basierend auf Einkommen, Steuersituation,
                                    Finanzierungsrahmen und Objektwahl.
                                </p>
                            </div>
                        </div>

                        {/* Right text / features */}
                        <div
                            className="flex flex-col justify-center gap-8"
                            data-aos="fade-up"
                        >
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold sm:text-2xl">
                                    Wie entwickelt sich Ihr Vermögen über die nächsten Jahre?
                                </h3>
                                <p className="max-w-md text-sm leading-relaxed text-slate-200 sm:text-base">
                                    Mit dem Rechner können Sie Szenarien vergleichen, Risiken einschätzen
                                    und klar erkennen, wie Immobilien und Photovoltaik Ihr Vermögen
                                    schützen – und gleichzeitig planbar wachsen lassen.
                                </p>
                            </div>

                            <div className="grid gap-4">
                                <div
                                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[0.8rem] text-slate-200"
                                    data-aos="fade-up"
                                >
                                    • Drei Szenarien: konservativ, ausgeglichen, dynamisch
                                </div>
                                <div
                                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[0.8rem] text-slate-200"
                                    data-aos="fade-up"
                                >
                                    • Einfache Eingabe von Einkommen, Eigenkapital &amp; Laufzeit
                                </div>
                                <div
                                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[0.8rem] text-slate-200"
                                    data-aos="fade-up"
                                >
                                    • Berechnung von Cashflow, Tilgung, Erträgen &amp; Steuer-Effekten
                                </div>
                            </div>

                            <Button
                                asChild
                                className="mt-6 w-full bg-[#3d6252] px-6 text-sm font-semibold text-white hover:bg-[#314e42] sm:max-w-xs"
                                data-aos="fade-up"
                            >
                                <Link href="/rechner">
                                    Jetzt Rechner öffnen
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>




            <section className="pt-12 md:pt-24 bg-white">
                <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 md:gap-10">
                    {/* Top: Badge + Heading + Text */}
                    <div className="space-y-3 max-w-2xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d6252]">
                            Kurz erklärt
                        </p>
                        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                            In wenigen Minuten: Unser Ansatz für Immobilie &amp; Photovoltaik
                        </h2>
                        <p className="text-sm md:text-base text-slate-600">
                            Wie kombinieren wir Kapitalanlage-Immobilien mit modernen
                            Photovoltaik-Konzepten? Im Video erhalten Sie einen kompakten
                            Überblick, wie wir Rendite, Steuern und Risiko zusammendenken.
                        </p>
                    </div>

                    {/* Bottom: Video Player with Cover */}
                    <div className="relative w-full overflow-hidden rounded-3xl">
                        <div className="aspect-video relative bg-black">
                            {/* Cover state */}
                            {!isPlaying && (
                                <>
                                    <Image
                                        className="object-cover"
                                        src="/cover.jpg"
                                        alt="Unternehmer im Gespräch über Investments"
                                        fill
                                        sizes="(min-width: 1024px) 900px, 100vw"
                                        loading="lazy"
                                    />

                                    {/* Dark overlay */}
                                    <div className="absolute inset-0 bg-black/30" />

                                    {/* Play button */}
                                    <button
                                        type="button"
                                        onClick={() => setIsPlaying(true)}
                                        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 rounded-full bg-white/95 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-white"
                                    >
                                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3d6252] text-white">
                                            <Play className="h-4 w-4" />
                                        </span>
                                        <span>Video abspielen</span>
                                    </button>
                                </>
                            )}

                            {/* Playing state */}
                            {isPlaying && (
                                <>
                                    {/* Close / stop button */}
                                    <button
                                        type="button"
                                        onClick={() => setIsPlaying(false)}
                                        className="absolute right-3 top-3 z-20 inline-flex items-center gap-1 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm hover:bg-black/80"
                                    >
                                        <X className="h-3 w-3" />
                                        <span>Video schließen</span>
                                    </button>

                                    <iframe
                                        className="h-full w-full"
                                        src="https://gumlet.tv/watch/692d810e64ac9690e75f32e2/?autoplay=1"
                                        title="Graf Bernstorff – Video"
                                        allow="autoplay; encrypted-media; picture-in-picture"
                                        allowFullScreen
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>



            <Testimonials />
            <Faqs />

            <section
                className="relative overflow-hidden bg-[#f3f4f5] py-20 text-slate-900"
                data-aos="fade-in"
            >
                <div className="absolute left-0 top-0 -z-0 h-72 w-72 -translate-x-1/3 -translate-y-1/3 rounded-full bg-[#3d6252]/20 blur-3xl" />
                <div className="absolute bottom-0 right-0 -z-0 h-96 w-96 translate-x-1/4 translate-y-1/4 rounded-full bg-[#d7f2e3]/30 blur-3xl" />

                <div className="relative mx-auto max-w-7xl px-4 md:px-6">
                    <div
                        className="mx-auto max-w-3xl text-center"
                        data-aos="fade-up"
                        data-aos-delay="120"
                        data-aos-duration="900"
                    >
                        <p
                            className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d6252]"
                            data-aos="fade-up"
                            data-aos-delay="160"
                        >
                            Insights &amp; Impulse
                        </p>

                        <h2
                            className="mt-2 text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-3xl"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            Aktuelle Einblicke in Immobilien, Photovoltaik
                            <span
                                className="block text-[#3d6252]"
                                data-aos="fade-up"
                                data-aos-delay="230"
                            >
                                und strategischen Vermögensaufbau.
                            </span>
                        </h2>
                        <p
                            className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base"
                            data-aos="fade-up"
                            data-aos-delay="260"
                        >
                            Wissen, das Ihre Entscheidungen stärkt: Marktupdates, Strategien,
                            steuerliche Vorteile und echte Investment-Perspektiven –
                            klar, verständlich und ohne Fachchinesisch.
                        </p>
                    </div>

                    <div
                        className="mt-14 grid gap-4 md:grid-cols-3"
                        data-aos="fade-up"
                        data-aos-delay="280"
                        data-aos-duration="900"
                    >
                        {/* Card 1 */}
                        <div
                            className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_20px_40px_rgba(15,23,42,0.08)]"
                            data-aos="fade-up"
                        >
                            <div className="relative h-72 w-full overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Immobilie als Kapitalanlage"
                                    fill
                                    className="object-cover transition-all duration-500 hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <p className="flex items-center gap-2 text-xs text-slate-400">
                                    <Clock className="h-3 w-3" /> 5 Minuten
                                </p>
                                <h3 className="mt-2 text-sm font-semibold">
                                    Warum Kapitalanlage-Immobilien in Deutschland langfristig
                                    stärker sind als Tagesgeld &amp; Aktien
                                </h3>
                                <p className="mt-2 text-xs text-slate-600">
                                    Eine klare Analyse über Rendite und Sicherheit.
                                </p>
                                <Link
                                    href="/blog/artikel-1"
                                    className="mt-4 inline-flex items-center text-xs font-semibold text-[#3d6252] hover:underline"
                                >
                                    Artikel lesen <ArrowRight className="ml-2 h-3 w-3" />
                                </Link>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div
                            className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_20px_40px_rgba(15,23,42,0.08)]"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="relative h-72 w-full overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1752119607845-ade31340d49e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Photovoltaik Investment"
                                    fill
                                    className="object-cover transition-all duration-500 hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <p className="flex items-center gap-2 text-xs text-slate-400">
                                    <Clock className="h-3 w-3" /> 4 Minuten
                                </p>
                                <h3 className="mt-2 text-sm font-semibold">
                                    Photovoltaik 2025: Warum die Energiewende enorme Chancen für
                                    private Investoren bietet
                                    <span className="md:block hidden">&nbsp;</span>
                                </h3>
                                <p className="mt-2 text-xs text-slate-600">
                                    Ein Überblick über Erträge, Förderung und Marktchancen.
                                </p>
                                <Link
                                    href="/blog/artikel-2"
                                    className="mt-4 inline-flex items-center text-xs font-semibold text-[#3d6252] hover:underline"
                                >
                                    Artikel lesen <ArrowRight className="ml-2 h-3 w-3" />
                                </Link>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div
                            className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_20px_40px_rgba(15,23,42,0.08)]"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <div className="relative h-72 w-full overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1635108199445-ab9f516646e2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Steuerliche Vorteile"
                                    fill
                                    className="object-cover transition-all duration-500 hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <p className="flex items-center gap-2 text-xs text-slate-400">
                                    <Clock className="h-3 w-3" /> 6 Minuten
                                </p>
                                <h3 className="mt-2 text-sm font-semibold">
                                    Die meist unterschätzten Steuervorteile bei Immobilien &amp; PV –
                                    und wie Sie sie optimal nutzen
                                </h3>
                                <p className="mt-2 text-xs text-slate-600">
                                    Ein kompakter Leitfaden für Unternehmer &amp; Selbständige.
                                </p>
                                <Link
                                    href="/blog/artikel-3"
                                    className="mt-4 inline-flex items-center text-xs font-semibold text-[#3d6252] hover:underline"
                                >
                                    Artikel lesen <ArrowRight className="ml-2 h-3 w-3" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div
                        className="mt-14 flex flex-col items-center gap-4 text-center"
                        data-aos="fade-up"
                        data-aos-delay="420"
                    >
                        <Button
                            asChild
                            className="bg-[#3d6252] px-6 text-sm font-semibold text-white hover:bg-[#314e42]"
                        >
                            <Link href="/blog">
                                Alle Artikel ansehen
                                <Newspaper className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

        </Wrapper>
    )
}
