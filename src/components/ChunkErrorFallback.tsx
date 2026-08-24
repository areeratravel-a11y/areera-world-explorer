import { useEffect, useRef, useState } from "react";
import { useRouter } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Loader2, RefreshCw, WifiOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CHUNK_RETRY_LIMIT, retryWithBackoff } from "@/lib/chunk-retry";

export function isChunkLoadError(error: unknown) {
  const message = String((error as Error | undefined)?.message ?? "");
  return (
    message.includes("Failed to fetch dynamically imported module") ||
    message.includes("error loading dynamically imported module") ||
    message.includes("Importing a module script failed")
  );
}

/**
 * Friendly fallback for route load failures (most often a stale lazy chunk
 * after a new deploy). Auto-retries with exponential backoff first, and only
 * shows the error UI once every attempt has failed.
 */
export function ChunkErrorFallback({
  error,
  reset,
  title = "We couldn't load this page",
  retrySkeleton,
}: {
  error: Error;
  reset?: () => void;
  title?: string;
  /** Optional skeleton rendered while backoff retries are in progress. */
  retrySkeleton?: ReactNode;
}) {
  const router = useRouter();
  const [retrying, setRetrying] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [autoRetrying, setAutoRetrying] = useState(isChunkLoadError(error));
  const startedRef = useRef(false);
  const chunkError = isChunkLoadError(error);

  useEffect(() => {
    console.error(error);
  }, [error]);

  // Exponential backoff before surfacing the fallback UI.
  useEffect(() => {
    if (!chunkError || startedRef.current) return;
    startedRef.current = true;
    let cancelled = false;

    void retryWithBackoff(
      async () => {
        if (cancelled) return;
        await router.invalidate();
        reset?.();
      },
      { onAttempt: (n) => !cancelled && setAttempt(n) },
    ).then(() => {
      if (!cancelled) setAutoRetrying(false);
    });

    return () => {
      cancelled = true;
    };
  }, [chunkError, reset, router]);

  const retry = async () => {
    setRetrying(true);
    try {
      await router.invalidate();
      reset?.();
    } finally {
      setRetrying(false);
    }
  };

  if (autoRetrying) {
    return (
      <div>
        <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 pt-8 sm:px-6">
          <Loader2 className="h-4 w-4 animate-spin text-primary" aria-hidden="true" />
          <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
            Reconnecting… retrying this section (attempt {Math.max(attempt, 1)} of{" "}
            {CHUNK_RETRY_LIMIT}).
          </p>
        </div>
        {retrySkeleton ?? <div className="min-h-[40vh]" />}
      </div>
    );
  }

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-4 text-center">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-border/60 bg-muted/40 text-muted-foreground">
        <WifiOff className="h-6 w-6" aria-hidden="true" />
      </div>
      <h1 className="font-heading text-2xl font-bold text-foreground">{title}</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        {chunkError
          ? "Part of the site was updated while you were browsing, so this section didn't finish loading. Reloading usually fixes it."
          : "Something went wrong loading this section. Please try again."}
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <Button onClick={retry} disabled={retrying}>
          <RefreshCw
            className={`mr-2 h-4 w-4 ${retrying ? "animate-spin" : ""}`}
            aria-hidden="true"
          />
          Try again
        </Button>
        <Button variant="outline" onClick={() => window.location.reload()}>
          Reload
        </Button>
      </div>
    </div>
  );
}
