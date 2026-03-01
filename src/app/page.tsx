import Link from "next/link"
import { getChapters } from "@/lib/mdx"

export default async function HomePage() {
  const chapters = await getChapters()

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="container flex flex-col items-center justify-center space-y-4 py-24 text-center md:py-32">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          The AI-Native Book
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Architecting and building software in the age of intelligence. A deep dive into the next generation of application development.
        </p>
        <div className="flex gap-4">
          <Link
            href="/book"
            className="rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Start Reading
          </Link>
          <Link
            href="/about"
            className="rounded-md border bg-background px-8 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Chapter Previews */}
      <section className="container py-12 md:py-24">
        <h2 className="mb-12 text-center text-3xl font-bold">Inside the Book</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {chapters.map((chapter) => (
            <Link
              key={chapter.id}
              href={`/book#${chapter.id}`}
              className="group flex flex-col space-y-2 rounded-lg border p-6 transition-colors hover:bg-accent"
            >
              <span className="text-sm font-medium text-muted-foreground">Chapter {chapter.order}</span>
              <h3 className="text-xl font-bold group-hover:underline">{chapter.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-3">
                {chapter.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
