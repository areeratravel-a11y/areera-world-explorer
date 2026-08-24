import { Skeleton } from "@/components/ui/skeleton";

/** Placeholder grid shown while country routes/chunks are loading or retrying. */
export function CountriesSkeleton({ cards = 6 }: { cards?: number }) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6" aria-hidden="true">
      <Skeleton className="h-4 w-40" />
      <Skeleton className="mt-6 h-9 w-72" />
      <Skeleton className="mt-3 h-4 w-full max-w-xl" />
      <Skeleton className="mt-8 h-12 w-full rounded-xl" />
      <div className="mt-4 flex flex-wrap gap-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-9 w-24 rounded-full" />
        ))}
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: cards }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-border bg-card/60 p-5">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="mt-4 h-5 w-32" />
            <Skeleton className="mt-2 h-4 w-full" />
            <Skeleton className="mt-2 h-4 w-3/4" />
            <Skeleton className="mt-5 h-4 w-24" />
          </div>
        ))}
      </div>
    </div>
  );
}
