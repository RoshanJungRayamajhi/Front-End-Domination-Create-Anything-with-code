import React from 'react'
import { Link } from 'react-router-dom'
import { Img_Url } from '../../utilis/constant'
import noimage from "/noimage.jpg"

const Cards = ({title,data}) => {
  return (<>
        <h1 className='ml-6 text-2xl text-zinc-200 font-semibold'>{title.toUpperCase()}</h1>
    <div className=' w-full flex flex-wrap pl-6 mt-8 bg-[#1f1e24]'>
        {data && data.map((c,i)=>(<Link className='w-[15vw] mr-[4%] mb-[2.5%]' key={i}>
          <img className=' w-full h-[45vh] bg-cover rounded-md' src={
           c.poster_path || c.backdrop_path || c.profile_path  ?  Img_Url +(c.poster_path || c.backdrop_path || c.profile_path ) : noimage} alt="" />
          <h1 className=' text-2xl my-2 text-zinc-200 font-semibold'>{c.original_title || c.original_name || c.name || c.title}</h1>
        </Link>))}
    </div>
    </>)
}

export default Cards