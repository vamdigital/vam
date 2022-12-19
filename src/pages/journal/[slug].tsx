import type { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'
// import rehypeHighlight from 'rehype-highlight'
import { getPostFromSlug, getSlugs, PostMeta } from 'api'
// import 'highlight.js/styles/github-dark.css'
import { shimmer, toBase64 } from 'utils/image-utils'
import moment from 'moment'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'

interface MDXPost {
  source: MDXRemoteSerializeResult<
    Record<string, unknown>,
    Record<string, string>
  >
  meta: PostMeta
  readingTime: number
}

export default function JournalPage({ post }: { post: MDXPost }) {
  const dt = new Date(post.meta.date)
  const formattedDate = moment(dt).format('MMMM Do, YYYY')
  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
      </Head>
      <div className="md:flex md:flex-col w-full mt-5">
        <h1 className="text-3xl mt-5 mb-2 dark:text-green-400 text-gray-700">
          {post.meta.title}
        </h1>
        <p className="mb-8 text-sm">
          {formattedDate} - {post.readingTime} min read
        </p>

        <Image
          src={post.meta.imageSrc}
          alt={post.meta.title}
          width={1100}
          height={500}
          objectFit="cover"
          className="rounded-xl"
          placeholder="blur"
          blurDataURL={`data:image/svg+xml;base64,${toBase64(
            shimmer(700, 475)
          )}`}
        />
        <div className="prose dark:prose-invert mx-auto mt-5 mb-10">
          <MDXRemote {...post.source} components={{ Image }} />
        </div>
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string }
  const { content, meta, readingTime } = getPostFromSlug(slug)

  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        rehypeAccessibleEmojis,
        // rehypeHighlight,
      ],
      format: 'mdx',
    },
    scope: { content },
  })

  return {
    props: {
      post: { source: mdxSource, meta, readingTime },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map(slug => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
