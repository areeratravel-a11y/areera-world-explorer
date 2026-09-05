import { Skeleton } from "@/components/ui/skeleton";

export function ServicePageSkeleton() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 animate-pulse" aria-hidden="true">
      {/* Breadcrumb skeleton */}
      <div className="flex items-center gap-2">
        <Skeleton className="h-4 w-14" />
        <span className="text-muted-foreground/40">/</span>
        <Skeleton className="h-4 w-28" />
      </div>

      {/* Header skeleton */}
      <div className="mt-8 space-y-3">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-8 w-72 sm:w-96" />
        <Skeleton className="h-4 w-full max-w-2xl" />
      </div>

      {/* Above-the-fold banner skeleton */}
      <div className="mt-8 rounded-3xl border border-white/10 bg-card/60 p-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-2xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-40" />
            <Skeleton className="h-4 w-64" />
          </div>
        </div>
        <div className="flex gap-3">
          <Skeleton className="h-10 w-36 rounded-xl" />
          <Skeleton className="h-10 w-36 rounded-xl" />
        </div>
      </div>

      {/* Process / Features grid skeleton */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-card/40 p-6 space-y-3">
            <Skeleton className="h-8 w-8 rounded-xl" />
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        ))}
      </div>

      {/* Booking Form Skeleton */}
      <div className="mt-14 rounded-3xl border border-white/10 bg-card/60 p-6 sm:p-8 space-y-5">
        <Skeleton className="h-6 w-52" />
        <Skeleton className="h-4 w-80" />
        <div className="grid gap-4 sm:grid-cols-2">
          <Skeleton className="h-12 w-full rounded-xl" />
          <Skeleton className="h-12 w-full rounded-xl" />
          <Skeleton className="h-12 w-full rounded-xl" />
          <Skeleton className="h-12 w-full rounded-xl" />
        </div>
        <Skeleton className="h-11 w-44 rounded-xl" />
      </div>
    </div>
  );
}
