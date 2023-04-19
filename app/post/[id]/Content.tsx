'use client'
import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { FormattedPost } from '@/app/types'
import Image from 'next/image'
import { SocialLinks } from '@/app/(shared)'
import { useEditor, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import CategoryAndEdit from './CategoryAndEdit'
import Article from './Article'

interface ContentProps {
  post: FormattedPost
}

const Content: FC<ContentProps> = ({ post }) => {
  const [isEditable, setIsEditable] = useState<boolean>(false)
  const [title, setTitle] = useState<string>(post.title)
  const [titleError, settitleError] = useState<string>('')
  const [tempTitle, setTempTitle] = useState<string>(title)
  const [content, setContent] = useState<string>(post.content)
  const [contentError, setContentError] = useState<string>('')
  const [tempContent, setTempContent] = useState<string>(content)

  const date = new Date(post?.createdAt)
  const options = { year: 'numeric', month: 'long', day: 'numeric' } as any;
  const formattedDate = date.toLocaleDateString('en-US', options)

  const handleIsEditable = (bool: boolean) => {
    setIsEditable(bool)
    editor?.setEditable(bool)
  }

  const handleOnChangeContent = ({editor}: any) => {
    if (!(editor as Editor).isEmpty) setContentError('')
    setContent((editor as Editor).getHTML())
  }

  const handleOnChangeTitle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (title) settitleError('')
    setTitle(e.target.value)
  }

  // tiptap
  const editor = useEditor({
    extensions: [StarterKit],
    onUpdate: handleOnChangeContent,
    editorProps: {
      attributes: {
        class: 
          "prose prose-sm xl:prose-2xl leading-8 focus:outline-none w-full max-w-full"
      }
    },
    content: content,
    editable: isEditable
  })


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
     if (title === '') settitleError('Title is required')
     if (editor?.isEmpty) setContentError('Content is required')
     if (title === '' || editor?.isEmpty) return

     const response = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/post/${post?.id}`, {
      method: 'PATCH',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ title, content })
     })
     const data = await response.json()
     handleIsEditable(false)
     setTempTitle('')
     setTempContent('')
     setTitle(data.title)
     setContent(data.content)
     editor?.commands.setContent(data.content)
  }

  return (
    <div className='prose w-full max-w-full mb-10'>
      {/* breadcrumbs */}
     <h5 className="text-wh-300">{`Home > ${post.category} > ${post.title}`}</h5>
     {/* category and edit */}
     <CategoryAndEdit 
       isEditable={isEditable} 
       handleIsEditable={handleIsEditable} 
       title={title}
       setTitle={setTitle} 
       tempTitle={tempTitle} 
       setTempTitle={setTempTitle} 
       setTempContent={setTempContent}
       tempContent={tempContent}
       editor={editor}
       post={post}
      />
     <form onSubmit={handleSubmit} className="">
      {/* header */}
      <>
        {isEditable ? (
          <div className="">
            <textarea className='border-2 border-zinc-300 rounded-md bg-wh-50 p-3 w-full outline-none' placeholder='Title' onChange={handleOnChangeTitle} value={title} />
            {titleError && <p className='mt-1 text-wh-500'>{titleError}</p>}
          </div>
        ): (
          <h3 className="font-bold text-3xl mt-3">{title}</h3>
        )}
        <div className="flex gap-3">
          <h5 className="font-semibold text-xs">By {post.author}</h5>
          <h6 className="text-wh-300 text-xs">{formattedDate}</h6>
        </div>
      </>
      {/* image */}
      <div className="relative w-auto mt-2 mb-16 h-96">
        <Image src={post.image} 
          style={{objectFit: 'cover'}} 
          alt={post.title} 
          fill 
          sizes='(max-width: 480px) 100vw, (max-width: 768px) 75vw, (max-width: 1060px) 50vw, 33vw' 
        />
      </div>
      {/* article */}
      <Article 
        contentError={contentError} 
        editor={editor} 
        isEditable={isEditable} 
        setContent={setContent} 
        title={title} 
      />
      {/* submit button */}
      {isEditable && (
        <div className="flex justify-end">
          <button type="submit" className="bg-accent-red hover:bg-wh-500 text-wh-10 font-semibold py-2 px-5 mt-5">Submit</button>
        </div>
      )}
     </form>
     {/* social links */}
     <div className="hidden md:block mt-10 w-1/3">
      <SocialLinks isDark />
     </div>
    </div>
  )
}

export default Content