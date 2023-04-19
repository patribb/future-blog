import { FC } from 'react'
import Link from 'next/link'
import { Post } from '@prisma/client'
import Image from 'next/image'

interface TrendingCardProps {
  className?: string
  post: Post
}

const TrendingCard = ({className, post}: TrendingCardProps) => {
  return (
    <Link className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-70`} href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}>
      <div className="z-0 relative w-full h-full">
        <Image placeholder='blur' src={post?.image} alt={post?.title} 
          sizes='(max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1060px) 50vw, 33vw' 
          fill 
          style={{objectFit: 'cover'}} 
        />
      </div>
      <div className="absolute z-1 top-0 left-0 w-full h-full bg-gradient-gradual" />
      <div className="absolute z-2 bottom-0 left-0 p-3">
        <h4 className="inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900 uppercase">{post?.category}</h4>
        <div className="text-wh-100 mt-2">{post?.title}</div>
      </div>
    </Link>
  )
}

interface TrendingProps {
  trendingPosts: Array<Post>
}

const Trending: FC<TrendingProps> = ({ trendingPosts }) => {
  return (
    <section className='pt-3 pb-10'>
     <div className="flex items-center gap-3">
      <div className="bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold">TRENDING</div>
      <p className="text-sm">Estas son solo algunas de las tendencias más destacadas en el campo de la inteligencia artificial.</p>
     </div>
     {/* grid option */}
     <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3">
        <TrendingCard className="col-span-2 row-span-2" post={trendingPosts[0]} />
        <TrendingCard className="col-span-2 row-span-1" post={trendingPosts[1]} />
        <TrendingCard className="col-span-1 row-span-1" post={trendingPosts[2]} />
        <TrendingCard className="col-span-1 row-span-1" post={trendingPosts[3]} />
      </div>
      <p className="text-sm">In our ever-changing world, it seems that we are constantly met with reminders that we are living in the future we once dreamed of.</p>
    </section>
  )
}

export default Trending