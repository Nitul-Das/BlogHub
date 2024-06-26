import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
      
    <div className="max-w-7xl mx-auto">
        <div className="relative group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
            </div>
            <div class="relative mx-auto max-w-md rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg">
            <div className="relative px-7 py-6 bg-slate-300  rounded-lg leading-none flex items-top justify-start space-x-6">
                <div className="space-y-2">
                <div className='w-full justify-center mb-4'>
                  
                  <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
className='rounded-xl' />

                </div>

                <h2 className='text-xl font-bold'>{title}</h2>

                </div>
                </div> 
            </div>       
        </div>
    </div>

   
   
    </Link>
  )
}


export default PostCard


