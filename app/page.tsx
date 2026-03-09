import { Metadata } from "next";
import Image from "next/image";
import HeroVideo from "@/components/HeroVideo";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import Button from "@/components/Button";
import FAQSection from "@/components/FAQSection";
import { siteContent } from "@/content/siteContent";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fizio Ensō | Fizioterapija i masaže u Zagrebu",
  description: "Holistički tretmani, masaže i terapije za ravnotežu tijela i uma u mirnom studiju u Maksimiru. Rezervirajte svoj termin u Fizio Ensō.",
  openGraph: {
    title: "Fizio Ensō | Fizioterapija i masaže u Zagrebu",
    description: "Holistički tretmani, masaže i terapije za ravnotežu tijela i uma u mirnom studiju u Maksimiru. Rezervirajte svoj termin u Fizio Ensō.",
    type: "website",
    locale: "hr_HR",
  },
};

export default function Home() {
  const manualServices = siteContent.services.manual.items.slice(0, 7);

  return (
    <>
      <HeroVideo />
      
      {/* Što Ensō nudi */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-5 text-foreground text-center">
              {siteContent.home.whatEnsoOffers.title}
            </h2>
            <p className="text-lg text-accent mb-6 leading-relaxed">
              {siteContent.home.whatEnsoOffers.intro}
            </p>
            <ul className="space-y-3 text-accent leading-relaxed list-none mb-8">
              {siteContent.home.whatEnsoOffers.items.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-foreground shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-foreground" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/o-ensu"
              className="inline-flex items-center gap-2 px-8 py-3 bg-foreground text-background rounded-lg font-medium shadow-subtle hover:shadow-card transition-all duration-300 hover:bg-accent"
            >
              {siteContent.home.intro.cta}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-card bg-gray-100">
            <Image
              src="/images/sto-enso-nudi.jpg"
              alt="Prostor i atmosfera Fizio Ensō studija"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* Services Preview */}
      <Section>
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
        <div className="max-w-4xl mx-auto mb-8">
          <h2 className="font-serif text-3xl md:text-4xl mb-6 text-center text-foreground">
            Prostor
          </h2>
          <p className="text-lg text-accent mb-6 text-center leading-relaxed">
            {siteContent.space.description}
          </p>
        </div>
        {/* Slike prostora u jednom redu, s praznim prostorom s bokova */}
        <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen px-4 md:px-8 lg:px-12">
          <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4">
            {([1, 2, 3, 4] as const).map((num) => (
              <div
                key={num}
                className="min-w-0 relative aspect-[4/3] bg-gray-200 overflow-hidden rounded-lg shadow-card hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={`/images/prostor-${num}.jpg`}
                  alt={`Prostor Fizio Ensō, fotografija ${num}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto text-center mt-8">
          <Link
            href="/o-ensu#galerija"
            className="inline-block px-8 py-3 bg-white text-foreground border-2 border-foreground rounded-lg font-medium shadow-subtle hover:shadow-card transition-all duration-300 hover:bg-foreground hover:text-background"
          >
            Saznaj više o prostoru
          </Link>
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

      {/* Ovo je Petra */}
      <Section className="bg-white">
        <h2 className="font-serif text-3xl md:text-4xl mb-10 text-center text-foreground">
          {siteContent.about.meetSectionTitle}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-5xl mx-auto">
          <div className="relative">
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 rounded-lg overflow-hidden bg-gray-200 shadow-card">
              <Image
                src="/images/terapeutkinja-petra.jpg"
                alt={`${siteContent.about.therapist.nameFull}, ${siteContent.about.therapist.role}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 384px"
              />
            </div>
            <div className="relative -mt-12 mx-4 lg:mx-0 lg:ml-6 bg-white rounded-lg shadow-card p-5 border border-gray-100">
              <p className="font-medium text-foreground">{siteContent.about.therapist.nameFull}</p>
              <p className="text-xs text-accent uppercase tracking-wider mt-1">{siteContent.about.therapist.role}</p>
            </div>
          </div>
          <div className="relative pl-8 lg:pl-10 lg:py-8">
            <span className="absolute left-0 top-0 text-6xl lg:text-7xl font-serif text-accent/30 leading-none select-none" aria-hidden>"</span>
            <p className="text-lg text-accent leading-relaxed mb-6">
              {siteContent.about.therapist.quote}
            </p>
            <p className="font-serif text-xl text-foreground italic mb-8">{siteContent.about.therapist.signature}</p>
            <Link
              href="/o-ensu#terapeutkinja"
              className="inline-flex items-center gap-2 px-8 py-3 bg-foreground text-background rounded-lg font-medium shadow-subtle hover:shadow-card transition-all duration-300 hover:bg-accent"
            >
              Saznajte više
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
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

      {/* FAQ */}
      <FAQSection />
    </>
  );
}

