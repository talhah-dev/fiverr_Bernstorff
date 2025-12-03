"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section
      className="py-20 md:py-28 bg-[#f3f4f5]"
      
    >
      <div className="mx-auto max-w-4xl px-6 text-center space-y-6">
        <p data-aos="fade-up" className="text-xs font-semibold uppercase tracking-[0.18em] text-[#3d6252]">
          Jetzt starten
        </p>

        <h2
          className="text-balance text-2xl md:text-4xl font-semibold text-slate-900"
          data-aos="fade-up"
        >
          Lassen Sie uns gemeinsam Ihren Vermögensaufbau strategisch gestalten
        </h2>

        <p
          className="mx-auto max-w-2xl text-sm md:text-base leading-relaxed text-slate-600"
          data-aos="fade-up"
        >
          Ob Kapitalanlage-Immobilie oder Photovoltaik-Projekt:  
          Wir analysieren, planen und begleiten – Sie profitieren von klaren
          Zahlen, persönlicher Betreuung und einem starken Expertennetzwerk.
        </p>

        <div data-aos="fade-up">
          <Button
            asChild
            className="bg-[#3d6252] py-6 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,0.4)] hover:bg-[#315245]"
          >
            <Link href="/contact#beratung">
              Kostenlose Beratung
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <p data-aos="fade-up" className="text-xs text-slate-500">
          100% unverbindlich · Erste Einschätzung kostenfrei
        </p>
      </div>
    </section>
  );
}
