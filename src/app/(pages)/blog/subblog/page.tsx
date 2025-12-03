"use client"

import React from "react"
import Image from "next/image"
import Wrapper from "@/app/Wrapper"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import CallToAction from "@/components/CallToAction"

export default function Subblog() {
    return (
        <Wrapper>
            <div className="relative w-full md:h-[30rem]  h-96">
                <Image
                    src="https://images.unsplash.com/photo-1592595896616-c37162298647?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Moderne Kapitalanlage-Immobilie in urbaner Lage"
                    fill
                    priority
                    className="object-cover rounded-b-3xl "
                />
            </div>


            <div className="min-h-screen p-4 mt-6">

                <div
                    className="mx-auto max-w-7xl"
                    data-aos="fade-up"
                >
                    {/* Category / Tag */}

                    <div
                        className="mb-10 flex flex-col items-start justify-between gap-4 border-b border-[#e2e4e7] pb-6 text-sm text-[#4b4b4b] md:flex-row md:items-center"
                        data-aos="fade-in"
                    >
                        {/* Left: Avatar + Name */}
                        <div className="flex items-center gap-3">
                            <Avatar className="h-11 w-11 border border-[#d7f2e3]">
                                <AvatarImage src="/images/team/moritz.jpg" alt="Moritz von Graf Bernstorff" />
                                <AvatarFallback className="bg-[#3d6252] text-sm font-semibold text-white">
                                    MB
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium text-[#1e1e1e]">
                                    Moritz von Graf Bernstorff
                                </p>
                                <p className="text-xs text-[#6b7280]">
                                    Gründer · Graf Bernstorff Consulting
                                </p>
                            </div>
                        </div>

                        {/* Right: Date + Meta */}
                        <div className="flex flex-col items-start gap-1 text-xs text-[#6b7280] md:items-end">
                            <p>
                                Veröffentlicht am{" "}
                                <span className="font-medium text-[#1e1e1e]">12. November 2025</span>
                            </p>
                            <p>Lesezeit: ca. 6 Minuten</p>
                            <p>Fokus: Deutschland · gehobenes Privatvermögen</p>
                        </div>
                    </div>

                    <div className="mb-4 flex flex-wrap items-center gap-2">
                        <Badge className="border-none bg-[#3d6252] text-xs font-medium uppercase tracking-wide text-white">
                            Kapitalanlage-Immobilien
                        </Badge>
                        <Badge className="border-none bg-[#d7f2e3] text-xs font-medium uppercase tracking-wide text-[#1e1e1e]">
                            Vermögensaufbau
                        </Badge>
                    </div>

                    {/* Title */}
                    <h1 className="mb-3 text-3xl font-semibold tracking-tight text-[#1e1e1e] md:text-4xl">
                        Wie Sie mit Kapitalanlage-Immobilien langfristig Vermögen aufbauen
                    </h1>

                    <p className="mb-8 text-sm text-[#4b4b4b] md:text-base">
                        In Zeiten hoher Inflation und steigender Steuerbelastung gewinnen
                        sachwertbasierte Strategien wie Kapitalanlage-Immobilien und
                        Photovoltaik-Investments massiv an Bedeutung. In diesem Beitrag
                        zeigen wir, worauf anspruchsvolle Investor:innen achten sollten.
                    </p>

                    {/* Meta: Avatar + Name + Date/Infos */}


                    {/* Article Content */}
                    <article className="prose prose-sm max-w-none text-[#1e1e1e] prose-headings:text-[#1e1e1e] prose-a:text-[#3d6252] prose-strong:text-[#1e1e1e] md:prose-base">
                        <section className="mb-8">
                            <h2 className="mb-3 text-xl font-semibold tracking-tight">
                                1. Warum Kapitalanlage-Immobilien in Phasen hoher Inflation
                            </h2>
                            <p className="mb-4">
                                Immobilien gelten seit Jahrzehnten als solide Grundlage für nachhaltigen
                                Vermögensaufbau. Gerade in einem Umfeld aus{" "}
                                <strong>anhaltender Inflation</strong>, niedrigen Realzinsen und steigenden
                                Steuerlasten schaffen Sachwerte Stabilität und planbare Cashflows.
                            </p>
                            <p>
                                Entscheidend ist jedoch nicht der reine Besitz einer Immobilie, sondern ein
                                <strong> strategischer Ansatz</strong>: Lage, Objektqualität,
                                Mieterstruktur, steuerliche Gestaltung und Finanzierungsstruktur müssen
                                exakt auf Ihre persönliche Vermögenssituation abgestimmt werden.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-3 text-xl font-semibold tracking-tight">
                                2. Die drei zentralen Hebel für Ihren Vermögensaufbau
                            </h2>
                            <p className="mb-4">
                                Professionelle Kapitalanlage-Strategien nutzen drei Hebel, um Vermögen
                                strukturiert aufzubauen und Risiken zu minimieren:
                            </p>
                            <ul className="mb-4 list-disc pl-5">
                                <li>
                                    <strong>Planbare Mieterträge:</strong> Stabiler Cashflow über
                                    langfristige Mietverträge.
                                </li>
                                <li>
                                    <strong>Tilgungswirkung:</strong> Der Kredit wird über die Zeit vom
                                    Mieter „mitbezahlt“.
                                </li>
                                <li>
                                    <strong>Steuerliche Optimierung:</strong> Abschreibungen und Struktur
                                    reduzieren die Steuerlast auf Ihr Einkommen.
                                </li>
                            </ul>
                            <p>
                                In Kombination entsteht ein wirkungsvoller Schutz vor Geldentwertung – bei
                                gleichzeitiger Nutzung des Fremdkapitalhebels.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-3 text-xl font-semibold tracking-tight">
                                3. Photovoltaik-Investments als Ergänzung
                            </h2>
                            <p className="mb-4">
                                Neben klassischen Wohn- und Gewerbeimmobilien gewinnen{" "}
                                <strong>Photovoltaik-Investments</strong> zunehmend an Bedeutung. Sie
                                verbinden planbare Einspeisevergütungen mit einem nachhaltigen, ESG-konformen
                                Investmentansatz.
                            </p>
                            <p>
                                Für Unternehmer:innen und Selbständige können PV-Anlagen eine{" "}
                                <strong>steuerlich attraktive Ergänzung</strong> zur klassischen
                                Kapitalanlage-Immobilie sein – insbesondere bei hoher persönlicher
                                Steuerprogression.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="mb-3 text-xl font-semibold tracking-tight">
                                4. Typische Fehler, die Sie vermeiden sollten
                            </h2>
                            <p className="mb-4">
                                Im gehobenen Segment sehen wir immer wieder ähnliche Fehler, die Rendite
                                kosten und Risiken erhöhen:
                            </p>
                            <ul className="mb-4 list-disc pl-5">
                                <li>Fokus auf Steuern statt auf Qualität der Immobilie</li>
                                <li>Fehlende Strategie für Anschlussfinanzierungen</li>
                                <li>
                                    Unzureichende Diversifikation zwischen Immobilien, Liquidität und
                                    alternativen Sachwerten
                                </li>
                                <li>Keine laufende Überprüfung der Struktur bei geänderten Rahmenbedingungen</li>
                            </ul>
                            <p>
                                Eine strukturierte, unabhängige Beratung hilft, diese Stolpersteine frühzeitig
                                zu erkennen und zu vermeiden.
                            </p>
                        </section>

                        <section className="my-10 rounded-2xl border border-[#d7f2e3] bg-[#f3f4f5] p-6">
                            <h3 className="mb-2 text-lg font-semibold tracking-tight text-[#1e1e1e]">
                                Nächster Schritt: Individuelles Strategiegespräch
                            </h3>
                            <p className="mb-3 text-sm text-[#4b4b4b]">
                                Wenn Sie als Unternehmer:in, Selbständige:r oder Führungskraft Ihr Vermögen
                                strukturiert gegen Inflation und Steuerlast positionieren möchten, ist ein
                                individuelles Erstgespräch der beste nächste Schritt.
                            </p>
                            <p className="text-sm font-medium text-[#3d6252]">
                                Gemeinsam analysieren wir Ihre Ausgangssituation und entwickeln eine
                                maßgeschneiderte Strategie für Kapitalanlage-Immobilien und Photovoltaik-
                                Investments.
                            </p>
                        </section>
                    </article>
                </div>
            </div>
            
        </Wrapper>
    )
}
