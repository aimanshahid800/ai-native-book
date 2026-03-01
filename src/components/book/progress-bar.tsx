"use client"

import * as React from "react"

export function ProgressBar() {
  const [completion, setCompletion] = React.useState(0)

  React.useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY
      const scrollHeight = document.body.scrollHeight - window.innerHeight
      if (scrollHeight) {
        setCompletion(
          Number((currentProgress / scrollHeight).toFixed(2)) * 100
        )
      }
    }

    window.addEventListener("scroll", updateScrollCompletion)
    return () => window.removeEventListener("scroll", updateScrollCompletion)
  }, [])

  return (
    <div className="fixed top-16 left-0 z-50 h-1 w-full bg-muted">
      <div
        className="h-full bg-primary transition-all duration-150"
        style={{ width: `${completion}%` }}
      />
    </div>
  )
}
