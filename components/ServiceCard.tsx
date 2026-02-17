import Link from "next/link";

interface ServiceCardProps {
  name: string;
  description: string;
  href?: string;
}

export default function ServiceCard({ name, description, href = "#" }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-subtle p-6 hover:shadow-card transition-shadow duration-300">
      <h3 className="font-serif text-xl mb-3 text-foreground">{name}</h3>
      <p className="text-sm text-accent mb-4 line-clamp-2">{description}</p>
      <Link
        href={href}
        className="text-sm font-medium text-foreground hover:text-accent transition-colors inline-flex items-center"
      >
        Detalji
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}

