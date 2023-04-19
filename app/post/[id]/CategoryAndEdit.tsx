import { FC } from 'react'
import { Editor } from '@tiptap/react'
import {FaRegEdit, FaWindowClose} from 'react-icons/fa'
import { FormattedPost } from '@/app/types'

interface CategoryAndEditProps {
  isEditable: boolean
  handleIsEditable: (isEditable: boolean) => void
  title: string
  setTitle: (title: string) => void
  tempTitle: string
  setTempTitle: (tempTitle: string) => void
  tempContent: string
  setTempContent: (tempContent: string) => void
  editor: Editor | null
  post: FormattedPost
}

const CategoryAndEdit: FC<CategoryAndEditProps> = ({ 
  isEditable,
  handleIsEditable,
  title,
  setTitle,
  tempTitle,
  setTempTitle,
  setTempContent,
  tempContent,
  editor,
  post
 }) => {
  const handleEnableEdit = () => {
    handleIsEditable(!isEditable)
    setTempTitle(title)
    setTempContent(editor?.getHTML() || '')
  }

  const handleCancelEdit = () => {
    handleIsEditable(!isEditable)
    setTitle(tempTitle)
    editor?.commands.setContent(tempContent)
  }

  return (
    <div className="flex justify-between items-center">
      <h4 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold uppercase">{post.category}</h4>
      <div className="mt-4">
        {isEditable ? (
          <div className="flex justify-between gap-3">
            <button className="" onClick={handleCancelEdit}>
              <FaWindowClose className='w-6 h-6 text-accent-red' />
            </button>
          </div>
        ): (
          <button className="" onClick={handleEnableEdit}>
            <FaRegEdit className='w-6 h-6 text-accent-red' />
          </button>
        )}
      </div>
     </div>
  )
}

export default CategoryAndEdit