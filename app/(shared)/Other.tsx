import { FC } from 'react'
import {Card} from './'
import { Post } from '@prisma/client'

interface OtherProps {
  otherPosts: Array<Post>
}

const Other: FC<OtherProps> = ({ otherPosts }) => {
  return (
    <section className="pt-4 mb-16">
      <hr className="border-1" />
      {/* HEADER */}
      <p className="font-bold text-2xl my-8 uppercase">Other Trending Posts</p>
      <div className="sm:grid grid-cols-2 gap-16">
        <Card className="mt-5 sm:mt-0" imageHeight="h-80" post={otherPosts[0]} />
        <Card className="mt-5 sm:mt-0" imageHeight="h-80" post={otherPosts[1]} />
        <Card className="mt-5 sm:mt-0" imageHeight="h-80" post={otherPosts[2]} />
        <Card className="mt-5 sm:mt-0" imageHeight="h-80" post={otherPosts[3]} />
      </div>
    </section>
  )
}

export default Other