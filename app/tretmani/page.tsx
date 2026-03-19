import { Metadata } from "next";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { siteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Tretmani | Masaže i fizioterapija u Zagrebu | Fizio Ensō",
  description: "Ponuda masaža i terapijskih tretmana u Zagrebu: relaks, seitai, revital masaža, limfna drenaža, Tecar i aparaturni postupci za oporavak i smanjenje boli.",
  openGraph: {
    title: "Tretmani | Masaže i fizioterapija u Zagrebu | Fizio Ensō",
    description: "Ponuda masaža i terapijskih tretmana u Zagrebu: relaks, seitai, revital masaža, limfna drenaža, Tecar i aparaturni postupci za oporavak i smanjenje boli.",
    type: "website",
    locale: "hr_HR",
  },
};

function ServiceBlock({
  id,
  name,
  description,
  duration,
  for: forWho,
}: {
  id: string;
  name: string;
  description: string;
  duration?: string;
  for: string;
}) {
  return (
    <div id={id} className="scroll-mt-24">
      <div className="bg-white rounded-2xl shadow-subtle p-8">
        <h3 className="font-serif text-2xl mb-4 text-foreground">{name}</h3>
        <p className="text-accent mb-6 leading-relaxed">{description}</p>
        {duration && (
          <div>
            <h4 className="font-medium text-foreground mb-2">Trajanje:</h4>
            <p className="text-sm text-accent">{duration}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function TransitionBlock({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="max-w-4xl mx-auto py-10 md:py-14">
      <div className="space-y-6 text-accent leading-relaxed text-base md:text-lg">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const { services } = siteContent;
  const manual = services.manual.items;
  const apparatus = services.apparatus.items;

  const getManual = (id: string) => manual.find((s) => s.id === id)!;
  const getApparatus = (id: string) => apparatus.find((s) => s.id === id)!;

  return (
    <>
      {/* USLUGE – naslov */}
      <Section className="pt-28 md:pt-32 pb-4 md:pb-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-foreground">
            {services.pageTitle}
          </h1>
        </div>
      </Section>

      {/* Uvod: što je masaža – odvojeno od naslova */}
      <Section className="pt-6 pb-4 md:pt-8 md:pb-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-accent leading-relaxed text-base md:text-lg">
            {services.masazaIntro}
          </p>
        </div>
      </Section>

      {/* Masaže: relaks, seitai, revital masaža */}
      <Section>
        <div className="space-y-16">
          <ServiceBlock {...getManual("relaks")} />
          <ServiceBlock {...getManual("seitai")} />
          <ServiceBlock {...getManual("revital-masaza")} />

          <TransitionBlock paragraphs={services.transitionAfterRevitalMasaza} />

          <ServiceBlock {...getManual("revital-tretman")} />

          <TransitionBlock paragraphs={services.transitionAfterRevitalTretman} />

          <ServiceBlock {...getManual("taiso")} />
          <ServiceBlock {...getManual("limfna")} />
          <ServiceBlock {...getManual("rinpa")} />
        </div>
      </Section>

      {/* Prijelaz pred aparaturne postupke */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto py-10 md:py-14">
          <p className="text-accent leading-relaxed text-base md:text-lg">{services.transitionBeforeApparatus}</p>
        </div>
      </Section>

      {/* Aparaturni postupci */}
      <Section>
        <h2 className="font-serif text-3xl md:text-4xl mb-12 text-foreground italic">
          {services.apparatus.title}
        </h2>
        <div className="space-y-16">
          <ServiceBlock {...getApparatus("tecar")} />
          <ServiceBlock {...getApparatus("misicna-stimulacija")} />
          <ServiceBlock {...getApparatus("ultrazvuk")} />
          <ServiceBlock {...getApparatus("laser")} />
          <ServiceBlock {...getApparatus("biomagnetna")} />
        </div>
      </Section>

      {/* VacuTherm program */}
      <Section>
        <h2 className="font-serif text-3xl md:text-4xl mb-6 text-foreground italic">
          {services.vacutherm.title}
        </h2>
        <p className="text-accent leading-relaxed mb-12 text-base md:text-lg">{services.vacutherm.intro}</p>
        <div className="space-y-16">
          {services.vacutherm.items.map((item) => (
            <ServiceBlock
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              duration={item.duration || undefined}
              for={item.for}
            />
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
