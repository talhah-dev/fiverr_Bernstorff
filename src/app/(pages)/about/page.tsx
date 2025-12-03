"use client";
import Wrapper from '@/app/Wrapper'
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Lightbulb, BarChart3, Users } from "lucide-react";
import { Users2, BadgeCheck, MapPin, ArrowRight } from "lucide-react";
import { LineChart, ShieldCheck, SunMedium } from "lucide-react";
import CallToAction from '@/components/CallToAction';

const team = [
    {
        name: "Moritz von Graf Bernstorff",
        role: "Gründer · Strategische Beratung",
        avatar: "https://images.unsplash.com/photo-1615109398623-88346a601842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww",
        link: "/kontakt#beratung",
    },
    {
        name: "Laura Schneider",
        role: "Finanzanalyse & Kundenbetreuung",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
        link: "/kontakt#beratung",
    },
    {
        name: "Moritz von Graf Bernstorff",
        role: "Gründer · Strategische Beratung",
        avatar: "https://images.unsplash.com/photo-1615109398623-88346a601842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww",
        link: "/kontakt#beratung",
    },
    {
        name: "Laura Schneider",
        role: "Finanzanalyse & Kundenbetreuung",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
        link: "/kontakt#beratung",
    },
    {
        name: "Moritz von Graf Bernstorff",
        role: "Gründer · Strategische Beratung",
        avatar: "https://images.unsplash.com/photo-1615109398623-88346a601842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fHww",
        link: "/kontakt#beratung",
    },
    {
        name: "Laura Schneider",
        role: "Finanzanalyse & Kundenbetreuung",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
        link: "/kontakt#beratung",
    },
];
export default function About() {

    return (
        <Wrapper>

            <section
                className="relative flex items-center justify-center text-center py-28 md:py-40"
                data-aos="fade-up"
            >
                {/* Background image */}
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="About us background"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70" />
                </div>

                <div className="relative mx-auto max-w-3xl px-6 space-y-6">
                    <h1
                        className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl"
                        data-aos="fade-up"
                    >
                        Über uns – Persönliche Beratung für nachhaltigen Vermögensaufbau
                    </h1>

                    <p
                        className="mx-auto max-w-xl text-sm leading-relaxed text-slate-100/90 md:text-base"
                        data-aos="fade-up"
                    >
                        Bei Graf Bernstorff Consulting stehen Transparenz, Erfahrung und echte
                        persönliche Betreuung im Mittelpunkt. Lernen Sie uns kennen und erfahren
                        Sie, wie wir Unternehmer:innen und Führungskräfte beim Vermögensaufbau
                        unterstützen.
                    </p>

                    <div className="flex justify-center pt-2" data-aos="fade-up">
                        <Button
                            asChild
                            className="rounded-full bg-[#3d6252] px-7 py-6 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,0.5)] hover:bg-[#2f4f42]"
                        >
                            <Link href="/kontakt#beratung">Jetzt Team kennenlernen</Link>
                        </Button>
                    </div>
                </div>
            </section>

            <section
                className="bg-white py-16 md:py-24"
                data-aos="fade-up"
            >
                <div className="mx-auto max-w-6xl px-6">
                    <div className="max-w-3xl space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d6252]">
                            Wie wir arbeiten
                        </p>
                        <h2 className="text-2xl leading-tight font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-[32px]">
                            Struktur statt Zufall:
                            <br />
                            <span className="text-slate-700">
                                Investmentkonzepte, die zu Ihrem Leben passen.
                            </span>
                        </h2>
                        <p className="text-sm md:text-base text-slate-600">
                            Wir verbinden exakte Finanzplanung mit ausgewählten Kapitalanlage-Immobilien
                            und Photovoltaik-Projekten. Kein Produktverkauf, sondern ein klarer Fahrplan
                            für Ihren Vermögensaufbau.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {/* Card 1 – Analyse & Strategie */}
                        <div
                            className="col-span-1 lg:col-span-1 rounded-2xl bg-[#f3f4f5] p-6"
                            data-aos="zoom-in"
                        >
                            {/* Mobile media placeholder */}
                            <div className="mb-5 aspect-video w-full rounded-xl bg-white md:hidden" />

                            <span className="text-lg font-semibold tracking-tight text-slate-900">
                                Analyse & Strategie
                            </span>

                            <ul className="mt-5 space-y-4 text-sm text-slate-700">
                                <li className="flex items-start gap-3">
                                    <ShieldCheck className="mt-0.5 h-4 w-4 text-[#3d6252]" />
                                    <p>
                                        Detaillierte Sicht auf Einkommen, Steuern, Finanzierungsrahmen
                                        und Risikoprofil.
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <LineChart className="mt-0.5 h-4 w-4 text-[#3d6252]" />
                                    <p>
                                        Szenario-Rechnungen zu Cashflow, Tilgung und Vermögensentwicklung
                                        über 10–20 Jahre.
                                    </p>
                                </li>
                            </ul>

                            <Button className="mt-7 w-full rounded-full bg-[#3d6252] text-sm font-semibold text-white hover:bg-[#2f4f42]">
                                Erstgespräch anfragen <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </div>

                        {/* Media 1 – Desktop visual */}
                        <div
                            className="hidden md:block col-span-1 lg:col-span-2 rounded-2xl bg-[#f3f4f5] p-5"
                            data-aos="zoom-in"
                        >
                            <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-slate-200 bg-white/60 text-sm text-slate-500">
                                Hier kann später ein Screenshot des Finanzplans / Diagramms stehen.
                            </div>
                        </div>

                        {/* Media 2 – Desktop visual */}
                        <div
                            className="hidden md:block col-span-1 lg:col-span-2 rounded-2xl bg-[#f3f4f5] p-5"
                            data-aos="zoom-in"
                        >
                            <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-slate-200 bg-white/60 text-sm text-slate-500">
                                Hier kann später ein Objekt- oder PV-Projekt-Beispiel eingefügt werden.
                            </div>
                        </div>

                        {/* Card 2 – Umsetzung & Begleitung */}
                        <div
                            className="col-span-1 lg:col-span-1 rounded-2xl bg-[#f3f4f5] p-6"
                            data-aos="zoom-in"
                        >
                            {/* Mobile media placeholder */}
                            <div className="mb-5 aspect-video w-full rounded-xl bg-white md:hidden" />

                            <span className="text-lg font-semibold tracking-tight text-slate-900">
                                Umsetzung & Begleitung
                            </span>

                            <ul className="mt-5 space-y-4 text-sm text-slate-700">
                                <li className="flex items-start gap-3">
                                    <SunMedium className="mt-0.5 h-4 w-4 text-[#3d6252]" />
                                    <p>
                                        Auswahl geeigneter Immobilien- und PV-Projekte in Abstimmung
                                        mit Finanzierung, Steuer- und Rechtspartnern.
                                    </p>
                                </li>
                                <li className="flex items-start gap-3">
                                    <ShieldCheck className="mt-0.5 h-4 w-4 text-[#3d6252]" />
                                    <p>
                                        Persönliche Begleitung bis zur Umsetzung – und darüber hinaus
                                        bei Anpassungen Ihrer Strategie.
                                    </p>
                                </li>
                            </ul>

                            <Button
                                variant="outline"
                                className="mt-7 w-full rounded-full border-[#3d6252]/30 text-sm font-semibold text-[#3d6252] hover:bg-[#e6f0ea]"
                            >
                                Mehr über unsere Arbeitsweise
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="bg-white py-20 md:py-32"
                data-aos="fade-up"
            >
                <div className="mx-auto max-w-6xl px-6">
                    {/* Header */}
                    <div className="text-center space-y-4 max-w-3xl mx-auto">
                        <p
                            className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d6252]"
                            data-aos="fade-up"
                        >
                            Unsere Werte & Arbeitsweise
                        </p>

                        <h2
                            className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900"
                            data-aos="fade-up"
                        >
                            Fundierte Analyse. Klare Strategie. Persönliche Begleitung.
                        </h2>

                        <p
                            className="text-sm md:text-base leading-relaxed text-slate-600"
                            data-aos="fade-up"
                        >
                            Seit über 28 Jahren unterstützt Graf Bernstorff Consulting
                            Unternehmer:innen und Führungskräfte beim sicheren Vermögensaufbau
                            über Immobilien- und Photovoltaik-Investments. Dabei stehen
                            Transparenz, Präzision und eine langfristige Partnerschaft im
                            Mittelpunkt.
                        </p>
                    </div>

                    {/* GRID */}
                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {/* Card 1 */}
                        <div
                            className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
                            data-aos="fade-up"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f3ec]">
                                <Lightbulb className="h-6 w-6 text-[#3d6252]" />
                            </div>

                            <h3 className="mt-5 text-lg font-semibold text-slate-900">
                                Maßgeschneiderte Strategien
                            </h3>

                            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                                Keine Standardprodukte. Jedes Konzept wird exakt an Ihre
                                finanzielle Situation, Ziele und steuerlichen Rahmenbedingungen
                                angepasst.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div
                            className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
                            data-aos="fade-up"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f3ec]">
                                <BarChart3 className="h-6 w-6 text-[#3d6252]" />
                            </div>

                            <h3 className="mt-5 text-lg font-semibold text-slate-900">
                                Klare Zahlen & Transparenz
                            </h3>

                            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                                Jede Investition wird vollständig durchgerechnet – Risiken,
                                Cashflows, Steuern, Mieteinnahmen und realistische Rendite.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div
                            className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
                            data-aos="fade-up"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f3ec]">
                                <ShieldCheck className="h-6 w-6 text-[#3d6252]" />
                            </div>

                            <h3 className="mt-5 text-lg font-semibold text-slate-900">
                                Sicherheit & Verantwortung
                            </h3>

                            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                                Sie erhalten ausschließlich geprüfte Immobilien & PV-Projekte mit
                                langfristiger Planbarkeit und maximaler Sicherheit.
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div
                            className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
                            data-aos="fade-up"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e7f3ec]">
                                <Users className="h-6 w-6 text-[#3d6252]" />
                            </div>

                            <h3 className="mt-5 text-lg font-semibold text-slate-900">
                                Starkes Expertennetzwerk
                            </h3>

                            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                                Finanzierung, Steuern, Recht – Sie profitieren von einem
                                zuverlässigen Partnernetzwerk für jede Phase Ihres Investments.
                            </p>
                        </div>
                    </div>

                    {/* CTA */}
                    <div
                        className="mt-16 rounded-3xl bg-[#e7f3ec] border border-slate-200 p-8 text-center"
                        data-aos="fade-up"
                    >
                        <p className="text-sm md:text-base font-semibold text-[#2f4a3d]">
                            Eine klare Strategie ist der Schlüssel für nachhaltigen Vermögensaufbau.{" "}
                            <span className="text-[#3d6252]">Lassen Sie uns den ersten Schritt gemeinsam gehen.</span>
                        </p>
                    </div>
                </div>
            </section>

            <section
                className="bg-white py-16 md:py-28"
                data-aos="fade-up"
            >
                <div className="mx-auto max-w-5xl px-6">
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d6252]">
                            Unser Team
                        </p>
                        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                            Persönlich. Vertrauensvoll. Erfahren.
                        </h2>
                        <p className="mx-auto max-w-2xl text-sm md:text-base text-slate-600">
                            Hinter Graf Bernstorff Consulting steht ein eingespieltes Team aus
                            Beratung, Analyse und Betreuung. Wir begleiten Unternehmer:innen und
                            Führungskräfte mit klaren Konzepten, Transparenz und echter
                            Partnerschaft.
                        </p>
                    </div>

                    {/* Team Grid */}
                    <div className="mt-12 grid gap-4 md:gap-y-12 gap-y-7 sm:grid-cols-2 md:grid-cols-3">
                        {team.map((member, index) => (
                            <div
                                key={index}
                                className="group"
                                data-aos="fade-up"
                                data-aos-delay={index * 150}
                            >
                                <div className="overflow-hidden rounded-2xl">
                                    <Image
                                        src={member.avatar}
                                        alt={member.name}
                                        width={800}
                                        height={1200}
                                        className="h-96 w-full object-cover rounded-xl grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.04]"
                                    />
                                </div>

                                <div className="mt-4 px-1">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold text-slate-900 transition-all duration-500 group-hover:tracking-wide">
                                            {member.name}
                                        </h3>
                                        <span className="text-xs text-slate-400">0{index + 1}</span>
                                    </div>

                                    <p className="mt-1 text-sm text-slate-500 transition-all duration-300 group-hover:text-slate-700">
                                        {member.role}
                                    </p>

                                    <Link
                                        href={member.link}
                                        className="mt-2 inline-block text-sm font-medium text-[#3d6252] opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 hover:underline"
                                    >
                                        Mehr erfahren →
                                    </Link>
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
