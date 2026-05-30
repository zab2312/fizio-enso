import { Metadata } from "next";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Politika kolačića | Fizio Ensō",
  description: "Informacije o vrstama kolačića i upravljanju postavkama kolačića.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <Section className="pt-28 md:pt-32 pb-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl mb-4 text-center text-foreground">Politika kolačića</h1>
          <p className="text-accent text-center">Zadnje ažuriranje: 28. 5. 2026.</p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto space-y-8 text-accent leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">1. Što su kolačići</h2>
            <p>
              Kolačići su male tekstualne datoteke koje se pohranjuju na vaš uređaj tijekom posjeta web stranici. Koriste se
              za osnovni rad stranice, poboljšanje korisničkog iskustva i analizu korištenja.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">2. Nužni kolačići</h2>
            <p>
              Nužni kolačići potrebni su za osnovno funkcioniranje web stranice i ne mogu se isključiti. Uključuju, primjerice,
              spremanje vaših postavki pristanka na kolačiće.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">3. Analitički kolačići</h2>
            <p>
              Analitički kolačići koriste se za razumijevanje načina korištenja stranice i poboljšanje sadržaja. Trenutno se
              analitički kolačići postavljaju samo ako korisnik da privolu.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">4. Marketinški kolačići</h2>
            <p>
              Marketinški kolačići služe za prikaz personaliziranog sadržaja i oglasa na drugim platformama. Trenutno se
              marketinški kolačići postavljaju samo ako korisnik da privolu.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">5. Upravljanje postavkama kolačića</h2>
            <p>
              Svoje postavke možete promijeniti u bilo kojem trenutku putem opcije <strong>Postavke kolačića</strong> u footeru
              stranice. Također možete obrisati ili blokirati kolačiće kroz postavke svojeg internetskog preglednika.
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
