import { getChapters } from "@/lib/mdx"
import HomePage from "@/components/home-page"

export default async function Page() {
  const chapters = await getChapters()
  return <HomePage chapters={chapters} />
}
