/** Exponential backoff schedule (ms) used when a lazy chunk fails to load. */
export const CHUNK_RETRY_DELAYS = [400, 1200, 3000] as const;

export const CHUNK_RETRY_LIMIT = CHUNK_RETRY_DELAYS.length;

export function chunkRetryDelay(attempt: number): number {
  return CHUNK_RETRY_DELAYS[Math.min(attempt, CHUNK_RETRY_DELAYS.length - 1)] ?? 3000;
}

export const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

/** Retries an async task with exponential backoff, resolving false if all attempts fail. */
export async function retryWithBackoff(
  task: () => Promise<unknown>,
  {
    retries = CHUNK_RETRY_LIMIT,
    onAttempt,
  }: { retries?: number; onAttempt?: (attempt: number) => void } = {},
) {
  for (let attempt = 0; attempt < retries; attempt++) {
    await sleep(chunkRetryDelay(attempt));
    onAttempt?.(attempt + 1);
    try {
      await task();
      return true;
    } catch {
      // keep backing off
    }
  }
  return false;
}
