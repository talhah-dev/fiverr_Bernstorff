import Wrapper from '@/app/Wrapper'
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Euro, TrendingUp } from "lucide-react";
import { Compass, FileSignature, Handshake } from "lucide-react";
import { Building2, SunMedium, BarChart3 } from "lucide-react";
import { CheckCircle2, User, Briefcase } from "lucide-react";
import { Calculator, BarChart } from "lucide-react";
import { Clock, Newspaper } from "lucide-react";



export default function HomePage() {
    return (
        <Wrapper>
            <section className="relative overflow-hidden bg-[#0b1412] text-slate-50">
                {/* Subtle background gradient */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(61,98,82,0.35),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(229,230,231,0.12),_transparent_55%)]" />

                <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-10 md:px-6 lg:flex-row lg:items-center lg:pb-24 lg:pt-16">
                    {/* Left: Text */}
                    <div className="flex-1 space-y-8">
                        {/* Eyebrow + trust */}
                        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-200">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#3d6252]" />
                            Graf Bernstorff Consulting
                            <span className="text-[0.65rem] text-slate-400">
                                28+ Jahre Erfahrung in Finanzplanung & Immobilien
                            </span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                                Vermögen schützen.
                                <span className="block text-[#d7f2e3]">
                                    Inflationssicher in Immobilien & Photovoltaik investieren.
                                </span>
                            </h1>
                            <p className="max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base">
                                Wir begleiten Unternehmer:innen und Führungskräfte bei
                                strategischen Investitionen in ausgewählte Kapitalanlage-Immobilien
                                und Photovoltaik-Projekte – mit klaren Zahlen, transparenten
                                Konzepten und persönlicher Betreuung von der ersten Idee bis zur
                                Übernahme.
                            </p>
                        </div>

                        {/* Key benefits */}
                        <div className="grid gap-4 text-sm sm:grid-cols-3">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                                <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#3d6252]/20">
                                    <ShieldCheck className="h-4 w-4 text-[#d7f2e3]" />
                                </div>
                                <div className="font-semibold">Stabile Sachwerte</div>
                                <p className="mt-1 text-xs text-slate-300">
                                    Solide Immobilien & PV-Anlagen als Schutz vor Inflation und
                                    Wertverlust.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                                <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#3d6252]/20">
                                    <LineChart className="h-4 w-4 text-[#d7f2e3]" />
                                </div>
                                <div className="font-semibold">Planbare Cashflows</div>
                                <p className="mt-1 text-xs text-slate-300">
                                    Exakte Finanzplanung, Mieteinnahmen & steuerliche Optimierung
                                    anhand realer Szenarien.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                                <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#3d6252]/20">
                                    <span className="text-xs font-semibold text-[#d7f2e3]">
                                        1:1
                                    </span>
                                </div>
                                <div className="font-semibold">Persönliche Begleitung</div>
                                <p className="mt-1 text-xs text-slate-300">
                                    Direkter Kontakt zu Moritz Bernstorff und seinem Expertennetzwerk.
                                </p>
                            </div>
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center gap-4">
                            <Button
                                asChild
                                className="rounded-full bg-[#3d6252] px-6 text-sm font-semibold text-white shadow-lg shadow-black/20 hover:bg-[#314e42]"
                            >
                                <Link href="/kontakt#beratung">
                                    Jetzt persönliche Beratung anfragen
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                className="rounded-full border-white/30 bg-transparent px-6 text-sm font-semibold text-slate-50 hover:bg-white/5"
                            >
                                <Link href="/warum-investieren">
                                    Warum jetzt investieren?
                                </Link>
                            </Button>

                            <p className="w-full text-xs text-slate-300 sm:w-auto">
                                Erste Einschätzung kostenlos & unverbindlich.
                            </p>
                        </div>
                    </div>

                    {/* Right: visual / “glasmorphism” card */}
                    <div className="flex-1">
                        <div className="relative mx-auto max-w-md rounded-3xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur-lg">
                            {/* Background badge */}
                            <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full border border-[#3d6252]/40 bg-[#3d6252]/25 blur-xl" />

                            <div className="mb-4 flex items-center justify-between gap-3">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.18em] text-slate-300">
                                        Investment-Case
                                    </p>
                                    <p className="text-sm font-semibold text-slate-50">
                                        Kapitalanlage Immobilie + Photovoltaik
                                    </p>
                                </div>
                                <span className="rounded-full bg-[#3d6252] px-3 py-1 text-xs font-semibold text-white">
                                    DACH-Markt
                                </span>
                            </div>

                            <div className="relative mb-4 h-40 overflow-hidden rounded-2xl border border-white/10 bg-[#182623]">
                                {/* Replace with real hero image later */}
                                <Image
                                    src="/hero-visual-graf-bernstorff.jpg"
                                    alt="Moderne Immobilie mit Photovoltaik"
                                    fill
                                    className="object-cover opacity-80"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-3 text-xs text-slate-200">
                                <div>
                                    <p className="text-[0.7rem] uppercase tracking-wide text-slate-400">
                                        Eigenkapital
                                    </p>
                                    <p className="text-sm font-semibold">ab 25.000 €</p>
                                </div>
                                <div>
                                    <p className="text-[0.7rem] uppercase tracking-wide text-slate-400">
                                        Geplanter Anlagehorizont
                                    </p>
                                    <p className="text-sm font-semibold">10–20 Jahre</p>
                                </div>
                                <div>
                                    <p className="text-[0.7rem] uppercase tracking-wide text-slate-400">
                                        Mögliche Mietrendite*
                                    </p>
                                    <p className="text-sm font-semibold">3–5 % p.a.</p>
                                </div>
                                <div>
                                    <p className="text-[0.7rem] uppercase tracking-wide text-slate-400">
                                        PV-Ertragspotenzial*
                                    </p>
                                    <p className="text-sm font-semibold">zusätzl. Cashflow</p>
                                </div>
                            </div>

                            <p className="mt-3 text-[0.68rem] text-slate-400">
                                *Beispielwerte. Eine Investitionsentscheidung erfordert eine
                                individuelle, verbindliche Berechnung.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#f3f4f5] py-16 text-slate-900">
                <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d6252]">
                            Struktur statt Zufall
                        </p>
                        <h2 className="mt-2 text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                            In drei klaren Schritten vom ersten Gespräch zum tragfähigen Investment.
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                            Gemeinsam entwickeln wir ein Konzept, das zu Ihrer persönlichen Situation,
                            Ihrem Sicherheitsbedürfnis und Ihren Wachstumszielen passt – transparent,
                            nachvollziehbar und mit klaren Entscheidungsgrundlagen.
                        </p>
                    </div>

                    <div className="grid gap-6 lg:grid-cols-[1.4fr_minmax(0,1fr)] lg:items-start">
                        <div className="grid gap-6 md:grid-cols-3">
                            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
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
                                    Sie erhalten eine ehrliche Einschätzung, ob und wie ein Investment
                                    aktuell sinnvoll ist.
                                </p>
                                <div className="mt-4 rounded-2xl bg-slate-50 px-3 py-2 text-[0.68rem] text-slate-500">
                                    Ergebnis: ein klares Bild Ihrer Ausgangssituation und Ihres
                                    persönlichen Investitionsrahmens.
                                </div>
                            </div>

                            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
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
                                    Auf Basis Ihrer Kennzahlen strukturieren wir konkrete
                                    Investment-Szenarien mit geprüften Neubau- und Bestandsimmobilien
                                    sowie passenden Photovoltaik-Lösungen.
                                </p>
                                <ul className="mt-3 space-y-1 text-[0.7rem] text-slate-500">
                                    <li>• Standort- und Objektanalyse</li>
                                    <li>• Finanzierungs- und Steuerbetrachtung</li>
                                    <li>• Szenarien: konservativ, ausgewogen, dynamisch</li>
                                </ul>
                            </div>

                            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
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
                                    Wir begleiten Sie durch den gesamten Prozess – von der
                                    Finanzierungszusage über den Notartermin bis zur Vermietung und
                                    Inbetriebnahme der PV-Anlage.
                                </p>
                                <div className="mt-4 grid grid-cols-2 gap-2 text-[0.7rem] text-slate-500">
                                    <div className="rounded-2xl bg-slate-50 px-3 py-2">
                                        Laufende Abstimmung mit Steuer-, Finanz- und Rechtspartnern.
                                    </div>
                                    <div className="rounded-2xl bg-slate-50 px-3 py-2">
                                        Regelmäßige Überprüfung der Strategie und Anpassung an Ihr Leben.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between gap-6">
                            <div className="rounded-3xl border border-slate-200 bg-white p-6">
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d6252]">
                                    Für wen ist das interessant?
                                </p>
                                <h3 className="mt-2 text-sm font-semibold tracking-tight">
                                    Unternehmer:innen, Selbständige und Führungskräfte mit
                                    Blick aufs Ganze.
                                </h3>
                                <p className="mt-3 text-xs leading-relaxed text-slate-600">
                                    Sie möchten Vermögen strategisch aufbauen oder absichern, ohne
                                    sich täglich mit Kapitalmärkten zu beschäftigen. Sie schätzen
                                    verlässliche Partner, die steuerliche, finanzielle und
                                    rechtliche Aspekte mitdenken und in klare Handlungsempfehlungen
                                    übersetzen.
                                </p>
                                <div className="mt-4 grid grid-cols-2 gap-3 text-[0.7rem] text-slate-600">
                                    <div className="rounded-2xl bg-slate-50 px-3 py-2">
                                        Netto-Einkommen in der Regel ab 5.000 € monatlich
                                    </div>
                                    <div className="rounded-2xl bg-slate-50 px-3 py-2">
                                        Freies Eigenkapital oder Vermögenswerte ab ca. 25.000 €
                                    </div>
                                </div>
                                <Button
                                    asChild
                                    className="mt-6 w-full rounded-full bg-[#3d6252] text-sm font-semibold text-white hover:bg-[#314e42]"
                                >
                                    <Link href="/lead-anfrage">
                                        In 4 Schritten prüfen, ob Sie passen
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>

                            <div className="rounded-3xl border border-dashed border-[#3d6252]/40 bg-[#e5e6e7] px-4 py-3 text-[0.7rem] text-slate-700">
                                <div className="mx-auto flex max-w-md flex-wrap items-center justify-between gap-2">
                                    <span className="font-semibold text-slate-900">
                                        28+ Jahre Erfahrung in Finanzplanung &amp; Immobilien
                                    </span>
                                    <span className="rounded-full bg-white px-3 py-1 text-[0.68rem] font-medium text-[#3d6252]">
                                        Erstgespräch kostenfrei &amp; unverbindlich
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="bg-[#0b1412] py-16 text-slate-50">
                <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:px-6 lg:grid lg:grid-cols-[1.1fr_minmax(0,1.1fr)] lg:items-stretch">
                    <div className="flex flex-col justify-center gap-6">
                        <div className="inline-flex max-w-max items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.18em]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#3d6252]" />
                            Zwei Säulen, ein Ziel
                        </div>
                        <h2 className="text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                            Premium-Immobilien &amp; Photovoltaik
                            <span className="block text-[#d7f2e3]">
                                als klar strukturierte Kapitalanlage.
                            </span>
                        </h2>
                        <p className="max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base">
                            Graf Bernstorff Consulting kombiniert ausgewählte Neubau- und
                            Bestandsimmobilien mit leistungsstarken Photovoltaik-Lösungen.
                            So entsteht ein Investment, das regelmäßige Einnahmen, Substanz
                            im Hintergrund und Energiewende im Vordergrund verbindet.
                        </p>

                        <div className="mt-2 flex flex-wrap gap-3 text-[0.7rem] text-slate-200">
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

                        <div className="mt-4 grid gap-3 text-xs text-slate-200 sm:grid-cols-3">
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

                        <div className="mt-6 flex flex-wrap items-center gap-4">
                            <Button
                                asChild
                                className="rounded-full bg-[#3d6252] px-6 text-sm font-semibold text-white hover:bg-[#314e42]"
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

                    <div className="relative mt-4 grid gap-4 lg:mt-0">
                        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-[#e5e6e7] via-white to-[#d7f2e3] p-5 text-slate-900 shadow-[0_20px_45px_rgba(0,0,0,0.45)]">
                            <div className="mb-4 flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#0b1412] text-white">
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
                            <div className="relative mb-4 h-32 overflow-hidden rounded-2xl">
                                <Image
                                    src="/immobilie-card.jpg"
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
                            <div className="mt-4 grid grid-cols-3 gap-2 text-[0.68rem] text-slate-700">
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

                        <div className="relative -mt-6 self-end rounded-3xl border border-[#3d6252]/40 bg-[#101c19] p-5 text-slate-50 shadow-[0_16px_40px_rgba(0,0,0,0.65)] lg:-mr-10">
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
                            <div className="relative mb-4 h-28 overflow-hidden rounded-2xl">
                                <Image
                                    src="/photovoltaik-card.jpg"
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
                            <div className="mt-4 grid grid-cols-2 gap-2 text-[0.68rem] text-slate-100">
                                <div className="rounded-2xl bg-white/10 px-3 py-2">
                                    Zusätzlicher Cashflow neben Mieteinnahmen
                                </div>
                                <div className="rounded-2xl bg-white/10 px-3 py-2">
                                    Beitrag zur Energiewende &amp; ESG-Strategie
                                </div>
                            </div>
                            <p className="mt-4 text-[0.65rem] text-slate-400">
                                Die genaue Struktur Ihrer Immobilie- &amp; PV-Kombination
                                erarbeiten wir in einer individuellen Strategie-Session.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#f3f4f5] py-20 text-slate-900">
                <div className="mx-auto max-w-6xl px-4 md:px-6">
                    <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:items-center">
                        <div className="space-y-6">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d6252]">
                                Vertrauen & Persönlichkeit
                            </p>

                            <h2 className="text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                                Beratung, die auf Erfahrung, Klarheit
                                <span className="block text-[#3d6252]">
                                    und persönlicher Verantwortung basiert.
                                </span>
                            </h2>

                            <p className="text-sm leading-relaxed text-slate-600 sm:text-base max-w-lg">
                                Hinter Graf Bernstorff Consulting steht nicht ein anonymes Team,
                                sondern eine durchdachte, persönliche Beratung durch Moritz Bernstorff.
                                Mit über 28 Jahren Erfahrung in Finanzplanung, Immobilienanalyse
                                und Strategieentwicklung begleitet er Unternehmer:innen und
                                Führungskräfte, die echte Klarheit und langfristige Partnerschaft suchen.
                            </p>

                            <div className="grid gap-4 text-[0.8rem] sm:grid-cols-2">
                                <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
                                    <User className="h-5 w-5 text-[#3d6252]" />
                                    <span className="text-slate-700">
                                        1:1 Begleitung ohne wechselnde Ansprechpartner
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
                                    <Briefcase className="h-5 w-5 text-[#3d6252]" />
                                    <span className="text-slate-700">
                                        Über 28 Jahre Erfahrung in Finanz- & Immobilienstrategie
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
                                    <CheckCircle2 className="h-5 w-5 text-[#3d6252]" />
                                    <span className="text-slate-700">
                                        Netzwerk aus Steuer-, Finanz- & Rechtsexperten
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
                                    <CheckCircle2 className="h-5 w-5 text-[#3d6252]" />
                                    <span className="text-slate-700">
                                        Persönliche Strategie statt Massenvermittlung
                                    </span>
                                </div>
                            </div>

                            <Button
                                asChild
                                className="mt-4 rounded-full bg-[#3d6252] px-6 text-sm font-semibold text-white hover:bg-[#314e42]"
                            >
                                <Link href="/ueber-uns">Mehr über Moritz Bernstorff</Link>
                            </Button>
                        </div>

                        <div className="relative">
                            <div className="relative h-80 w-full overflow-hidden rounded-3xl shadow-[0_20px_45px_rgba(0,0,0,0.25)]">
                                <Image
                                    src="/moritz-bernstorff-portrait.webp"
                                    alt="Moritz Bernstorff – Investmentberater"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-[#3d6252] px-6 py-4 text-white shadow-xl">
                                <p className="text-[0.65rem] uppercase tracking-[0.16em] opacity-90">
                                    Erfahrung & Integrität
                                </p>
                                <p className="text-sm font-semibold">28+ Jahre Beratung</p>
                            </div>

                            <div className="absolute -top-6 -right-6 rounded-2xl bg-[#e5e6e7] px-6 py-4 text-[#0b1412] shadow-xl">
                                <p className="text-[0.65rem] uppercase tracking-[0.16em] text-[#3d6252]">
                                    Premium Beratung
                                </p>
                                <p className="text-sm font-semibold">Deutschlandweit aktiv</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden bg-[#0f1816] py-20 text-slate-50">
                <div className="absolute left-1/2 top-0 -z-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#3d6252]/30 blur-3xl" />
                <div className="absolute bottom-0 right-0 -z-0 h-72 w-72 rounded-full bg-[#d7f2e3]/10 blur-3xl" />

                <div className="relative mx-auto max-w-6xl px-4 md:px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d7f2e3]">
                            Analyse in Echtzeit
                        </p>
                        <h2 className="mt-2 text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                            Berechnen Sie Ihr persönliches Investment­potenzial
                            <span className="block text-[#d7f2e3]">
                                und vergleichen Sie Szenarien live.
                            </span>
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-slate-200 sm:text-base">
                            Der interaktive Rechner zeigt Ihnen, wie sich Rendite, Cashflow und
                            Vermögensaufbau über die Jahre verändern – basierend auf realen
                            Finanzparametern und aktuellen Marktbedingungen im deutschen Markt.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_minmax(0,1fr)] lg:gap-16">
                        <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_45px_rgba(0,0,0,0.45)] backdrop-blur-lg">
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
                                <div className="rounded-2xl bg-[#162421] p-5">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs uppercase tracking-wide text-slate-300">
                                            Vermögensverlauf
                                        </span>
                                        <TrendingUp className="h-4 w-4 text-[#d7f2e3]" />
                                    </div>

                                    <div className="mt-4 flex h-32 items-end gap-2">
                                        <div className="flex-1 rounded-t-lg bg-white/10">
                                            <div className="h-1/3 rounded-t-lg bg-white/30" />
                                        </div>
                                        <div className="flex-1 rounded-t-lg bg-white/10">
                                            <div className="h-2/4 rounded-t-lg bg-white/40" />
                                        </div>
                                        <div className="flex-1 rounded-t-lg bg-white/10">
                                            <div className="h-3/4 rounded-t-lg bg-[#d7f2e3]" />
                                        </div>
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

                                <div className="rounded-2xl bg-[#162421] p-5">
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

                                <p className="text-[0.7rem] text-slate-400">
                                    Diese Werte sind beispielhaft. Die reale Berechnung erfolgt im
                                    persönlichen Gespräch – basierend auf Einkommen, Steuersituation,
                                    Finanzierungsrahmen und Objektwahl.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center gap-8">
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
                                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[0.8rem] text-slate-200">
                                    • Drei Szenarien: konservativ, ausgeglichen, dynamisch
                                </div>
                                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[0.8rem] text-slate-200">
                                    • Einfache Eingabe von Einkommen, Eigenkapital & Laufzeit
                                </div>
                                <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[0.8rem] text-slate-200">
                                    • Berechnung von Cashflow, Tilgung, Erträgen & Steuer-Effekten
                                </div>
                            </div>

                            <Button
                                asChild
                                className="mt-6 w-full rounded-full bg-[#3d6252] px-6 text-sm font-semibold text-white hover:bg-[#314e42] sm:max-w-xs"
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

            <section className="relative overflow-hidden bg-[#f3f4f5] py-20 text-slate-900">
                <div className="absolute left-0 top-0 -z-0 h-72 w-72 -translate-x-1/3 -translate-y-1/3 rounded-full bg-[#3d6252]/20 blur-3xl" />
                <div className="absolute bottom-0 right-0 -z-0 h-96 w-96 translate-x-1/4 translate-y-1/4 rounded-full bg-[#d7f2e3]/30 blur-3xl" />

                <div className="relative mx-auto max-w-6xl px-4 md:px-6">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d6252]">
                            Insights & Impulse
                        </p>

                        <h2 className="mt-2 text-balance text-2xl font-semibold leading-tight tracking-tight sm:text-3xl">
                            Aktuelle Einblicke in Immobilien, Photovoltaik
                            <span className="block text-[#3d6252]">
                                und strategischen Vermögensaufbau.
                            </span>
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                            Wissen, das Ihre Entscheidungen stärkt: Marktupdates, Strategien,
                            steuerliche Vorteile und echte Investment-Perspektiven –
                            klar, verständlich und ohne Fachchinesisch.
                        </p>
                    </div>

                    <div className="mt-14 grid gap-8 md:grid-cols-3">
                        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
                            <div className="relative h-40 w-full overflow-hidden">
                                <Image
                                    src="/blog1.webp"
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
                                    stärker sind als Tagesgeld & Aktien
                                </h3>
                                <p className="mt-2 text-xs text-slate-600">
                                    Eine klare Analyse über Rendite, Sicherheit und Inflationsschutz.
                                </p>
                                <Link
                                    href="/blog/artikel-1"
                                    className="mt-4 inline-flex items-center text-xs font-semibold text-[#3d6252] hover:underline"
                                >
                                    Artikel lesen <ArrowRight className="ml-2 h-3 w-3" />
                                </Link>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
                            <div className="relative h-40 w-full overflow-hidden">
                                <Image
                                    src="/blog2.webp"
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

                        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
                            <div className="relative h-40 w-full overflow-hidden">
                                <Image
                                    src="/blog3.webp"
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
                                    Die meist unterschätzten Steuervorteile bei Immobilien & PV –
                                    und wie Sie sie optimal nutzen
                                </h3>
                                <p className="mt-2 text-xs text-slate-600">
                                    Ein kompakter Leitfaden für Unternehmer & Selbständige.
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

                    <div className="mt-14 flex flex-col items-center gap-4 text-center">
                        <Button
                            asChild
                            className="rounded-full bg-[#3d6252] px-6 text-sm font-semibold text-white hover:bg-[#314e42]"
                        >
                            <Link href="/blog">
                                Alle Artikel ansehen
                                <Newspaper className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>

                        <div className="rounded-2xl bg-white px-5 py-3 text-xs text-slate-600 shadow-sm">
                            <span className="font-semibold text-[#3d6252]">Tipp:</span>
                            Der Blog wird laufend aktualisiert – perfekt, um beim Thema Vermögensaufbau
                            in Deutschland auf dem neuesten Stand zu bleiben.
                        </div>
                    </div>

                    <div className="mt-20 text-center">
                        <h3 className="text-xl font-semibold sm:text-2xl">
                            Bereit für Ihre persönliche Strategie?
                        </h3>
                        <p className="mt-2 text-sm text-slate-600 sm:text-base">
                            Ein Erstgespräch ist kostenlos und unverbindlich – aber oft der Start
                            einer langfristigen Vermögensstrategie.
                        </p>

                        <Button
                            asChild
                            className="mt-6 rounded-full bg-[#3d6252] px-8 text-sm font-semibold text-white hover:bg-[#314e42]"
                        >
                            <Link href="/kontakt#beratung">
                                Jetzt persönliche Beratung anfragen
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </Wrapper>
    )
}
