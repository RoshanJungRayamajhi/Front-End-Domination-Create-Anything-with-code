import React from 'react'
import { Link } from 'react-router-dom'
import Dropdown from './Dropdown'
import { Img_Url } from '../../utilis/constant'

const HorizontalCards = ({data}) => {
  return ( 
      <div className='w-full h-fit flex overflow-hidden overflow-x-auto p-4'>
        {data.map((d,i)=>(
        <div key={i} className=' rounded-md overflow-hidden min-w-[25%] h-[55vh]  mr-5 bg-zinc-900'>
            <img className=' w-full h-[55%] object-cover' src={`${Img_Url}${
            d.backdrop_path || d.profile_path || d.poster_path
          }`} alt="" />
     
      <h1 className="text-xl font-black text-white h-10 ">  {d.original_title || d.original_name || d.name || d.title}</h1>
        <p className=" text-white font-sm mt-10 leading-none">{d.overview.slice(0,100)}...<Link className=" text-blue-500">more</Link></p>
        
     
      
      </div>))}
      </div>
  )
}

export default HorizontalCards