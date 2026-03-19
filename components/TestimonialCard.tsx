interface TestimonialCardProps {
  name: string;
  occupation: string;
  treatment: string;
  visits: string;
  review: string;
  rating: number;
}

export default function TestimonialCard({
  name,
  occupation,
  treatment,
  visits,
  review,
  rating,
}: TestimonialCardProps) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase())
    .slice(0, 2)
    .join("");

  return (
    <div className="bg-white rounded-lg shadow-subtle p-6 flex flex-col h-full">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/10 text-sm font-semibold text-foreground">
          {initials}
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-foreground">{name}</p>
          </div>
          <p className="text-xs text-accent mt-0.5">{occupation}</p>
        </div>
      </div>
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center">
          {[...Array(rating)].map((_, i) => (
            <svg
              key={i}
              className="w-4 h-4 text-yellow-400 fill-current"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <span className="text-xs text-accent">5.0</span>
      </div>
      <div className="flex flex-wrap gap-2 mb-4 text-xs">
        <span className="inline-flex items-center rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-[11px] text-foreground">
          {treatment}
        </span>
        <span className="inline-flex items-center rounded-full border border-foreground/10 bg-white px-3 py-1 text-[11px] text-accent">
          {visits}
        </span>
      </div>
      <p className="text-sm text-accent leading-relaxed flex-1">
        {review}
      </p>
    </div>
  );
}

