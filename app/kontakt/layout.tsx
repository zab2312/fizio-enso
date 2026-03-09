import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | Rezervirajte termin u Zagrebu | Fizio Ensō",
  description: "Kontaktirajte Fizio Ensō studio u Maksimiru, Zagreb. Rezervirajte termin za masažu ili fizioterapiju. Adresa: Ulica Ivana Rendića 29.",
  openGraph: {
    title: "Kontakt | Rezervirajte termin u Zagrebu | Fizio Ensō",
    description: "Kontaktirajte Fizio Ensō studio u Maksimiru, Zagreb. Rezervirajte termin za masažu ili fizioterapiju. Adresa: Ulica Ivana Rendića 29.",
    type: "website",
    locale: "hr_HR",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

