import { getChapters } from "@/lib/mdx"
import { MDXRemote } from "next-mdx-remote/rsc"
import { ChapterNav } from "@/components/book/chapter-nav"
import { ProgressBar } from "@/components/book/progress-bar"
import { Quiz } from "@/components/mdx/quiz"
import { CodePlayground } from "@/components/mdx/code-playground"

// MDX Components Map
const components = {
  Quiz,
  CodePlayground,
  h1: (props: any) => <h1 {...props} className="mb-6 text-4xl font-extrabold tracking-tighter sm:text-5xl lg:text-6xl text-gradient" />,
  h2: (props: any) => <h2 {...props} className="mb-4 mt-12 text-2xl font-bold tracking-tight sm:text-3xl border-b pb-2" />,
  p: (props: any) => <p {...props} className="mb-6 text-lg leading-relaxed text-muted-foreground/90" />,
  ul: (props: any) => <ul {...props} className="mb-6 list-inside list-disc space-y-2 text-lg text-muted-foreground/90" />,
  li: (props: any) => <li {...props} className="marker:text-primary" />,
  code: (props: any) => <code {...props} className="rounded-md bg-zinc-900 px-1.5 py-0.5 font-mono text-sm font-semibold text-primary ring-1 ring-white/10" />,
}

export default async function BookPage() {
  const chapters = await getChapters()

  return (
    <div className="container relative py-12 px-4 sm:px-8">
      <ProgressBar />
      <div className="flex flex-col gap-16 lg:flex-row">
        <aside className="sticky top-28 hidden h-[calc(100vh-10rem)] w-72 shrink-0 lg:block overflow-y-auto pr-4 scrollbar-hide">
          <div className="space-y-6">
            <h4 className="flex items-center gap-2 font-bold tracking-tighter border-b pb-3 uppercase text-xs opacity-50">
              Navigation
            </h4>
            <ChapterNav chapters={chapters} />
          </div>
        </aside>
        <main className="flex-1 space-y-32 max-w-3xl mx-auto lg:mx-0">
          <div className="grid gap-20">
            {chapters.map((chapter) => (
              <section key={chapter.id} id={chapter.id} className="scroll-mt-32">
                <article className="prose prose-slate dark:prose-invert max-w-none">
                  <MDXRemote source={chapter.content} components={components} />
                </article>
                <div className="mt-24 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              </section>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
