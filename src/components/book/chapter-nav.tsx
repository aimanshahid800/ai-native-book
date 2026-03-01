"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

interface Chapter {
  id: string
  title: string
}

interface ChapterNavProps {
  chapters: Chapter[]
  activeChapterId?: string
}

export function ChapterNav({ chapters, activeChapterId }: ChapterNavProps) {
  return (
    <nav className="space-y-1">
      {chapters.map((chapter) => (
        <Link
          key={chapter.id}
          href={`#${chapter.id}`}
          className={cn(
            "block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
            activeChapterId === chapter.id
              ? "bg-accent text-accent-foreground"
              : "text-muted-foreground"
          )}
        >
          {chapter.title}
        </Link>
      ))}
    </nav>
  )
}
