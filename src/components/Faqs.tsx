"use client";

import React from "react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HelpCircle,
  SunMedium,
  Building2,
  ShieldCheck,
  Euro,
  Users,
  LineChart,
} from "lucide-react";

type FAQItem = {
  id: string;
  icon: React.ReactNode;
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    id: "item-1",
    icon: <Building2 className="m-auto h-4 w-4 text-[#3d6252]" />,
    question:
      "Für wen eignet sich eine Kapitalanlage-Immobilie mit Photovoltaik?",
    answer:
      "Unsere Konzepte richten sich vor allem an Unternehmer:innen, Selbständige und Führungskräfte mit stabilem Einkommen, die Vermögen strategisch aufbauen oder absichern möchten. Wichtig ist nicht nur das Einkommen, sondern auch Ihre Ziele, Ihr Sicherheitsbedürfnis und Ihr Zeithorizont.",
  },
  {
    id: "item-2",
    icon: <Euro className="m-auto h-4 w-4 text-[#3d6252]" />,
    question: "Wie viel Eigenkapital sollte ich mitbringen?",
    answer:
      "In vielen Fällen sind Investitionen ab ca. 25.000 € Eigenkapital möglich. Entscheidend ist jedoch immer Ihre persönliche Finanzsituation, bestehende Verpflichtungen und die gewünschte Struktur der Finanzierung. Im Erstgespräch klären wir gemeinsam, welcher Rahmen sinnvoll und verantwortungsvoll ist.",
  },
  {
    id: "item-3",
    icon: <LineChart className="m-auto h-4 w-4 text-[#3d6252]" />,
    question: "Was ist der Unterschied zwischen Eigennutzung und Kapitalanlage?",
    answer:
      "Bei einer eigengenutzten Immobilie steht Ihr persönliches Wohnen im Vordergrund. Eine Kapitalanlage-Immobilie wird dagegen gezielt zur Vermietung erworben, um laufende Einnahmen, Tilgung und steuerliche Effekte zu nutzen. Wir betrachten immer, wie sich die Investition langfristig auf Ihr Gesamtvermögen auswirkt.",
  },
  {
    id: "item-4",
    icon: <SunMedium className="m-auto h-4 w-4 text-[#3d6252]" />,
    question: "Warum kombinieren Sie Immobilien mit Photovoltaik?",
    answer:
      "Photovoltaik kann zusätzliche Erträge und einen Schutz vor steigenden Energiekosten bieten. In Verbindung mit einer Immobilie entsteht ein Investment, das sowohl Substanzwert als auch laufenden Cashflow bietet. Wir prüfen dabei immer Standort, Technik, Laufzeiten und Rahmenbedingungen im deutschen Markt.",
  },
  {
    id: "item-5",
    icon: <ShieldCheck className="m-auto h-4 w-4 text-[#3d6252]" />,
    question: "Welche Risiken gibt es – und wie gehen Sie damit um?",
    answer:
      "Jedes Investment ist mit Risiken verbunden, z. B. Zinsentwicklung, Leerstand, Bauqualität oder regulatorische Änderungen. Unsere Aufgabe ist es, diese Risiken offen anzusprechen, zu quantifizieren und durch Standortwahl, Objektprüfung, konservative Kalkulationen und langfristige Planung zu reduzieren.",
  },
  {
    id: "item-6",
    icon: <Users className="m-auto h-4 w-4 text-[#3d6252]" />,
    question:
      "Arbeiten Sie mit meinem Steuerberater oder Finanzierungspartner zusammen?",
    answer:
      "Ja. Idealerweise verstehen alle Beteiligten – Beratung, Steuer, Finanzierung – Ihr Konzept. Auf Wunsch stimmen wir uns mit Ihrem Steuerberater, Finanzierungspartner oder Rechtsanwalt ab, sodass das Investment nahtlos in Ihre bestehende Struktur integriert werden kann.",
  },
  {
    id: "item-7",
    icon: <HelpCircle className="m-auto h-4 w-4 text-[#3d6252]" />,
    question: "Was kostet die Beratung und wie läuft das Erstgespräch ab?",
    answer:
      "Das Erstgespräch ist für Sie kostenlos und unverbindlich. Dabei klären wir, ob eine Zusammenarbeit fachlich und persönlich sinnvoll ist. Im Anschluss erhalten Sie ein transparentes Angebot zur weiteren Begleitung. Es gibt keine versteckten Gebühren und keine Verpflichtung, ein bestimmtes Produkt abzunehmen.",
  },
];

export default function Faqs() {
  return (
    <section
      className="bg-white pb-16 md:pt-8 pt-3 md:pb-24"
      data-aos="fade-in"
      data-aos-duration="800"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          {/* Left text / intro */}
          <div
            className="md:w-1/3"
            data-aos="fade-up"
            data-aos-delay={120}
            data-aos-duration={900}
          >
            <div className="md:sticky md:top-32 space-y-4">
              <p
                className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d6252]"
                data-aos="zoom-in"
                data-aos-delay={140}
              >
                Häufige Fragen
              </p>
              <h2
                className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl"
                data-aos="fade-up"
                data-aos-delay={170}
              >
                Klarheit vor jeder Entscheidung.
              </h2>
              <p
                className="text-sm leading-relaxed text-slate-600"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Wenn Ihre Frage hier nicht beantwortet wird, schreiben Sie uns direkt über das{" "}
                <Link
                  href="/kontakt"
                  className="font-semibold text-[#3d6252] underline-offset-4 hover:underline"
                >
                  Kontaktformular
                </Link>{" "}
                oder vereinbaren Sie ein unverbindliches Erstgespräch.
              </p>
            </div>
          </div>

          {/* Right: accordion */}
          <div
            className="md:w-2/3"
            data-aos="fade-up"
            data-aos-delay={180}
            data-aos-duration={900}
          >
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="rounded-xl border border-slate-200 bg-white px-4 shadow-sm"
                  data-aos="fade-up"
                >
                  <AccordionTrigger className="cursor-pointer items-center py-4 hover:no-underline">
                    <div className="flex items-center gap-3 text-left">
                      <div className="flex h-7 shrink-0 w-7 items-center justify-center rounded-full bg-[#e5f0ea]">
                        {item.icon}
                      </div>
                      <span className="text-sm font-medium text-slate-900">
                        {item.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="px-10">
                      <p className="text-sm leading-relaxed text-slate-700">
                        {item.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
