import type { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { getAllPosts, PostMeta } from 'api'
import { Articles } from '@components/Articles'

interface TagPageProps {
  slug: string
  posts: PostMeta[]
  readingTime: number
}

export default function TagPage({ slug, posts, readingTime }: TagPageProps) {
  return (
    <>
      <Head>
        <title>Tag: {slug}</title>
      </Head>

      <div className="flex flex-col items-start min-h-[70vh]">
        <h1 className="text-4xl flex">{slug}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-10">
          <Articles posts={posts} readingTime={readingTime} />
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string }
  const posts = getAllPosts().filter(post => post.meta.tags.includes(slug))

  return {
    props: {
      slug,
      posts: posts.map(post => post.meta),
      readingTime: posts.map(post => post.readingTime),
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts()
  const tags = new Set(posts.map(post => post.meta.tags).flat())
  const paths = Array.from(tags).map(tag => ({ params: { slug: tag } }))

  return {
    paths,
    fallback: false,
  }
}
