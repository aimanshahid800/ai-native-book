"use client"

import * as React from "react"
import { joinWaitlist } from "@/lib/waitlist"

export function WaitlistForm() {
  const [email, setEmail] = React.useState("")
  const [name, setName] = React.useState("")
  const [status, setStatus] = React.useState<{ type: "idle" | "success" | "error"; message: string }>({
    type: "idle",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    const result = joinWaitlist(email, name)
    setStatus({
      type: result.success ? "success" : "error",
      message: result.message,
    })

    if (result.success) {
      setEmail("")
      setName("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border p-6 bg-card">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">Name (Optional)</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
          className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="john@example.com"
          className="w-full rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-primary py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Join Waitlist
      </button>
      {status.type !== "idle" && (
        <p className={`text-sm ${status.type === "success" ? "text-green-600" : "text-red-600"}`}>
          {status.message}
        </p>
      )}
    </form>
  )
}
