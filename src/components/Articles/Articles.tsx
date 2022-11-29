import { Card } from '@components/Card'
import { PostMeta } from 'api'
import React from 'react'

interface Props {
  posts: PostMeta[]
}

export const Articles: React.FC<Props> = ({ posts }) => {
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
        />
      ))}
    </>
  )
}
