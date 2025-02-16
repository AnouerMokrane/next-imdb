"use client";
import Header from "@/components/Header";

// Error boundaries must be Client Components

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body>
        <Header />
        <h2>Something went wrong!</h2>
        <p>
          {error.message} {error.digest}
        </p>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
