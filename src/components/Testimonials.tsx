import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Testimonials() {
    return (
        <section
            className="bg-white py-16 md:py-24"
            data-aos="fade-in"
            data-aos-duration="800"
        >
            <div className="mx-auto max-w-7xl space-y-12 md:px-6 px-4">
                <div
                    className="mx-auto max-w-2xl space-y-4 text-center"
                    data-aos="fade-up"
                    data-aos-delay="120"
                    data-aos-duration="900"
                >
                    <p
                        className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d6252]"
                        data-aos="zoom-in"
                        data-aos-delay="150"
                    >
                        Stimmen unserer Mandanten
                    </p>
                    <h2
                        className="text-balance text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl"
                        data-aos="fade-up"
                        data-aos-delay="190"
                    >
                        Persönliche Beratung, messbare Ergebnisse
                    </h2>
                    <p
                        className="text-sm leading-relaxed text-slate-600 md:text-base"
                        data-aos="fade-up"
                        data-aos-delay="220"
                    >
                        Unternehmer:innen, Selbständige und Führungskräfte vertrauen auf
                        Graf Bernstorff Consulting, wenn es um strategische Entscheidungen
                        rund um Kapitalanlage-Immobilien und Photovoltaik geht.
                    </p>
                </div>

                <div
                    className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2"
                    data-aos="fade-up"
                    data-aos-delay="240"
                    data-aos-duration="900"
                >
                    <Card
                        className="grid grid-rows-[auto_1fr] gap-6 sm:col-span-2 sm:p-6 lg:row-span-2"
                        data-aos="zoom-in"
                        data-aos-delay="260"
                    >
                        <CardHeader className="space-y-2">
                            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#3d6252]">
                                Unternehmer, Düsseldorf
                            </p>
                            <p className="text-sm font-semibold text-slate-900">
                                Portfolio aus Neubau &amp; Photovoltaik
                            </p>
                        </CardHeader>
                        <CardContent>
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                                    Durch Herrn Bernstorff habe ich zum ersten Mal ein klares
                                    Gesamtkonzept für mein Vermögen bekommen. Die Kombination aus
                                    Kapitalanlage-Immobilien und Photovoltaik ist exakt auf meine
                                    Situation abgestimmt. Besonders schätze ich, dass jede Zahl
                                    nachvollziehbar erklärt wird und ich nicht einfach ein
                                    „Standardprodukt“ bekomme.
                                </p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="h-12 w-12">
                                        <AvatarImage
                                            src="/testimonials/unternehmer-dus.webp"
                                            alt="Unternehmer aus Düsseldorf"
                                        />
                                        <AvatarFallback>UD</AvatarFallback>
                                    </Avatar>

                                    <div>
                                        <p className="text-sm font-semibold text-slate-900">
                                            M. K., Unternehmer
                                        </p>
                                        <span className="block text-xs text-slate-500">
                                            IT-Dienstleistungen, Düsseldorf
                                        </span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>

                    <Card
                        className="md:col-span-2"
                        data-aos="zoom-in"
                        data-aos-delay="280"
                    >
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                                    Ich war jahrelang unsicher, ob eine Immobilie als Kapitalanlage
                                    wirklich zu mir passt. Durch die strukturierte Analyse von
                                    Einkommen, Steuern und Finanzierungsrahmen habe ich jetzt ein
                                    Objekt, das sich langfristig trägt – ohne, dass ich ständig
                                    nachrechnen muss.
                                </p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="h-12 w-12">
                                        <AvatarImage
                                            src="/testimonials/aerztin-muc.webp"
                                            alt="Ärztin aus München"
                                        />
                                        <AvatarFallback>AM</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <cite className="text-sm font-semibold not-italic text-slate-900">
                                            Dr. L. S., Ärztin
                                        </cite>
                                        <span className="block text-xs text-slate-500">
                                            Fachärztin, München
                                        </span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>

                    <Card
                        data-aos="zoom-in"
                        data-aos-delay="300"
                    >
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-sm leading-relaxed text-slate-700">
                                    Besonders positiv ist für mich, dass Herr Bernstorff auch mit
                                    meinem Steuerberater und Finanzierungspartner gesprochen hat.
                                    So fühlt sich das Investment nicht wie ein Einzelprojekt an,
                                    sondern wie ein Baustein in einer durchdachten Strategie.
                                </p>

                                <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                                    <Avatar className="h-12 w-12">
                                        <AvatarImage
                                            src="/testimonials/geschaeftsfuehrer-hh.webp"
                                            alt="Geschäftsführer aus Hamburg"
                                        />
                                        <AvatarFallback>GH</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-900">
                                            T. R., Geschäftsführer
                                        </p>
                                        <span className="block text-xs text-slate-500">
                                            Industrie, Hamburg
                                        </span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>

                    <Card
                        data-aos="zoom-in"
                        data-aos-delay="320"
                    >
                        <CardContent className="h-full pt-6">
                            <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                                <p className="text-sm leading-relaxed text-slate-700">
                                    Die Gespräche waren ehrlich und auf den Punkt. Es ging nie
                                    darum, mir „noch schnell etwas zu verkaufen“, sondern darum,
                                    ob das Timing und die Objekte wirklich zu meinen Zielen passen.
                                    Das gibt mir ein sehr gutes Gefühl bei der Entscheidung.
                                </p>

                                <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                                    <Avatar className="h-12 w-12">
                                        <AvatarImage
                                            src="/testimonials/selbststaendig-koeln.webp"
                                            alt="Selbständige aus Köln"
                                        />
                                        <AvatarFallback>SK</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-semibold text-slate-900">
                                            S. K., Selbständig
                                        </p>
                                        <span className="block text-xs text-slate-500">
                                            Kreativbranche, Köln
                                        </span>
                                    </div>
                                </div>
                            </blockquote>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
