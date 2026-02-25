import { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { siteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Tretmani – Masaže i fizioterapija u Zagrebu | Fizio Ensō",
  description: "Ponuda masaža i terapijskih tretmana u Zagrebu: relaks, seitai, revital masaža, limfna drenaža, Tecar i aparaturni postupci za oporavak i smanjenje boli.",
  openGraph: {
    title: "Tretmani – Masaže i fizioterapija u Zagrebu | Fizio Ensō",
    description: "Ponuda masaža i terapijskih tretmana u Zagrebu: relaks, seitai, revital masaža, limfna drenaža, Tecar i aparaturni postupci za oporavak i smanjenje boli.",
    type: "website",
    locale: "hr_HR",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Section className="pt-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">
            Naši tretmani
          </h1>
          <p className="text-lg text-accent">
            Svaki tretman u Ensōu temelji se na holističkom pristupu tijelu, kombinirajući stručnost i intuitivni rad.
          </p>
        </div>
      </Section>

      {/* Manual Therapies */}
      <Section>
        <h2 className="font-serif text-3xl md:text-4xl mb-12 text-foreground">
          {siteContent.services.manual.title}
        </h2>
        <div className="space-y-16">
          {siteContent.services.manual.items.map((service) => (
            <div key={service.id} id={service.id} className="scroll-mt-24">
              <div className="bg-white rounded-lg shadow-subtle p-8">
                <h3 className="font-serif text-2xl mb-4 text-foreground">
                  {service.name}
                </h3>
                <p className="text-accent mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Kome je namijenjeno:</h4>
                    <p className="text-sm text-accent">{service.for}</p>
                  </div>
                  {service.duration && (
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Trajanje:</h4>
                      <p className="text-sm text-accent">{service.duration}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Apparatus Procedures */}
      <Section className="bg-white">
        <h2 className="font-serif text-3xl md:text-4xl mb-12 text-foreground">
          {siteContent.services.apparatus.title}
        </h2>
        <div className="space-y-16">
          {siteContent.services.apparatus.items.map((service) => (
            <div key={service.id} id={service.id} className="scroll-mt-24">
              <div className="bg-background rounded-lg shadow-subtle p-8">
                <h3 className="font-serif text-2xl mb-4 text-foreground">
                  {service.name}
                </h3>
                <p className="text-accent mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Kome je namijenjeno:</h4>
                    <p className="text-sm text-accent">{service.for}</p>
                  </div>
                  {service.duration && (
                    <div>
                      <h4 className="font-medium text-foreground mb-2">Trajanje:</h4>
                      <p className="text-sm text-accent">{service.duration}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/cjenik" variant="primary">
              Pogledaj cjenik
            </Button>
            <Button href="/kontakt" variant="secondary">
              Kontakt
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

