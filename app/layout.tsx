import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Fizio Ensō - Harmonija tijela i uma",
  description: "Tretmani pod rukama fizioterapeuta. Prostor u kojem pokret postaje smiren, disanje dublje, a tijelo prisutnije.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "Fizio Ensō",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ulica Ivana Rendića 29",
      addressLocality: "Zagreb",
      addressCountry: "HR",
    },
    telephone: "+385992147200",
    email: "fizioenso@gmail.com",
    // url: "https://www.fizioenso.hr", // TODO: Add actual domain when available
    areaServed: {
      "@type": "City",
      name: "Zagreb",
    },
    sameAs: [],
  };

  return (
    <html lang="hr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

