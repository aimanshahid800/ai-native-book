import { getChapters } from "@/lib/mdx"
import { MDXRemote } from "next-mdx-remote/rsc"
import { ChapterNav } from "@/components/book/chapter-nav"
import { ProgressBar } from "@/components/book/progress-bar"

export default async function BookPage() {
  const chapters = await getChapters()

  return (
    <div className="container relative py-10 px-4 sm:px-8">
      <ProgressBar />
      <div className="flex flex-col gap-10 lg:flex-row">
        <aside className="sticky top-24 hidden h-[calc(100vh-8rem)] w-64 shrink-0 lg:block">
          <div className="space-y-4">
            <h4 className="font-bold border-b pb-2">Chapters</h4>
            <ChapterNav chapters={chapters} />
          </div>
        </aside>
        <main className="flex-1 space-y-20 max-w-3xl mx-auto lg:mx-0">
          {chapters.map((chapter) => (
            <section key={chapter.id} id={chapter.id} className="scroll-mt-24">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <MDXRemote source={chapter.content} />
              </div>
              <hr className="mt-20 opacity-50" />
            </section>
          ))}
        </main>
      </div>
    </div>
  )
}
