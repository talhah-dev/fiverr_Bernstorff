"use client";

import React from "react";
import Wrapper from "@/app/Wrapper";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AlertTriangle, ArrowRight, ChevronRight, FileSearch, ShieldAlert } from "lucide-react";
import CallToAction from "@/components/CallToAction";
import { LineChart, Scale, PieChart } from "lucide-react";


export default function PhotovoltaikInvestments() {
    return (
        <Wrapper>


            <section
                className="relative flex items-center justify-center py-24 md:pt-36 pt-36 md:py-36"
            >
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="https://images.unsplash.com/photo-1713789301692-d8676b9d253a?q=80&w=1217&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Blog Hintergund – Immobilien & Investments"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70" />
                </div>

                <div className="relative mx-auto max-w-3xl space-y-6 px-6 text-center">
                    <p data-aos="fade-up" className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d7f2e3]">
                        Photovoltaik · Investments
                    </p>

                    <h1 data-aos-delay="200" data-aos="fade-up" className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                        Photovoltaik Investments
                    </h1>

                    <p data-aos-delay="400" data-aos="fade-up" className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-100/90 md:text-base">
                        Planbare Erträge, steuerliche Vorteile und ein klarer Beitrag zur Energiewende in Deutschland.
                    </p>

                    <div data-aos-delay="600" data-aos="fade-up" className="flex justify-center pt-2">
                        <Button
                            asChild
                            className="bg-[#3d6252] px-7 py-6 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,0.5)] hover:bg-[#2f4f42]"
                        >
                            <Link href="#pv-vorteile-de">Vorteile in Deutschland entdecken <ArrowRight /></Link>

                        </Button>
                    </div>
                </div>
            </section>



            {/* SECTION 2: Vorteile von Photovoltaik in Deutschland */}
            <section
                id="pv-vorteile-de"
                className="bg-[#f3f4f5] py-16 md:py-24"
            >
                <div className="mx-auto max-w-6xl px-6">
                    {/* Header */}
                    <div className="mb-10 text-center" data-aos="fade-up">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3d6252]">
                            Vorteile in Deutschland
                        </p>
                        <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-[#1e1e1e]">
                            Warum Photovoltaik für Investor:innen spannend ist
                        </h2>
                        <p className="mt-3 text-sm md:text-base text-slate-600">
                            Kombination aus planbaren Erträgen, staatlichem Rahmen und steuerlichen Effekten.
                        </p>
                    </div>


                    <div className="grid gap-4 md:grid-cols-3">
                        {/* CARD 1 */}
                        <div
                            className="flex flex-col rounded-lg border border-[#e2e4e7] bg-white p-6 md:py-8 transition-all duration-300 hover:border-[#d7f2e3] hover:shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="40"
                        >
                            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f3f4f5]">
                                <LineChart className="h-5 w-5 text-[#3d6252]" />
                            </div>

                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#3d6252]">
                                Planbare Cashflows
                            </p>
                            <h3 className="mt-3 text-lg font-semibold text-[#1e1e1e]">
                                Langfristige Einnahmen
                            </h3>
                            <p className="mt-3 text-sm text-slate-600">
                                Einspeisevergütungen bzw. PPA-Modelle sorgen – je nach Projekt – für relativ gut
                                kalkulierbare Ertragsströme über viele Jahre.
                            </p>
                        </div>

                        {/* CARD 2 */}
                        <div
                            className="flex flex-col rounded-lg border border-[#e2e4e7] bg-white p-6 md:py-8 transition-all duration-300 hover:border-[#d7f2e3] hover:shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="110"
                        >
                            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f3f4f5]">
                                <Scale className="h-5 w-5 text-[#3d6252]" />
                            </div>

                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#3d6252]">
                                Deutscher Rechtsrahmen
                            </p>
                            <h3 className="mt-3 text-lg font-semibold text-[#1e1e1e]">
                                Stabiler Standort
                            </h3>
                            <p className="mt-3 text-sm text-slate-600">
                                Deutschland bietet einen etablierten Rechts- und Förderrahmen, der Photovoltaik
                                als Baustein der Energiewende klar verankert.
                            </p>
                        </div>

                        {/* CARD 3 */}
                        <div
                            className="flex flex-col rounded-lg border border-[#e2e4e7] bg-white p-6 md:py-8 transition-all duration-300 hover:border-[#d7f2e3] hover:shadow-lg"
                            data-aos="fade-up"
                            data-aos-delay="180"
                        >
                            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f3f4f5]">
                                <PieChart className="h-5 w-5 text-[#3d6252]" />
                            </div>

                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#3d6252]">
                                Steuern & Diversifikation
                            </p>
                            <h3 className="mt-3 text-lg font-semibold text-[#1e1e1e]">
                                Ergänzung zu Immobilien
                            </h3>
                            <p className="mt-3 text-sm text-slate-600">
                                PV-Anlagen können – je nach Struktur – steuerlich interessant sein und Ihr
                                Immobilienportfolio sinnvoll diversifizieren.
                            </p>
                        </div>
                    </div>

                </div>
            </section>


            {/* SECTION 3: Wie Photovoltaik-Investments funktionieren */}
            <section className="md:py-16 md:pt-16 md:pb-24 bg-[#f3f4f5]">
                <div className="mx-auto max-w-7xl space-y-10 px-6 md:space-y-16">
                    <h2 className="relative z-10 max-w-3xl text-2xl w-full mx-auto text-center font-semibold text-[#1e1e1e] lg:text-3xl">
                        Wie Photovoltaik-Investments strukturiert sind
                    </h2>

                    <div className="grid gap-0 sm:grid-cols-2 md:gap-12 lg:gap-16">
                        {/* Image side */}
                        <div className="relative mb-6 sm:mb-0">
                            <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-b from-[#d7f2e3] to-transparent p-px">
                                <Image
                                    src="https://images.unsplash.com/photo-1714177069375-fb8323fa5a78?q=80&w=1139&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    className="rounded-[15px] object-cover"
                                    alt="Photovoltaik-Anlage als Kapitalanlage"
                                    width={1207}
                                    height={929}
                                />
                            </div>
                        </div>

                        {/* Text side */}
                        <div className="relative space-y-4">
                            <p className="text-sm md:text-base text-slate-700">
                                Ein professionelles Photovoltaik-Investment besteht immer aus{" "}
                                <span className="font-semibold text-[#3d6252]">
                                    klar definierten Verträgen, Laufzeiten und Ertragsquellen
                                </span>
                                – sei es über Einspeisevergütung, Direktvermarktung oder PPA-Modelle.
                            </p>

                            <p className="text-sm md:text-base text-slate-700">
                                Entscheidend sind dabei die Bonität der Vertragspartner, die Qualität
                                der Technik, realistische Ertragsprognosen und eine steuerlich
                                durchdachte Struktur, die zu Ihrer persönlichen Situation passt.
                            </p>

                            <div className="pt-6">
                                <blockquote className="border-l-4 border-[#3d6252] pl-4">
                                    <p className="text-sm md:text-base text-slate-800">
                                        „Erst durch die strukturierte Aufbereitung der Zahlen – von
                                        Investitionssumme über laufende Erträge bis hin zu Steuern und
                                        Rücklagen – wurde für mich klar, welche Rolle Photovoltaik
                                        sinnvoll in meinem Vermögensaufbau spielen kann.“
                                    </p>

                                    <div className="mt-5 space-y-1">
                                        <cite className="block text-sm font-medium text-[#1e1e1e]">
                                            Unternehmer, Mandant von Graf Bernstorff Consulting
                                        </cite>
                                        <p className="text-xs text-slate-500">
                                            Individuelle Beispielrechnung · Kein Versprechen zukünftiger
                                            Erträge
                                        </p>
                                    </div>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-32 bg-white">
                <div className="mx-auto max-w-7xl space-y-8 px-6 w-full md:space-y-12">
                    <Image
                        className="rounded-3xl w-full grayscale"
                        src="https://images.unsplash.com/photo-1716489754680-06208195b307?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Unternehmer im Gespräch über Investments"
                        loading="lazy"
                        width={1000}
                        height={1000}
                        
                    />

                    <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                        <h2 className="text-3xl font-semibold text-[#1e1e1e] md:text-4xl">
                            Für wen Photovoltaik-Investments besonders geeignet sind
                        </h2>

                        <div className="space-y-6 text-sm md:text-base text-slate-700">
                            <p>
                                Photovoltaik eignet sich vor allem für{" "}
                                <span className="font-semibold text-[#3d6252]">
                                    Unternehmer:innen, Selbständige und Führungskräfte
                                </span>
                                , die planbare Zusatzerträge suchen und ihr bestehendes
                                Immobilien- oder Unternehmensvermögen sinnvoll diversifizieren
                                möchten.
                            </p>

                            <p>
                                Besonders spannend wird es, wenn bereits eine höhere
                                Steuerbelastung vorliegt und Sie langfristig denken – nicht in
                                Quartalen, sondern in Jahren.
                            </p>

                            <Button
                                asChild
                                size="sm"
                                className="gap-1 pr-1.5 rounded-full bg-[#3d6252] text-xs font-semibold text-white hover:bg-[#2f4f42]"
                            >
                                <Link href="/contact">
                                    <span>Prüfen, ob Photovoltaik zu mir passt</span>
                                    <ChevronRight className="size-3" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#f3f4f5] py-16 md:py-24">
                <div className="mx-auto max-w-5xl space-y-10 px-6 md:space-y-12">
                    {/* Heading + Intro */}
                    <div className="space-y-3 max-w-3xl">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3d6252]">
                            Risiken & Prüfung
                        </p>
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#1e1e1e]">
                            Worauf Sie bei Photovoltaik-Investments achten sollten
                        </h2>
                        <p className="text-sm md:text-base text-slate-700">
                            Auch solide Sachwerte sind nicht risikofrei. Entscheidend ist, die
                            wesentlichen Faktoren vor einer Entscheidung klar zu verstehen.
                        </p>
                    </div>

                    {/* Risk Cards */}
                    <div className="grid gap-6 md:grid-cols-3">
                        {/* Card 1 */}
                        <div className="flex flex-col rounded-lg border border-[#e0e4e7] bg-white p-6 md:py-8">
                            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#d7f2e3] text-[#3d6252]">
                                <AlertTriangle className="h-5 w-5" />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold text-[#1e1e1e]">
                                Ertragsrisiken
                            </h3>
                            <p className="text-sm text-slate-700">
                                Wetter, technische Ausfälle oder konservativer als erwartete
                                Einstrahlungswerte können die realen Erträge von Prognosen
                                abweichen lassen.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="flex flex-col rounded-lg border border-[#e0e4e7] bg-white p-6 md:py-8">
                            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#d7f2e3] text-[#3d6252]">
                                <ShieldAlert className="h-5 w-5" />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold text-[#1e1e1e]">
                                Betreiber & Verträge
                            </h3>
                            <p className="text-sm text-slate-700">
                                Die Stabilität des Betreibers, Vertragsgestaltung und
                                Versicherungsschutz sind zentrale Stellschrauben für Risiko und
                                Planbarkeit.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="flex flex-col rounded-lg border border-[#e0e4e7] bg-white p-6 md:py-8">
                            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#d7f2e3] text-[#3d6252]">
                                <FileSearch className="h-5 w-5" />
                            </div>
                            <h3 className="mb-2 text-lg font-semibold text-[#1e1e1e]">
                                Struktur & Steuern
                            </h3>
                            <p className="text-sm text-slate-700">
                                Ohne passende Struktur können steuerliche Effekte verpuffen oder
                                sich sogar nachteilig auswirken – hier ist saubere Vorarbeit
                                entscheidend.
                            </p>
                        </div>
                    </div>

                    {/* Footnote */}
                    <p className="text-xs text-slate-500">
                        Hinweis: Photovoltaik-Investments sind unternehmerische Beteiligungen
                        und unterliegen Marktrisiken. Eine individuelle Prüfung ersetzt diese
                        allgemeine Information nicht.
                    </p>
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

            <CallToAction />


        </Wrapper>
    );
}
