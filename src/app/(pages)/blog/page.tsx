"use client";

import Wrapper from "@/app/Wrapper";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CallToAction from "@/components/CallToAction";

const blogPosts = [
  {
    title:
      "Warum Immobilien auch weiterhin zu den stabilsten Anlagen zählen werden",
    intro:
      "Steigende Mieten, hohe Nachfrage und Steuervorteile",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
    slug: "/blog/subblog",
    date: "12. Februar 2024",
    tag: "Kapitalanlage-Immobilien",
  },
  {
    title:
      "Photovoltaik als Investment: Chancen, Risiken & echte Renditebeispiele",
    intro:
      "PV-Anlagen werden zum strategischen Baustein im Vermögensaufbau – hier erfahren Sie warum.",
    image:
      "https://images.unsplash.com/photo-1709080381729-965c62ab0471?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
    slug: "/blog/subblog",
    date: "3. Februar 2024",
    tag: "Photovoltaik-Investments",
  },
  {
    title:
      "Inflation verstehen: Wie Sie Ihr Geld vor Kaufkraftverlust schützen",
    intro:
      "Inflation frisst Vermögen – doch mit der richtigen Strategie lässt sich dieser Effekt umkehren.",
    image:
      "https://images.unsplash.com/photo-1729505305192-610539203144?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ1fHx8ZW58MHx8fHx8",
    slug: "/blog/subblog",
    date: "25. Januar 2024",
    tag: "Vermögensaufbau & Inflation",
  }
];


export default function Blog() {
  return (
    <Wrapper>
      {/* HERO */}
      <section
        className="relative flex items-center justify-center py-24 md:pt-36 pt-36 md:py-36"
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://images.unsplash.com/photo-1692297457648-5f0950fa2535?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Blog Hintergund – Immobilien & Investments"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative mx-auto max-w-3xl space-y-6 px-6 text-center">
          <p data-aos="fade-up" className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d7f2e3]">
            Insights · Wissen · Strategien
          </p>

          <h1 data-aos-delay="200" data-aos="fade-up" className="text-balance text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
            Alle Blogartikel über reale
          </h1>

          <p data-aos-delay="400" data-aos="fade-up" className="mx-auto max-w-2xl text-sm leading-relaxed text-slate-100/90 md:text-base">
            Aktuelle Entwicklungen am Immobilienmarkt, steuerliche Aspekte,
            Photovoltaik-Chancen und praxisnahe Investment-Einblicke – kompakt
            aufbereitet für Unternehmer:innen und Führungskräfte.
          </p>

          <div data-aos-delay="600" data-aos="fade-up" className="flex justify-center pt-2">
            <Button
              asChild
              className="bg-[#3d6252] px-7 py-6 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,0.5)] hover:bg-[#2f4f42]"
            >
              <Link href="#artikel">Zu den aktuellen Artikeln</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-(--breakpoint-xl) mx-auto py-16 md:px-6 px-4 xl:px-0">

        <div id="artikel" className="mt-4 grid gap-5 gap-x-4 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, idx) => (
            <Card data-aos="fade-up" key={idx} className="shadow-none py-0 gap-3">
              <CardHeader className="p-2 pb-0">
                <div
                  className="aspect-video w-full rounded-lg bg-muted bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
              </CardHeader>

              <CardContent className="pt-0 pb-5 px-5">
                <Badge variant="secondary">{post.tag}</Badge>

                <h3 className="mt-4 text-xl md:text-2xl font-semibold tracking-[-0.015em]">
                  {post.title}
                </h3>

                <p className="mt-3 text-sm text-muted-foreground line-clamp-3">
                  {post.intro}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {post.date}
                  </span>

                  <Link href={"/blog/subblog"} className="text-sm font-medium text-primary">
                    Weiterlesen →
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <CallToAction />

    </Wrapper>
  );
}
