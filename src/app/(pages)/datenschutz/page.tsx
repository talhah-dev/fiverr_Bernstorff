import Wrapper from '@/app/Wrapper'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Datenschutzerklärung | Graf Bernstorff Consulting",
    description:
        "Datenschutzerklärung von Graf Bernstorff Consulting gemäß DSGVO und Bundesdatenschutzgesetz.",
};

export default function Datenschutz() {
    return (
        <Wrapper>
            <div className="h-24 w-full bg-[#0b1412]"></div>
            <main className="bg-white py-16 md:py-24">
                <section
                    className="mx-auto max-w-4xl px-6 space-y-10"
                    data-aos="fade-up"
                >
                    {/* Header */}
                    <header className="space-y-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d6252]">
                            Datenschutz
                        </p>
                        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                            Datenschutzerklärung
                        </h1>
                        <p className="text-sm leading-relaxed text-slate-600 md:text-base">
                            Der Schutz Ihrer personenbezogenen Daten hat für uns höchste
                            Priorität. Nachfolgend informieren wir Sie ausführlich über die
                            Verarbeitung personenbezogener Daten gemäß DSGVO.
                        </p>
                    </header>

                    <div className="space-y-10 text-sm md:text-base leading-relaxed text-slate-800">
                        {/* Verantwortlicher */}
                        <section className="space-y-2">
                            <h2 className="text-lg font-semibold text-slate-900">1. Verantwortlicher</h2>
                            <p>
                                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                                <br /><br />
                                <strong>Graf Bernstorff Consulting</strong><br />
                                Moritz von Graf Bernstorff<br />
                                [Straße & Hausnummer]<br />
                                [PLZ] [Ort]<br />
                                Deutschland
                                <br /><br />
                                E-Mail: [E-Mail einfügen]<br />
                                Telefon: [Telefon einfügen]
                            </p>
                        </section>

                        {/* Hosting */}
                        <section className="space-y-2">
                            <h2 className="text-lg font-semibold text-slate-900">
                                2. Hosting / Server-Logfiles
                            </h2>
                            <p>
                                Unsere Website wird bei <strong>Hostinger (EU)</strong> gehostet.
                                Es werden automatisch Server-Logfiles erhoben:
                            </p>
                            <ul className="list-disc ml-5">
                                <li>Browsertyp & Browserversion</li>
                                <li>verwendetes Betriebssystem</li>
                                <li>Referrer URL</li>
                                <li>Hostname des zugreifenden Rechners</li>
                                <li>Uhrzeit der Serveranfrage</li>
                                <li>IP-Adresse</li>
                            </ul>
                            <p>
                                Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis
                                unseres berechtigten Interesses an der technischen Sicherheit.
                            </p>
                        </section>

                        {/* Kontaktformular */}
                        <section className="space-y-2">
                            <h2 className="text-lg font-semibold text-slate-900">
                                3. Kontaktformular & Kommunikation
                            </h2>
                            <p>
                                Wenn Sie uns über ein Kontaktformular kontaktieren (z. B. über
                                Web3Forms oder eigenes Backend), verarbeiten wir:
                            </p>
                            <ul className="list-disc ml-5">
                                <li>Name</li>
                                <li>E-Mail-Adresse</li>
                                <li>Telefonnummer (falls angegeben)</li>
                                <li>Ihre Nachricht</li>
                            </ul>
                            <p>
                                Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. b DSGVO
                                (vorvertragliche Maßnahmen).
                            </p>
                        </section>

                        {/* Cookies */}
                        <section className="space-y-2">
                            <h2 className="text-lg font-semibold text-slate-900">4. Cookies & Consent</h2>
                            <p>
                                Wir verwenden ausschließlich technisch erforderliche Cookies, sofern
                                Sie im Cookie-Banner nicht weitere zugestimmt haben.
                            </p>
                            <p>
                                Für optionale Cookies ist Ihre Einwilligung gemäß Art. 6 Abs. 1 lit. a
                                DSGVO erforderlich.
                            </p>
                        </section>

                        {/* Analytics (optional) */}
                        <section className="space-y-2">
                            <h2 className="text-lg font-semibold text-slate-900">
                                5. Analyse-Tools (optional)
                            </h2>
                            <p>
                                Falls verwendet (bitte aktivieren, wenn nötig):
                                <strong>Plausible Analytics (EU)</strong> – DSGVO-konform,
                                cookie-frei.
                            </p>
                        </section>

                        {/* Externe Dienste */}
                        <section className="space-y-2">
                            <h2 className="text-lg font-semibold text-slate-900">
                                6. Weitergabe an Dritte
                            </h2>
                            <p>
                                Wir geben personenbezogene Daten nur weiter, wenn dies gesetzlich
                                erlaubt ist oder Sie eingewilligt haben.
                            </p>
                        </section>

                        {/* Betroffenenrechte */}
                        <section className="space-y-2">
                            <h2 className="text-lg font-semibold text-slate-900">
                                7. Ihre Rechte
                            </h2>
                            <p>Sie haben gemäß DSGVO folgende Rechte:</p>
                            <ul className="list-disc ml-5">
                                <li>Auskunft (Art. 15 DSGVO)</li>
                                <li>Berichtigung (Art. 16 DSGVO)</li>
                                <li>Löschung (Art. 17 DSGVO)</li>
                                <li>Einschränkung (Art. 18 DSGVO)</li>
                                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                                <li>Widerspruch (Art. 21 DSGVO)</li>
                            </ul>
                        </section>

                        {/* Datenspeicherung */}
                        <section className="space-y-2">
                            <h2 className="text-lg font-semibold text-slate-900">
                                8. Speicherdauer
                            </h2>
                            <p>
                                Wir speichern personenbezogene Daten nur so lange, wie es für den
                                Zweck notwendig ist oder wir gesetzlich verpflichtet sind.
                            </p>
                        </section>

                        {/* Sicherheit */}
                        <section className="space-y-2">
                            <h2 className="text-lg font-semibold text-slate-900">
                                9. Datensicherheit
                            </h2>
                            <p>
                                Wir nutzen SSL-Verschlüsselung und EU-Hosting, um Ihre Daten bestmöglich
                                zu schützen.
                            </p>
                        </section>

                        {/* Änderungen */}
                        <section className="space-y-2">
                            <h2 className="text-lg font-semibold text-slate-900">
                                10. Änderungen dieser Datenschutzerklärung
                            </h2>
                            <p>
                                Diese Datenschutzerklärung kann angepasst werden, um rechtliche Änderungen
                                zu berücksichtigen.
                            </p>
                        </section>

                        {/* Footer Note */}
                        <section className="pt-4 text-xs text-slate-500">
                            <p>
                                Hinweis: Diese Vorlage ersetzt keine individuelle Rechtsberatung. Lassen
                                Sie Ihre Angaben im Zweifel anwaltlich prüfen.
                            </p>
                        </section>
                    </div>
                </section>
            </main>
        </Wrapper>
    )
}
