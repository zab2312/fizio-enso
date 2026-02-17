"use client";

import { useState } from "react";
import Section from "@/components/Section";
import Button from "@/components/Button";
import { siteContent } from "@/content/siteContent";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Client-side validation
    if (!formData.name || (!formData.email && !formData.phone) || !formData.message) {
      alert("Molimo popunite sva obavezna polja.");
      return;
    }
    
    // Show success message
    setShowSuccess(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    
    // Hide success message after 5 seconds
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <>
      <Section className="pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl mb-12 text-center text-foreground">
            {siteContent.contact.title}
          </h1>
        </div>
      </Section>

      {/* Contact Info */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-serif text-2xl mb-6 text-foreground">
                Kontakt informacije
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-foreground mb-2">Adresa</h3>
                  <p className="text-accent">{siteContent.contact.address}</p>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Telefon</h3>
                  <a
                    href={`tel:${siteContent.contact.phone}`}
                    className="text-accent hover:text-foreground transition-colors"
                  >
                    {siteContent.contact.phone}
                  </a>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Email</h3>
                  <a
                    href={`mailto:${siteContent.contact.email}`}
                    className="text-accent hover:text-foreground transition-colors"
                  >
                    {siteContent.contact.email}
                  </a>
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-2">Radno vrijeme</h3>
                  <p className="text-accent">{siteContent.contact.hours}</p>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  href={`tel:${siteContent.contact.phone}`}
                  variant="primary"
                >
                  Pozovi
                </Button>
                <Button
                  href={`mailto:${siteContent.contact.email}`}
                  variant="secondary"
                >
                  Pošalji email
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl mb-6 text-foreground">
                Pošaljite poruku
              </h2>
              {showSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                  Hvala vam! Vaša poruka je poslana. Kontaktirat ćemo vas uskoro.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Ime *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Poruka *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-foreground focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-foreground text-background rounded-lg font-medium shadow-subtle hover:shadow-card transition-all duration-300 hover:bg-accent"
                >
                  Pošalji poruku
                </button>
              </form>
            </div>
          </div>
        </div>
      </Section>

      {/* Map */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl mb-6 text-foreground">
            Kako do nas
          </h2>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-subtle">
            <iframe
              src={siteContent.contact.mapPlaceholder}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
          </div>
          <p className="text-xs text-accent mt-4 italic">
            * Zamijenite mapPlaceholder URL u content/siteContent.ts s pravom Google Maps embed URL adresom
          </p>
        </div>
      </Section>
    </>
  );
}

