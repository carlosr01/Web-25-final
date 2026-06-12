import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta",
  weight: ["500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
});


export const metadata: Metadata = {
  title: "Carlos Rivadeneyra | Consultor en Soluciones de IA",
  description:
    "Consultor en soluciones de IA. Chatbots y agentes autónomos para finanzas y marketing. Roadmaps, auditorías y desarrollo con LLMs. Implementaciones en 14–30 días.",
  metadataBase: new URL("https://crivadeneyra.com"),
  keywords: [
    "soluciones de ia",
    "agentes autonomos",
    "chatbots",
    "llm",
    "consultoria ia",
    "prompt engineering",
    "automatizacion marketing",
    "automatizacion finanzas",
  ],
  authors: [{ name: "Carlos Rivadeneyra" }],
  creator: "Carlos Rivadeneyra",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://crivadeneyra.com",
    title: "Carlos Rivadeneyra | Consultor en Soluciones de IA",
    description:
      "Consultor en soluciones de IA. Chatbots y agentes autónomos para finanzas y marketing. Roadmaps, auditorías y desarrollo con LLMs. Implementaciones en 14–30 días.",
    siteName: "Carlos Rivadeneyra Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Carlos Rivadeneyra - Consultor en soluciones de IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carlos Rivadeneyra | Consultor en Soluciones de IA",
    description:
      "Consultor en soluciones de IA. Chatbots y agentes autónomos para finanzas y marketing. Roadmaps, auditorías y desarrollo con LLMs. Implementaciones en 14–30 días.",
    images: ["/images/og-image.png"],
    creator: "@carlosrivadeneyra",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${plusJakarta.variable} ${instrumentSerif.variable} dark`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Load third-party runtime lazily to avoid blocking main thread and TBT */}
        <Script
          crossOrigin="anonymous"
          strategy="afterInteractive"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
        <Script id="ld-json" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Carlos Rivadeneyra | Consultor en Soluciones de IA",
            url: "https://crivadeneyra.com",
            description:
              "Consultor en soluciones de IA. Chatbots y agentes autónomos para finanzas y marketing. Roadmaps, auditorías y desarrollo con LLMs.",
            areaServed: "Global",
            founder: {
              "@type": "Person",
              name: "Carlos Rivadeneyra",
            },
            sameAs: [
              "https://www.linkedin.com/in/crivadeneyera/",
              "https://twitter.com/carlosrivadeneyra",
            ],
          })}
        </Script>
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.className} antialiased bg-bg text-text min-h-screen`}
      >
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
