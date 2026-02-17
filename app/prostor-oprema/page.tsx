import { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import { siteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Prostor i oprema – Studio u Maksimiru | Fizio Enso",
  description: "Intiman i miran prostor za fizioterapiju i masaže u Maksimiru, Zagreb. Profesionalna oprema i visoki standardi higijene za vašu udobnost.",
  openGraph: {
    title: "Prostor i oprema – Studio u Maksimiru | Fizio Enso",
    description: "Intiman i miran prostor za fizioterapiju i masaže u Maksimiru, Zagreb. Profesionalna oprema i visoki standardi higijene za vašu udobnost.",
    type: "website",
    locale: "hr_HR",
  },
};

export default function SpacePage() {
  return (
    <>
      <Section className="pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl mb-12 text-center text-foreground">
            {siteContent.space.title}
          </h1>
          <p className="text-lg text-accent mb-12 text-center leading-relaxed">
            {siteContent.space.description}
          </p>
        </div>
      </Section>

      {/* Features */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl mb-8 text-foreground">
            Što nudi naš prostor
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {siteContent.space.features.map((feature, index) => (
              <div key={index} className="bg-background rounded-lg shadow-subtle p-6">
                <p className="text-accent">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Gallery */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl mb-8 text-foreground">
            Galerija
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Placeholder images - replace with actual photos */}
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="relative aspect-video bg-gray-200 rounded-lg shadow-subtle overflow-hidden"
              >
                <div className="absolute inset-0 flex items-center justify-center text-accent">
                  <p className="text-sm">Fotografija {num}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-accent text-center mt-6 italic">
            * Fotografije će biti dodane uskoro
          </p>
        </div>
      </Section>

      {/* Location */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl mb-6 text-foreground">
            Lokacija
          </h2>
          <p className="text-lg text-accent mb-8">
            {siteContent.space.location}
          </p>
          <p className="text-sm text-accent">
            Lako dostupan automobilom i javnim prijevozom
          </p>
        </div>
      </Section>
    </>
  );
}

