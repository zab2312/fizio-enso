"use client";

import { useState } from "react";
import { siteContent } from "@/content/siteContent";

const PHONE_DISPLAY = "095 722 9922";
const PHONE_TEL = "+385957229922";

function answerWithPhoneLink(text: string) {
  const parts = text.split(PHONE_DISPLAY);
  if (parts.length === 1) return text;
  return parts.map((part, i) => (
    <span key={i}>
      {part}
      {i < parts.length - 1 && (
        <a
          href={`tel:${PHONE_TEL}`}
          className="text-foreground font-medium underline hover:no-underline"
        >
          {PHONE_DISPLAY}
        </a>
      )}
    </span>
  ));
}

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-subtle border border-gray-100 overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-gray-50/50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-foreground flex-1">{question}</span>
        <span
          className="shrink-0 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center"
          aria-hidden
        >
          {isOpen ? (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16M4 12h16" />
            </svg>
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="px-5 pb-5 pt-0 text-accent text-sm leading-relaxed">
          {answerWithPhoneLink(answer)}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const faq = siteContent.faq;
  const mid = Math.ceil(faq.length / 2);
  const leftColumn = faq.slice(0, mid);
  const rightColumn = faq.slice(mid);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-sm font-medium text-accent uppercase tracking-wider mb-2">
          FAQ
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-12">
          Često postavljana pitanja
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            {leftColumn.map((item, i) => (
              <FaqItem key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
          <div className="space-y-4">
            {rightColumn.map((item, i) => (
              <FaqItem key={i} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
