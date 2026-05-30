import { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Politika privatnosti | Fizio Ensō",
  description: "Informacije o obradi osobnih podataka i pravima korisnika prema GDPR-u.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Section className="pt-28 md:pt-32 pb-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl mb-4 text-center text-foreground">Politika privatnosti</h1>
          <p className="text-accent text-center">Zadnje ažuriranje: 28. 5. 2026.</p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto space-y-8 text-accent leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">1. Voditelj obrade</h2>
            <p>
              Voditelj obrade osobnih podataka je <strong>ensō, obrt za njegu i održavanje tijela</strong>, OIB:{" "}
              <strong>16756791896</strong>, adresa: <strong>Zagreb, Ulica Ivana Rendića 29</strong>, kontakt email:{" "}
              <strong>ensofizio8@gmail.com</strong>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">2. Koje podatke prikupljamo</h2>
            <p>Putem obrasca za rezervaciju termina prikupljamo sljedeće podatke koje korisnik sam unosi:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>ime i prezime (ako ga korisnik navede),</li>
              <li>email adresa,</li>
              <li>broj telefona,</li>
              <li>sadržaj poruke/upita vezan uz rezervaciju termina.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">3. Svrha i pravna osnova obrade</h2>
            <p>
              Podaci se koriste isključivo za obradu rezervacija termina i komunikaciju vezanu uz vaš upit.
              Pravna osnova obrade je poduzimanje radnji na zahtjev ispitanika prije sklapanja ugovora te legitimni interes
              za organizaciju i potvrdu termina.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">4. Način kontaktiranja</h2>
            <p>
              Korisnika kontaktiramo putem podataka koje je naveo u obrascu (email i/ili telefon), isključivo radi dogovora
              i obrade rezervacije.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">5. Rok čuvanja podataka</h2>
            <p>
              Podaci se čuvaju onoliko dugo koliko je potrebno za obradu upita i realizaciju komunikacije povezane s
              rezervacijom, a najdulje 12 mjeseci od zadnje komunikacije, osim ako je dulje čuvanje potrebno radi
              ispunjavanja zakonskih obveza.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">6. Primatelji i treće strane</h2>
            <p>Za tehničku obradu podataka koristimo vanjske servise:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>Formspree</strong> - slanje podataka iz obrasca na administratorski email.
              </li>
              <li>
                <strong>Google Maps embed</strong> - prikaz lokacije na stranici Kontakt.
              </li>
            </ul>
            <p className="mt-2">
              Navedeni pružatelji usluga mogu obrađivati tehničke podatke potrebne za funkcioniranje usluge u skladu sa svojim
              pravilima privatnosti.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">7. Kolačići</h2>
            <p>
              Stranica koristi nužne kolačiće za osnovni rad te opcionalne analitičke i marketinške kolačiće isključivo uz
              vaš pristanak. Više informacija dostupno je u{" "}
              <Link href="/cookie-policy" className="underline hover:text-foreground">
                Politici kolačića
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">8. Prava korisnika (GDPR)</h2>
            <p>Imate pravo zatražiti:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>pristup svojim osobnim podacima,</li>
              <li>ispravak netočnih podataka,</li>
              <li>brisanje podataka,</li>
              <li>ograničenje obrade,</li>
              <li>prigovor na obradu,</li>
              <li>prenosivost podataka kada je primjenjivo.</li>
            </ul>
            <p className="mt-2">
              Također imate pravo podnijeti pritužbu nadležnom nadzornom tijelu (Agencija za zaštitu osobnih podataka - AZOP).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-2xl text-foreground mb-3">9. Kontakt za privatnost</h2>
            <p>
              Za sve zahtjeve vezane uz privatnost i obradu osobnih podataka obratite nam se na:{" "}
              <strong>ensofizio8@gmail.com</strong>.
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
