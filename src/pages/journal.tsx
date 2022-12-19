import { Articles } from '@components/Articles'
import { getAllPosts, PostMeta } from 'api'
import React from 'react'

type Posts = {
  posts: PostMeta[]
  readingTime: number
}

const Journal = ({ posts, readingTime }: Posts) => {
  return (
    <div className="flex flex-col items-start min-h-[70vh] mt-10">
      <h1 className="text-4xl flex">Journal</h1>
      <p>documenting the learnings along the way...</p>
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 mb-10">
        <Articles posts={posts} readingTime={readingTime} />
      </article>
    </div>
  )
}

export async function getStaticProps() {
  const posts = getAllPosts()
    .slice(0, 9)
    .map(post => post.meta)

  const readingTime = getAllPosts().map(post => post.readingTime)

  return {
    props: {
      posts,
      readingTime,
    },
  }
}

export default Journal
