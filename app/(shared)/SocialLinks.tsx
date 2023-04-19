import { FC } from 'react'
import {SiTwitter} from 'react-icons/si'
import {TfiFacebook, TfiInstagram} from 'react-icons/tfi'
import {BsGoogle, BsDiscord} from 'react-icons/bs'

interface SocialLinksProps {
  isDark?: boolean,
}

const SocialLinks: FC<SocialLinksProps> = ({ isDark = false }) => {
  return (
    <div className='flex justify-between items-center gap-7'>
      <a href='https://twitter.com/kylemathews' target='_blank' rel='noreferrer'>
        <SiTwitter className={`${isDark ? 'brightness-0' : ''} text-wh-50 hover:opacity-50 text-lg`} />
      </a>
      <a href='https://www.facebook.com/kylemathews' target='_blank' rel='noreferrer'>
        <TfiFacebook className={`${isDark ? 'brightness-0' : ''} text-wh-50 hover:opacity-50 text-lg`} />
      </a>
      <a href='https://www.instagram.com/kylemathews/' target='_blank' rel='noreferrer'>
        <TfiInstagram className={`${isDark ? 'brightness-0' : ''} text-wh-50 hover:opacity-50 text-lg`} />
      </a>
      <a href='https://google.com' target='_blank' rel='noreferrer'>
        <BsGoogle className={`${isDark ? 'brightness-0' : ''} text-wh-50 hover:opacity-50 text-lg`} />
      </a>
      <a href='https://discord.gg/kylemathews' target='_blank' rel='noreferrer'>
        <BsDiscord className={`${isDark ? 'brightness-0' : ''} text-wh-50 hover:opacity-50 text-lg`} />
      </a>
    </div>
  )
}

export default SocialLinks