import { Metadata } from "next";
import Section from "@/components/Section";
import { siteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "O Ensōu – Filozofija i pristup | Fizio Ensō",
  description: "Upoznajte filozofiju Fizio Ensō studija. Individualni pristup fizioterapiji i masažama u Zagrebu, fokusiran na ravnotežu tijela i uma.",
  openGraph: {
    title: "O Ensōu – Filozofija i pristup | Fizio Ensō",
    description: "Upoznajte filozofiju Fizio Ensō studija. Individualni pristup fizioterapiji i masažama u Zagrebu, fokusiran na ravnotežu tijela i uma.",
    type: "website",
    locale: "hr_HR",
  },
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl mb-12 text-center text-foreground">
            {siteContent.about.title}
          </h1>
        </div>
      </Section>

      {/* Philosophy */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl mb-6 text-foreground">
            {siteContent.about.philosophy.title}
          </h2>
          <p className="text-lg text-accent leading-relaxed mb-8">
            {siteContent.about.philosophy.text}
          </p>
        </div>
      </Section>

      {/* Therapist */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl mb-6 text-foreground">
            {siteContent.about.therapist.title}
          </h2>
          <p className="text-lg text-accent leading-relaxed">
            {siteContent.about.therapist.text}
          </p>
        </div>
      </Section>

      {/* Slogans */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {siteContent.about.slogans.map((slogan, index) => (
              <div
                key={index}
                className="text-center py-8 border-t border-b border-gray-200"
              >
                <p className="font-serif text-2xl md:text-3xl text-foreground italic">
                  {slogan}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Space features moved from Prostor & oprema */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl mb-8 text-foreground">
            Što nudi naš prostor
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {siteContent.space.features.map((feature, index) => (
              <div
                key={index}
                className="bg-background rounded-lg shadow-subtle p-6"
              >
                <p className="text-accent">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Gallery moved from Prostor & oprema */}
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
    </>
  );
}

