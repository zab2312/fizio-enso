interface PricingItem {
  name: string;
  serviceId?: string;
  durations: Array<{ duration: string; price: string }>;
  description?: string;
  note?: string;
}

interface PricingTableProps {
  title: string;
  items: PricingItem[];
}

export default function PricingTable({ title, items }: PricingTableProps) {
  return (
    <div className="mb-12">
      <h2 className="font-serif text-3xl mb-8 text-foreground">{title}</h2>
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-subtle p-6">
            <div className="flex items-start justify-between mb-2">
              <h3 className="font-serif text-xl text-foreground">{item.name}</h3>
              {item.serviceId && (
                <a
                  href={`/tretmani#${item.serviceId}`}
                  className="text-sm text-foreground hover:text-accent transition-colors inline-flex items-center ml-4"
                >
                  Detalji
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              )}
            </div>
            {item.description && (
              <p className="text-sm text-accent mb-4">{item.description}</p>
            )}
            <div className="space-y-2">
              {item.durations.map((dur, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                  <span className="text-sm text-accent">{dur.duration}</span>
                  <span className="font-medium text-foreground">{dur.price}</span>
                </div>
              ))}
            </div>
            {item.note && (
              <p className="text-xs text-accent mt-4 italic">{item.note}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

