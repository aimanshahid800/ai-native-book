"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronRight, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface Chapter {
  id: string
  title: string
  order: number
}

interface ChapterNavProps {
  chapters: Chapter[]
  activeChapterId?: string
}

export function ChapterNav({ chapters, activeChapterId }: ChapterNavProps) {
  const [isExpanded, setIsExpanded] = React.useState(true)

  return (
    <div className="space-y-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground/50 hover:text-primary transition-colors"
      >
        <span>Curriculum</span>
        {isExpanded ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
      </button>

      {isExpanded && (
        <nav className="space-y-1 pl-1">
          {chapters.map((chapter) => (
            <Link
              key={chapter.id}
              href={`#${chapter.id}`}
              className={cn(
                "group relative block rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300",
                activeChapterId === chapter.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02] ring-1 ring-primary/20"
                  : "text-muted-foreground hover:bg-white/5 hover:text-primary hover:scale-[1.01]"
              )}
            >
              <div className="flex items-center gap-3">
                <span className={cn(
                  "flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-black border transition-colors",
                  activeChapterId === chapter.id
                    ? "bg-white text-primary border-white"
                    : "bg-muted text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary"
                )}>
                  {chapter.order}
                </span>
                <span className="flex-1 truncate tracking-tight">{chapter.title}</span>
              </div>
            </Link>
          ))}
        </nav>
      )}
    </div>
  )
}
