import { FC } from 'react'
import {Card }from 'app/(shared)'
import { Post } from '@prisma/client'

interface TechProps {
  techPosts: Array<Post>
}

const Tech: FC<TechProps> = ({ techPosts }) => {
  return (
    <section>
     <hr className="border-1 border border-zinc-300" />
      {/* HEADER */}
      <div className="flex items-center gap-3 my-8">
        <h4 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">HOT</h4>
        <p className="font-bold text-2xl uppercase">Latest News in Technology</p>
      </div>
       {/* grid */}
       <div className="sm:grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-8 my-5">
        {/* LARGE CARD */}
        <Card className="col-span-1 row-span-3"  imageHeight="h-96" isLongForm post={techPosts[0]} />
        {/* SMALL CARDS */}
        <Card className="col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3" imageHeight="h-48" isSmallCard post={techPosts[1]} />
        <Card className="col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3" imageHeight="h-48" isSmallCard post={techPosts[2]} />
        <Card className="col-span-1 row-span-1 mt-10 sm:mt-0 flex justify-between gap-3" imageHeight="h-48" isSmallCard post={techPosts[3]} />
      </div>
    </section>
  )
}

export default Tech