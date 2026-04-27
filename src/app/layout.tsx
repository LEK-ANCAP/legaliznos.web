import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://legalizanos.com/"),
  title: "Legalizanos — Asesoría Migratoria para Cubanos en España",
  description: "Legalizamos tus documentos cubanos, tramitamos tu residencia y te acompañamos hasta que tengas tus papeles en regla. Madrid, Valencia y toda España. Consulta gratuita por WhatsApp.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Legalizanos — Tus trámites migratorios resueltos",
    description: "Especialistas en legalización de documentos cubanos, arraigo social, nacionalidad española, visados y reagrupación familiar. 100% online.",
    type: "website",
    url: "/",
    images: ["/og-homepage.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background text-foreground light">
        <SmoothScroll>
          <Navbar />
          <main className="flex-1 flex flex-col">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
