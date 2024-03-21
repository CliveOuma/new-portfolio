import React from 'react'
import { EyeIcon, CodeBracketIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

const ProjectCard = ({imgUrl, title, description, previewUrl, gitUrl}) => {
  return (
    <div>
        <div className='h-52 md:h-72 rounded-t-xl relative group' 
        style={{background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center"}}>
          <div className='overlay items-center justify-center absolute top-0 w-full h-full left-0
           bg-black bg-opacity-0 hidden  group-hover:flex 
           group-hover:bg-opacity-80 transition-all duration-500'>
            <Link href={previewUrl} className='h-14 w-14 mr-2 border-2 relative rounded-full border-gray-400 hover:border-white group/link'>
              <EyeIcon className='cursor-pointer h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 
              -translate-y-1/2 text-gray-400 group-hover/link:text-white'/>
            </Link>
            <Link href={gitUrl} className='h-14 w-14 border-2 relative rounded-full border-gray-400 hover:border-white group/link'>
              <CodeBracketIcon className='cursor-pointer h-10 w-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 
              -translate-y-1/2 text-gray-400 group-hover/link:text-white'/>
            </Link>
           </div>
        </div>
        <div className='text-white rounded-b-xl bg-gray-900 py-6 px-4'>
            <h5 className='font-semibold text-xl mb-2'>{title}</h5>
            <p className='text-gray-200'>{description}</p>
        </div>
    </div>
  )
}

export default ProjectCard  
