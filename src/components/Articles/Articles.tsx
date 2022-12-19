import { Card } from '@components/Card'
import { PostMeta } from 'api'
import React from 'react'

interface Props {
  posts: PostMeta[]
  readingTime: number
}

export const Articles: React.FC<Props> = ({ posts, readingTime }) => {
  return (
    <>
      {posts.map(post => (
        <Card
          key={post.title}
          imgSrc={post.imageSrc}
          cardTitle={post.title}
          cardExcerpt={post.excerpt}
          tags={post.tags}
          slug={post.slug}
          readingTime={readingTime}
          postDate={post.date}
        />
      ))}
    </>
  )
}
