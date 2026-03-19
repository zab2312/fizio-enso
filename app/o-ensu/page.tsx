import { Metadata } from "next";
import Image from "next/image";
import Section from "@/components/Section";
import { siteContent } from "@/content/siteContent";
import Link from "next/link";

export const metadata: Metadata = {
  title: "dobrodošli u ensō | Filozofija i pristup | Fizio Ensō",
  description: "Upoznajte filozofiju Fizio Ensō studija. Individualni pristup fizioterapiji i masažama u Zagrebu, fokusiran na ravnotežu tijela i uma.",
  openGraph: {
    title: "dobrodošli u ensō | Filozofija i pristup | Fizio Ensō",
    description: "Upoznajte filozofiju Fizio Ensō studija. Individualni pristup fizioterapiji i masažama u Zagrebu, fokusiran na ravnotežu tijela i uma.",
    type: "website",
    locale: "hr_HR",
  },
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-28 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-5xl mb-12 md:mb-16 text-center text-foreground">
            {siteContent.about.title}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 xl:gap-24 items-center">
            <div className="space-y-6 max-w-xl">
              {siteContent.about.philosophy.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className={`text-lg md:text-xl text-accent leading-loose text-left ${i === siteContent.about.philosophy.paragraphs.length - 1 ? "italic" : ""}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mx-auto lg:mx-0 lg:ml-12 shrink-0 flex items-center justify-center">
              <div
                className="relative flex items-center justify-center rounded-full bg-background w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 shadow-[0_0_50px_rgba(0,0,0,0.12),0_0_100px_rgba(0,0,0,0.08)]"
                aria-hidden
              >
                <div className="relative w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72">
                  <Image
                    src="/info/logo.png"
                    alt="Fizio Ensō logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 208px, (max-width: 1024px) 240px, 288px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Ovo je Petra – umjesto sekcije O terapeutkinji */}
      <Section id="terapeutkinja" className="scroll-mt-24 bg-white normal-case">
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
              href="/kontakt"
              className="inline-flex items-center gap-2 px-8 py-3 bg-foreground text-background rounded-lg font-medium shadow-subtle hover:shadow-card transition-all duration-300 hover:bg-accent"
            >
              Rezervirajte termin
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </Section>

      {/* Gallery – Naš prostor odlikuje */}
      <Section id="galerija" className="scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-2 text-center text-foreground">
            Prostor u slici
          </h2>
          <p className="text-accent text-center mb-10">Posvećenost detaljima</p>
          <div
            className="grid grid-cols-3 gap-3 md:gap-4"
            style={{ gridTemplateRows: "auto 1fr 1fr auto" }}
          >
            {/* Red 1: dva kvadrata lijevo, slika 6 desno (vrh 6 = vrh 1 i 2) */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200 shadow-subtle">
              <Image src="/images/galerija/galerija-1.jpg" alt="Prostor Fizio Ensō" fill className="object-cover" sizes="33vw" />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200 shadow-subtle">
              <Image src="/images/galerija/galerija-2.jpg" alt="Prostor Fizio Ensō" fill className="object-cover" sizes="33vw" />
            </div>
            {/* Slika 6: od vrha, završava na pola visine slike 3 (samo red 1 + red 2) */}
            <div className="col-start-3 row-start-1 row-span-2 relative min-h-0 rounded-lg overflow-hidden bg-gray-200 shadow-subtle">
              <Image src="/images/galerija/galerija-6.jpg" alt="Prostor Fizio Ensō" fill className="object-cover" sizes="33vw" />
            </div>
            {/* Red 2–3: vodoravna 16:9 (3) – dva reda po pola visine */}
            <div className="col-span-2 row-span-2 col-start-1 row-start-2 relative aspect-video w-full min-h-0 rounded-lg overflow-hidden bg-gray-200 shadow-subtle">
              <Image src="/images/galerija/galerija-3.jpg" alt="Prostor Fizio Ensō" fill className="object-cover" sizes="66vw" />
            </div>
            {/* Slika 7: ispod 6, do dna uz 4 i 5 */}
            <div className="col-start-3 row-start-3 row-span-2 relative min-h-0 rounded-lg overflow-hidden bg-gray-200 shadow-subtle">
              <Image src="/images/galerija/galerija-7.jpg" alt="Prostor Fizio Ensō" fill className="object-cover" sizes="33vw" />
            </div>
            {/* Red 4: drugi par kvadrata */}
            <div className="col-start-1 row-start-4 relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200 shadow-subtle">
              <Image src="/images/galerija/galerija-4.jpg" alt="Prostor Fizio Ensō" fill className="object-cover" sizes="33vw" />
            </div>
            <div className="col-start-2 row-start-4 relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200 shadow-subtle">
              <Image src="/images/galerija/galerija-5.jpg" alt="Prostor Fizio Ensō" fill className="object-cover" sizes="33vw" />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

