import fs from "fs"
import path from "path"
import matter from "gray-matter"

const contentDirectory = path.join(process.cwd(), "content/chapters")

export async function getChapters() {
  if (!fs.existsSync(contentDirectory)) {
    return []
  }
  const fileNames = fs.readdirSync(contentDirectory)
  const allChaptersData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx") || fileName.endsWith(".md"))
    .map((fileName) => {
      const id = fileName.replace(/\.mdx?$/, "")
      const fullPath = path.join(contentDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        id,
        content,
        title: data.title || id,
        order: data.order || 0,
        ...data,
      }
    })

  return allChaptersData.sort((a, b) => (a.order > b.order ? 1 : -1))
}

export async function getChapterData(id: string) {
  const fullPath = path.join(contentDirectory, `${id}.mdx`)
  const mdPath = path.join(contentDirectory, `${id}.md`)

  let filePath = fullPath
  if (!fs.existsSync(fullPath)) {
    if (fs.existsSync(mdPath)) {
      filePath = mdPath
    } else {
      return null
    }
  }

  const fileContents = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    id,
    content,
    ...data,
  }
}
