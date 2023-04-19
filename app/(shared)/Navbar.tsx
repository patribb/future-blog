import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {SocialLinks} from './'
import Ad1 from 'public/assets/ad-1.jpg'

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({  }) => {
  return (
    <header className='mb-5'>
     <nav className="flex justify-between items-center w-full bg-wh-900 text-wh-10 px-10 py-4">
      <div className="hidden sm:block">
        <SocialLinks />
      </div>
      <div className="flex justify-between items-center gap-10">
        <Link className='hover:scale-105 transition duration-200' href='/' >Home</Link>
        <Link className='hover:scale-105 transition duration-200' href='/'>Trending</Link>
        <Link className='hover:scale-105 transition duration-200' href='/'>About</Link>
      </div>
      <div className="">
        <p className="hover:scale-105 transition duration-200 font-bold cursor-pointer">Sign In</p>
      </div>
     </nav>
     <div className="flex justify-between gap-8 mt-5 mb-4 mx-10">
      <div className="basis-2/3 md:mt-3">
        <h1 className='font-black text-3xl md:text-5xl'>BLOG OF THE FUTURE</h1>
        <p className="text-sm mt-3">Blog dedicated towards AI and generation and job automation</p>
      </div>
      <div className="basis-full relative w-auto h-32 bg-wh-500">
        <Image src={Ad1} fill 
          placeholder='blur' 
          style={{objectFit: 'cover'}} 
          sizes='(max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1060px) 50vw, 33vw'  
          alt='Future Blog'
        />
      </div>
     </div>
     <hr className="border-1 border-zinc-300 mx-10" />
    </header>
  )
}

export default Navbar