"use client"

import { useEffect } from "react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container flex h-[calc(100vh-4rem)] flex-col items-center justify-center space-y-4 px-4 sm:px-8">
      <h2 className="text-2xl font-bold">Something went wrong!</h2>
      <p className="text-muted-foreground text-center">We encountered an error while loading this page.</p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-md border px-4 py-2 text-sm font-medium hover:bg-accent"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}
