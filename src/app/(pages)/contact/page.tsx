"use client";

import Wrapper from "@/app/Wrapper";
import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
    return (
        <Wrapper>
            <section
                className="relative flex items-center justify-center py-24 md:pt-36 pt-36 md:py-36"
            >
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Blog Hintergund – Immobilien & Investments"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/70" />
                </div>

                <div className="relative mx-auto max-w-3xl space-y-6 px-6 text-center">
                    <p data-aos="fade-up" className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d7f2e3]">
                        Kontakt
                    </p>

                    <h1 data-aos-delay="200" data-aos="fade-up" className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                        Kontakt aufnehmen
                    </h1>

                    <p data-aos-delay="400" data-aos="fade-up" className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-100/90 md:text-base">
                        Lassen Sie uns in einem kurzen Gespräch klären, wie wir Sie beim Vermögensaufbau unterstützen können.
                    </p>

                    <div data-aos-delay="600" data-aos="fade-up" className="flex justify-center pt-2">
                        <Button
                            asChild
                            className="bg-[#3d6252] px-7 py-6 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,0.5)] hover:bg-[#2f4f42]"
                        >
                            <Link href="#beratung">Kontakt aufnehmen</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* SECTION: Direkter Kontakt & Erstberatung */}
            <section id="beratung" className="bg-[#f3f4f5] py-16 md:py-24">
                <div className="mx-auto w-full max-w-6xl px-6">
                    {/* Header */}
                    <div className="max-w-2xl">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3d6252]">
                            Kontakt
                        </p>
                        <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-[#1e1e1e]">
                            Persönlicher Kontakt für Ihre Fragen
                        </h2>
                        <p className="mt-3 text-sm md:text-base text-slate-600">
                            Ob erste Orientierung oder konkrete Fragestellung – wir melden uns
                            zeitnah und diskret bei Ihnen zurück.
                        </p>
                    </div>

                    <div className="mt-12 flex flex-col gap-12 lg:flex-row lg:items-start">
                        {/* Kontaktwege */}
                        <div className="grid w-full max-w-3xl grid-cols-1 gap-1 border border-[#d7f2e3] bg-white/60 p-1 sm:grid-cols-2">
                            <div className="border border-[#e2e4e7] bg-white p-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#d7f2e3] bg-[#d7f2e3]/40 text-[#1e1e1e]">
                                    <MailIcon className="h-5 w-5" />
                                </div>
                                <h3 className="mt-6 text-xl font-semibold text-[#1e1e1e]">E-Mail</h3>
                                <p className="my-2.5 text-sm text-slate-600">
                                    Für Unterlagen, Detailfragen oder Terminwünsche.
                                </p>
                                <Link
                                    className="text-sm font-medium text-[#3d6252] hover:underline"
                                    href="mailto:kontakt@graf-bernstorff-consulting.de"
                                >
                                    kontakt@graf-bernstorff-consulting.de
                                </Link>
                            </div>

                            <div className="border border-[#e2e4e7] bg-white p-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#d7f2e3] bg-[#d7f2e3]/40 text-[#1e1e1e]">
                                    <PhoneIcon className="h-5 w-5" />
                                </div>
                                <h3 className="mt-6 text-xl font-semibold text-[#1e1e1e]">Telefon</h3>
                                <p className="my-2.5 text-sm text-slate-600">
                                    Direkt und persönlich – nach Vereinbarung.
                                </p>
                                <Link
                                    className="text-sm font-medium text-[#3d6252] hover:underline"
                                    href="tel:+49XXXXXXXXX"
                                >
                                    +49 (0) XX / XXXX XXXX
                                </Link>
                            </div>

                            <div className="border border-[#e2e4e7] bg-white p-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#d7f2e3] bg-[#d7f2e3]/40 text-[#1e1e1e]">
                                    <MessageCircle className="h-5 w-5" />
                                </div>
                                <h3 className="mt-6 text-xl font-semibold text-[#1e1e1e]">
                                    Diskrete Erstanfrage
                                </h3>
                                <p className="my-2.5 text-sm text-slate-600">
                                    Kurze Nachricht senden, wir melden uns mit einem Terminvorschlag.
                                </p>
                                <span className="text-sm font-medium text-[#3d6252]">
                                    Antwort in der Regel innerhalb von 1–2 Werktagen.
                                </span>
                            </div>

                            <div className="border border-[#e2e4e7] bg-white p-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#d7f2e3] bg-[#d7f2e3]/40 text-[#1e1e1e]">
                                    <MapPinIcon className="h-5 w-5" />
                                </div>
                                <h3 className="mt-6 text-xl font-semibold text-[#1e1e1e]">
                                    Standort
                                </h3>
                                <p className="my-2.5 text-sm text-slate-600">
                                    Persönliche Gespräche nach individueller Terminabsprache.
                                </p>
                                <span className="text-sm font-medium text-[#3d6252]">
                                    Deutschland · Raum auf Anfrage
                                </span>
                            </div>
                        </div>

                        {/* Formular – Premium Stil */}
                        <div className="w-full max-w-lg border border-[#d7f2e3] bg-[#d7f2e3]/20 p-1">
                            <Card className="relative isolate rounded-2xl border border-white/60 bg-white/80 shadow-sm">
                                <CardHeader>
                                    <CardTitle className="text-lg font-semibold text-[#1e1e1e]">
                                        Vertrauliche Kontaktanfrage
                                    </CardTitle>
                                    <CardDescription className="text-sm text-slate-600">
                                        Teilen Sie uns kurz Ihr Anliegen mit – wir melden uns persönlich.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="mt-1">
                                    <form>
                                        <div className="grid grid-cols-1 gap-x-6 gap-y-5 md:grid-cols-2">
                                            <div className="col-span-1">
                                                <Label htmlFor="firstName">Vorname</Label>
                                                <Input
                                                    id="firstName"
                                                    placeholder="Vorname"
                                                    className="mt-2 h-10 bg-white shadow-none"
                                                />
                                            </div>
                                            <div className="col-span-1">
                                                <Label htmlFor="lastName">Nachname</Label>
                                                <Input
                                                    id="lastName"
                                                    placeholder="Nachname"
                                                    className="mt-2 h-10 bg-white shadow-none"
                                                />
                                            </div>
                                            <div className="col-span-2">
                                                <Label htmlFor="email">E-Mail-Adresse</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="name@unternehmen.de"
                                                    className="mt-2 h-10 bg-white shadow-none"
                                                />
                                            </div>
                                            <div className="col-span-2">
                                                <Label htmlFor="message">Ihr Anliegen</Label>
                                                <Textarea
                                                    id="message"
                                                    rows={5}
                                                    placeholder="Kurzbeschreibung Ihrer Situation oder Fragestellung"
                                                    className="mt-2 bg-white shadow-none"
                                                />
                                            </div>
                                            <div className="col-span-2 flex items-start gap-2">
                                                <Checkbox id="acceptTerms" className="mt-1 bg-background" />
                                                <Label htmlFor="acceptTerms" className="text-xs text-slate-600">
                                                    Ich bestätige, dass meine Angaben zur Kontaktaufnahme und für
                                                    Rückfragen gespeichert werden. Weitere Informationen finden Sie in
                                                    unserer{" "}
                                                    <Link href="#" className="underline text-[#3d6252]">
                                                        Datenschutzerklärung
                                                    </Link>
                                                    .
                                                </Label>
                                            </div>
                                        </div>

                                        <Button className="mt-6 w-full bg-[#3d6252] text-sm font-semibold text-white hover:bg-[#2f4f42]" size="lg">
                                            Anfrage senden
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>


            {/* SECTION: Lage & Anfahrt / Map */}
            <section className="bg-white py-16 md:py-20">
                <div className="mx-auto max-w-6xl px-6">
                    {/* Header */}
                    <div className="mb-8 text-center" data-aos="fade-up">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#3d6252]">
                            Lage & Anfahrt
                        </p>
                        <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-[#1e1e1e]">
                            Wo Sie uns erreichen
                        </h2>
                        <p className="mt-3 text-sm md:text-base text-slate-600">
                            Persönliche Gespräche finden nach individueller Terminvereinbarung statt.
                        </p>
                    </div>

                    {/* Map Container */}
                    <div
                        className="overflow-hidden rounded-3xl border border-[#d7f2e3] bg-[#f3f4f5]"
                        data-aos="zoom-in"
                    >
                        <div className="relative h-[340px] w-full md:h-[420px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22058948.762285057!2d1.0366031129990156!3d47.553334950922746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ed8886cfadda85%3A0x72ef99e6b3fcf079!2sEurope!5e0!3m2!1sen!2s!4v1764770716212!5m2!1sen!2s"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute inset-0 h-full w-full"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            </section>


        </Wrapper>



    );
}
