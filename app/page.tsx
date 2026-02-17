import { Metadata } from "next";
import HeroVideo from "@/components/HeroVideo";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import Button from "@/components/Button";
import { siteContent } from "@/content/siteContent";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fizio Enso – Fizioterapija i masaže u Zagrebu",
  description: "Holistički tretmani, masaže i terapije za ravnotežu tijela i uma u mirnom studiju u Maksimiru. Rezervirajte svoj termin u Fizio Enso.",
  openGraph: {
    title: "Fizio Enso – Fizioterapija i masaže u Zagrebu",
    description: "Holistički tretmani, masaže i terapije za ravnotežu tijela i uma u mirnom studiju u Maksimiru. Rezervirajte svoj termin u Fizio Enso.",
    type: "website",
    locale: "hr_HR",
  },
};

export default function Home() {
  const manualServices = siteContent.services.manual.items.slice(0, 7);

  return (
    <>
      <HeroVideo />
      
      {/* Intro Section */}
      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">
            {siteContent.home.intro.title}
          </h1>
          <p className="text-lg text-accent mb-8 leading-relaxed">
            {siteContent.home.intro.description}
          </p>
          <Link
            href="/o-ensu"
            className="inline-block px-8 py-3 bg-foreground text-background rounded-lg font-medium shadow-subtle hover:shadow-card transition-all duration-300 hover:bg-accent"
          >
            {siteContent.home.intro.cta}
          </Link>
        </div>
      </Section>

      {/* Services Preview */}
      <Section className="bg-white">
        <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center text-foreground">
          Naši tretmani
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {manualServices.map((service) => (
            <ServiceCard
              key={service.id}
              name={service.name}
              description={service.description}
              href={`/tretmani#${service.id}`}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/tretmani"
            className="text-sm font-medium text-foreground hover:text-accent transition-colors inline-flex items-center"
          >
            Pogledaj sve tretmane
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </Section>

      {/* Space Preview */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-center text-foreground">
            Prostor
          </h2>
          <p className="text-lg text-accent mb-8 text-center leading-relaxed">
            {siteContent.space.description}
          </p>
          <div className="text-center">
            <Link
              href="/prostor-oprema"
              className="inline-block px-8 py-3 bg-white text-foreground border-2 border-foreground rounded-lg font-medium shadow-subtle hover:shadow-card transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              Saznaj više o prostoru
            </Link>
          </div>
        </div>
      </Section>

      {/* Reviews */}
      <Section className="bg-white">
        <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center text-foreground">
          Što kažu naši klijenti
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteContent.testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              text={testimonial.text}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <div className="max-w-4xl mx-auto text-center bg-white rounded-lg shadow-card p-12">
          <h2 className="font-serif text-3xl md:text-4xl mb-8 text-foreground">
            {siteContent.home.finalCta.title}
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/kontakt"
              variant="primary"
            >
              {siteContent.home.finalCta.buttons.book}
            </Button>
            <Button
              href="/cjenik"
              variant="secondary"
            >
              {siteContent.home.finalCta.buttons.pricing}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

