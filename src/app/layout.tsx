import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const MontserratFont = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.graf-bernstorff-consulting.de"), // change to real domain
  title: {
    default: "Graf Bernstorff Consulting – Immobilien & Photovoltaik als Kapitalanlage",
    template: "%s | Graf Bernstorff Consulting",
  },
  description:
    "Graf Bernstorff Consulting berät Unternehmer:innen und Führungskräfte bei strategischen Investments in Kapitalanlage-Immobilien und Photovoltaik – mit 28+ Jahren Erfahrung, klaren Konzepten und exakter Finanzplanung.",
  keywords: [
    "Kapitalanlage Immobilien",
    "Immobilieninvestments Deutschland",
    "Photovoltaik Investment",
    "Vermögensaufbau",
    "Inflationsschutz",
    "Graf Bernstorff Consulting",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://www.graf-bernstorff-consulting.de",
    siteName: "Graf Bernstorff Consulting",
    title: "Graf Bernstorff Consulting – Immobilien & Photovoltaik als Kapitalanlage",
    description:
      "Strategische Beratung für Kapitalanlage-Immobilien & Photovoltaik in Deutschland, Österreich und der Schweiz.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graf Bernstorff Consulting – Immobilien & Photovoltaik als Kapitalanlage",
    description:
      "Persönliche Investment-Strategie für Unternehmer:innen und Führungskräfte im DACH-Raum.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${MontserratFont.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
