import React from 'react'
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#0b1412] text-slate-200 pt-16 pb-10 border-t border-white/10">
            <div className="mx-auto max-w-6xl px-4 md:px-6">

                {/* Top CTA */}
                <div className="rounded-3xl bg-[#3d6252] px-6 py-8 text-center text-white shadow-[0_15px_35px_rgba(0,0,0,0.4)]">
                    <h3 className="text-lg font-semibold tracking-tight">
                        Bereit für Ihre persönliche Investmentstrategie?
                    </h3>
                    <p className="mt-1 text-sm opacity-90">
                        Ein Erstgespräch ist kostenlos & unverbindlich — starten Sie heute.
                    </p>
                    <Link
                        href="/kontakt#beratung"
                        className="inline-block mt-4 rounded-full bg-white text-[#0b1412] px-6 py-2 text-sm font-semibold hover:bg-slate-100"
                    >
                        Jetzt Beratung anfragen
                    </Link>
                </div>

                {/* Footer Grid */}
                <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div className="space-y-5">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e5e6e7]">
                                <Image
                                    src="/logo-mark-graf-bernstorff.svg"
                                    alt="Graf Bernstorff Consulting Logo"
                                    width={24}
                                    height={24}
                                />
                            </div>
                            <span className="text-base font-semibold text-slate-50 tracking-tight">
                                Graf Bernstorff Consulting
                            </span>
                        </div>

                        <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
                            Strategische Beratung für Kapitalanlage-Immobilien & Photovoltaik —
                            persönlich, transparent und mit 28+ Jahren Erfahrung.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-sm font-semibold text-slate-50 mb-4">
                            Navigation
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-white">Startseite</Link></li>
                            <li><Link href="/warum-investieren" className="hover:text-white">Warum investieren?</Link></li>
                            <li><Link href="/leistungen" className="hover:text-white">Leistungen</Link></li>
                            <li><Link href="/photovoltaik" className="hover:text-white">Photovoltaik</Link></li>
                            <li><Link href="/ueber-uns" className="hover:text-white">Über uns</Link></li>
                            <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                            <li><Link href="/kontakt" className="hover:text-white">Kontakt</Link></li>
                        </ul>
                    </div>

                    {/* Highlights */}
                    <div>
                        <h4 className="text-sm font-semibold text-slate-50 mb-4">
                            Vorteile
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-white">28+ Jahre Erfahrung</li>
                            <li className="hover:text-white">Premium Neubau & Bestand</li>
                            <li className="hover:text-white">PV-Investment Expertise</li>
                            <li className="hover:text-white">Deutschlandweit aktiv</li>
                            <li className="hover:text-white">Persönliche Begleitung</li>
                            <li className="hover:text-white">Finanz- & Steueroptimierung</li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-sm font-semibold text-slate-50 mb-4">
                            Rechtliches
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/impressum" className="hover:text-white">Impressum</Link></li>
                            <li><Link href="/datenschutz" className="hover:text-white">Datenschutz</Link></li>
                            <li><Link href="/agb" className="hover:text-white">AGB</Link></li>
                            <li><Link href="/cookies" className="hover:text-white">Cookie-Einstellungen</Link></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-12 border-t border-white/10 pt-6 flex flex-col items-center justify-center gap-2 text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} Graf Bernstorff Consulting – Alle Rechte vorbehalten.</p>
                    <p>Deutsche / EU-Datenschutzstandards · DSGVO-konform</p>
                </div>
            </div>
        </footer>
    );
}

