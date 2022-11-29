import path from 'path'
import fs from 'fs'
import { sync } from 'glob'
import matter from 'gray-matter'
import { readTime } from 'utils/readTime'

const POSTS_PATH = path.join(process.cwd(), 'src/journal')

export interface PostMeta {
  excerpt: string
  slug: string
  title: string
  tags: string[]
  imageSrc: string
  date: string
}

interface Post {
  readingTime: number
  content: string
  meta: PostMeta
}

export const getSlugs = (): string[] => {
  const paths = sync(`${POSTS_PATH}/*.mdx`)
  const slugs = paths.reduce<string[]>((acc, curr) => {
    const parts = curr.trim().split('/')
    const fileName = parts[parts.length - 1]
    const [slug] = fileName.split('.')
    return (acc = [...acc, slug])
  }, [])
  return slugs
}

export const getAllPosts = () => {
  const posts = getSlugs()
    .map(slug => getPostFromSlug(slug))
    .sort((a, b) => {
      if (a.meta.date > b.meta.date) return 1
      if (a.meta.date < b.meta.date) return -1
      return 0
    })
    .reverse() // to make it newest post first
  return posts
}

export const getPostFromSlug = (slug: string): Post => {
  const postPath = path.join(POSTS_PATH, `${slug}.mdx`)
  const source = fs.readFileSync(postPath)
  const { content, data } = matter(source)
  const readingTime = readTime(content)

  return {
    content,
    readingTime,
    meta: {
      excerpt: data.excerpt,
      slug,
      title: data.title ?? slug,
      tags: (data.tags ?? []).sort(),
      imageSrc: data.imageSrc,
      date: (data.date ?? new Date()).toString(),
    },
  }
}
