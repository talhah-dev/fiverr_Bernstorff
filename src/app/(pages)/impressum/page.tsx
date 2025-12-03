import Wrapper from '@/app/Wrapper'
import React from 'react'

import type { Metadata } from "next";
import Image from 'next/image';

export const metadata: Metadata = {
    title: "Impressum | Graf Bernstorff Consulting",
    description:
        "Impressum von Graf Bernstorff Consulting – Anbieterkennzeichnung, Kontakt und rechtliche Hinweise.",
};

export default function Impressum() {
    return (
            <Wrapper>
                <div className="h-24 w-full bg-[#0b1412]"></div>
            <main className="bg-white py-16 md:py-24 ">
                <section
                    className="mx-auto max-w-4xl px-6 space-y-10"
                    data-aos="fade-up"
                >
                    <header className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d6252]">
                            Rechtliche Hinweise
                        </p>
                        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                            Impressum
                        </h1>
                        <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                            Angaben gemäß § 5 TMG und § 18 Abs. 2 MStV. Bitte passen Sie die
                            untenstehenden Daten an die tatsächlichen Unternehmensangaben an.
                        </p>
                    </header>

                    <div className="space-y-8 text-sm leading-relaxed text-slate-800 md:text-base">
                        {/* Anbieter */}
                        <section className="space-y-2">
                            <h2 className="text-base font-semibold text-slate-900">
                                Anbieterkennzeichnung
                            </h2>
                            <p>
                                <span className="font-semibold">Graf Bernstorff Consulting</span>
                                <br />
                                Moritz von Graf Bernstorff
                                <br />
                                [Straße und Hausnummer]
                                <br />
                                [PLZ] [Ort]
                                <br />
                                [Land]
                            </p>
                        </section>

                        {/* Kontakt */}
                        <section className="space-y-2">
                            <h2 className="text-base font-semibold text-slate-900">Kontakt</h2>
                            <p>
                                Telefon: [Telefonnummer]
                                <br />
                                E-Mail: [E-Mail-Adresse]
                                <br />
                                Website: https://www.[ihre-domain].de
                            </p>
                        </section>

                        {/* Vertretungsberechtigte Person */}
                        <section className="space-y-2">
                            <h2 className="text-base font-semibold text-slate-900">
                                Vertreten durch
                            </h2>
                            <p>
                                Moritz von Graf Bernstorff
                                <br />
                                (Inhaber / Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV)
                            </p>
                        </section>

                        {/* Umsatzsteuer-ID / Aufsichtsbehörde optional */}
                        <section className="space-y-2">
                            <h2 className="text-base font-semibold text-slate-900">
                                Umsatzsteuer-ID
                            </h2>
                            <p>
                                Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:
                                <br />
                                [USt-IdNr., falls vorhanden]
                            </p>
                        </section>

                        {/* Verantwortlich für den Inhalt */}
                        <section className="space-y-2">
                            <h2 className="text-base font-semibold text-slate-900">
                                Verantwortlich für den Inhalt
                            </h2>
                            <p>
                                Verantwortlich im Sinne des § 18 Abs. 2 MStV:
                                <br />
                                Moritz von Graf Bernstorff
                                <br />
                                [Straße und Hausnummer]
                                <br />
                                [PLZ] [Ort]
                            </p>
                        </section>

                        {/* Haftung für Inhalte */}
                        <section className="space-y-2">
                            <h2 className="text-base font-semibold text-slate-900">
                                Haftung für Inhalte
                            </h2>
                            <p>
                                Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt.
                                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                                können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter
                                sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
                                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10
                                TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
                                übermittelte oder gespeicherte fremde Informationen zu überwachen
                                oder nach Umständen zu forschen, die auf eine rechtswidrige
                                Tätigkeit hinweisen.
                            </p>
                        </section>

                        {/* Haftung für Links */}
                        <section className="space-y-2">
                            <h2 className="text-base font-semibold text-slate-900">
                                Haftung für Links
                            </h2>
                            <p>
                                Unser Angebot enthält gegebenenfalls Links zu externen Websites
                                Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
                                können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                                Für die Inhalte der verlinkten Seiten ist stets der jeweilige
                                Anbieter oder Betreiber der Seiten verantwortlich. Rechtswidrige
                                Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                            </p>
                        </section>

                        {/* Urheberrecht */}
                        <section className="space-y-2">
                            <h2 className="text-base font-semibold text-slate-900">
                                Urheberrecht
                            </h2>
                            <p>
                                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
                                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                            </p>
                        </section>

                        {/* Online-Streitbeilegung optional */}
                        <section className="space-y-2">
                            <h2 className="text-base font-semibold text-slate-900">
                                Hinweis zur Online-Streitbeilegung
                            </h2>
                            <p>
                                Die Europäische Kommission stellt eine Plattform zur
                                Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr
                                <br />
                                Unsere E-Mail-Adresse finden Sie oben im Impressum.
                            </p>
                        </section>

                        <section className="pt-4 text-xs text-slate-500">
                            <p>
                                Hinweis: Dieses Impressum stellt keine Rechtsberatung dar. Lassen
                                Sie Ihre Angaben im Zweifel durch eine Rechtsanwältin oder einen
                                Rechtsanwalt prüfen.
                            </p>
                        </section>
                    </div>
                </section>
            </main>
        </Wrapper>
    )
}
