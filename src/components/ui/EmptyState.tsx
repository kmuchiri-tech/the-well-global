import { Inbox } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description?: string;
}

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-silver bg-soft-gray/50 px-6 py-16 text-center">
      <Inbox className="mb-4 h-12 w-12 text-well-blue/50" aria-hidden="true" />
      <h3 className="font-serif text-xl font-semibold text-deep-navy">{title}</h3>
      {description && (
        <p className="mt-2 max-w-md text-deep-navy/70">{description}</p>
      )}
    </div>
  );
}
