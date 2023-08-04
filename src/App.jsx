import React from 'react'
import Tag from './components/Tag'
import Random from './components/Random'


export default function App() {
  return (
    
    <div className="w-[100vw]  flex flex-col background  items-center  ">

      <h1 className='bg-white w-[80%] rounded-lg md:text-md lg:text-xl shadow-slate-500 shadow-lg text-sm font-semibold m-5 h-8 flex items-center justify-center  '>RANDOM GIFS</h1>

      <div className='flex flex-col w-full' >
        <Random/>
        <Tag/>
      </div>
      
    </div>
  )
}
