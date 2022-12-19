import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { shimmer, toBase64 } from 'utils/image-utils'

interface Props {
  imgSrc: string
  cardTitle: string
  slug: string
  cardExcerpt: string
  tags: string[]
  readingTime: number
  postDate: string
}

export const Card: React.FC<Props> = ({
  imgSrc,
  cardTitle,
  cardExcerpt,
  tags,
  slug,
  readingTime,
  postDate,
}) => {
  const dt = new Date(postDate)
  const formattedDate = moment(dt).format('MMMM Do, YYYY')
  return (
    <div className="flex flex-col max-w-sm rounded overflow-hidden dark:bg-gray-100 bg-gray-700 shadow-lg">
      <Image
        layout="responsive"
        width={360}
        height={280}
        objectFit="cover"
        src={imgSrc}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        alt="context"
      />
      <div className="px-6 py-4 flex flex-col flex-1">
        <p className="dark:text-gray-700 text-gray-100 text-base mb-4 text-xs">
          {formattedDate} - <span>{readingTime} min read</span>
        </p>
        <h2 className="font-bold text-xl mb-2 text-gray-100 dark:text-gray-700">
          <Link href={`/journal/${slug}`}>{cardTitle}</Link>
        </h2>
        <p className="dark:text-gray-700 text-gray-100 text-base">
          {cardExcerpt}
        </p>
      </div>
      <div className="px-6 pt-4 pb-4">
        {tags &&
          tags.map(tag => (
            <span
              key={tag}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              <Link key={tag} href={`/tags/${tag}`}>
                {tag}
              </Link>
            </span>
          ))}
      </div>
    </div>
  )
}
