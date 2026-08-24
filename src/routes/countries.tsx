import { Outlet, createFileRoute } from "@tanstack/react-router";
import { ChunkErrorFallback } from "@/components/ChunkErrorFallback";
import { CountriesSkeleton } from "@/components/CountriesSkeleton";

export const Route = createFileRoute("/countries")({
  component: CountriesLayout,
  errorComponent: CountriesError,
  pendingComponent: CountriesPending,
  pendingMs: 200,
});

function CountriesLayout() {
  // Required: nested country routes render here.
  return <Outlet />;
}

function CountriesPending() {
  return <CountriesSkeleton />;
}

function CountriesError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <ChunkErrorFallback
      error={error}
      reset={reset}
      title="We couldn't load destinations"
      retrySkeleton={<CountriesSkeleton />}
    />
  );
}
