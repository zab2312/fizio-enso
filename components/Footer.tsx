import Link from "next/link";
import { siteContent } from "@/content/siteContent";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl mb-4">{siteContent.brand.name}</h3>
            <p className="text-sm text-background/80">{siteContent.brand.tagline}</p>
          </div>
          
          <div>
            <h4 className="font-serif mb-4">Navigacija</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/o-ensu" className="hover:text-background/80 transition-colors">
                  {siteContent.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/tretmani" className="hover:text-background/80 transition-colors">
                  {siteContent.nav.services}
                </Link>
              </li>
              <li>
                <Link href="/cjenik" className="hover:text-background/80 transition-colors">
                  {siteContent.nav.pricing}
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-background/80 transition-colors">
                  {siteContent.nav.contact}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-background/80 normal-case">
              <li>{siteContent.contact.address}</li>
              <li>
                <a href={`tel:${siteContent.contact.phone}`} className="hover:text-background transition-colors">
                  {siteContent.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteContent.contact.email}`} className="hover:text-background transition-colors">
                  {siteContent.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} {siteContent.brand.name}. Sva prava pridržana.</p>
        </div>
      </div>
    </footer>
  );
}

