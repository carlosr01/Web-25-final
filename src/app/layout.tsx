import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Carlos Rivadeneyra | Consultor en Soluciones de IA",
  description:
    "Consultor en soluciones de IA. Chatbots y agentes autónomos para finanzas y marketing. Roadmaps, auditorías y desarrollo con LLMs. Implementaciones en 14–30 días.",
  metadataBase: new URL("https://promptadvisers.ai"),
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
  creator: "Prompt Advisers",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://promptadvisers.ai",
    title: "Carlos Rivadeneyra | Consultor en Soluciones de IA",
    description:
      "Consultor en soluciones de IA. Chatbots y agentes autónomos para finanzas y marketing. Roadmaps, auditorías y desarrollo con LLMs. Implementaciones en 14–30 días.",
    siteName: "Prompt Advisers",
    images: [
      {
        url: "/images/og-image.jpg",
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
    images: ["/images/og-image.jpg"],
    creator: "@promptadvisers",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className={`${inter.className} antialiased`}>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
