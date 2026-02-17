import { Metadata } from "next";
import Section from "@/components/Section";
import PricingTable from "@/components/PricingTable";
import Button from "@/components/Button";
import { siteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Cjenik – Cijene masaža i terapija u Zagrebu | Fizio Enso",
  description: "Pregled cijena masaža, tretmana i aparaturnih postupaka u Fizio Enso studiju u Zagrebu. Transparentan cjenik za sve usluge fizioterapije.",
  openGraph: {
    title: "Cjenik – Cijene masaža i terapija u Zagrebu | Fizio Enso",
    description: "Pregled cijena masaža, tretmana i aparaturnih postupaka u Fizio Enso studiju u Zagrebu. Transparentan cjenik za sve usluge fizioterapije.",
    type: "website",
    locale: "hr_HR",
  },
};

export default function PricingPage() {
  return (
    <>
      <Section className="pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl mb-12 text-center text-foreground">
            Cjenik
          </h1>
        </div>
      </Section>

      {/* Massages */}
      <Section>
        <PricingTable
          title={siteContent.pricing.massages.title}
          items={siteContent.pricing.massages.items}
        />
      </Section>

      {/* Treatments */}
      <Section className="bg-white">
        <PricingTable
          title={siteContent.pricing.treatments.title}
          items={siteContent.pricing.treatments.items}
        />
      </Section>

      {/* Apparatus */}
      <Section>
        <PricingTable
          title={siteContent.pricing.apparatus.title}
          items={siteContent.pricing.apparatus.items}
        />
      </Section>

      {/* Fire Body */}
      <Section className="bg-white">
        <PricingTable
          title={siteContent.pricing.fireBody.title}
          items={siteContent.pricing.fireBody.items}
        />
      </Section>

      {/* Notes */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl mb-6 text-foreground">
            Važne napomene
          </h2>
          <div className="bg-white rounded-lg shadow-subtle p-8">
            <ul className="space-y-4">
              {siteContent.pricing.notes.map((note, index) => (
                <li key={index} className="text-sm text-accent flex items-start">
                  <span className="mr-2">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <Button href="/kontakt" variant="primary">
            Rezerviraj termin
          </Button>
        </div>
      </Section>
    </>
  );
}

