import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/site";

export function RelatedServices({ exclude }: { exclude: string }) {
  const others = services.filter((s) => s.slug !== exclude);
  return (
    <div className="mt-16 rounded-2xl border border-border bg-card/50 p-6 sm:p-8">
      <h2 className="text-xl font-semibold">You may also need</h2>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {others.map((s) => (
          <Link
            key={s.slug}
            to={s.path as never}
            className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-background/40 px-4 py-3 text-sm transition-colors hover:border-primary/60"
          >
            <span className="min-w-0">
              <span className="block font-medium">{s.title}</span>
              <span className="block truncate text-xs text-muted-foreground">{s.short}</span>
            </span>
            <ArrowRight
              className="h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
