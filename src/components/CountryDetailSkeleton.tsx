import { Skeleton } from "@/components/ui/skeleton";

export function CountryDetailSkeleton() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 animate-pulse" aria-hidden="true">
      {/* Breadcrumb skeleton */}
      <div className="flex items-center gap-2">
        <Skeleton className="h-4 w-14" />
        <span className="text-muted-foreground/40">/</span>
        <Skeleton className="h-4 w-20" />
        <span className="text-muted-foreground/40">/</span>
        <Skeleton className="h-4 w-28" />
      </div>

      {/* Hero section skeleton */}
      <div className="mt-8 rounded-3xl border border-white/10 bg-card/60 p-6 sm:p-10 backdrop-blur-md">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <Skeleton className="h-16 w-24 rounded-xl" />
          <div className="space-y-3 flex-1">
            <Skeleton className="h-8 w-64 rounded-lg" />
            <div className="flex gap-4">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-4 w-36" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
        </div>
        <Skeleton className="mt-6 h-12 w-full max-w-3xl" />
      </div>

      {/* Highlights & Quick Stats */}
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-card/40 p-4">
            <Skeleton className="h-7 w-7 rounded-lg" />
            <Skeleton className="mt-3 h-4 w-20" />
            <Skeleton className="mt-1 h-5 w-32" />
          </div>
        ))}
      </div>

      {/* Visa Categories Cards Skeleton */}
      <div className="mt-14 space-y-4">
        <Skeleton className="h-7 w-48" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-card/50 p-6 space-y-4">
              <Skeleton className="h-6 w-40" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
              <div className="pt-4 border-t border-white/10 flex justify-between">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-16" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Document Checklist Skeleton */}
      <div className="mt-14 rounded-3xl border border-white/10 bg-card/40 p-6 sm:p-8 space-y-4">
        <Skeleton className="h-7 w-56" />
        <div className="grid gap-3 sm:grid-cols-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex items-center gap-3 rounded-xl border border-white/5 bg-background/50 p-3">
              <Skeleton className="h-5 w-5 rounded-full shrink-0" />
              <Skeleton className="h-4 w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
