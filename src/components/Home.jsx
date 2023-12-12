import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-blue-200 text-4xl font-[Permanent Marker]'>Hi, my name is</p>
        <h1 className='text-xl sm:text-7xl font-bold text-red-400'>Abhishek Renjan</h1>
        <h2>I am a Full Stack Developer</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quod, cum nobis de</p>
        <div className='text-white border-2 py-3 px-6 my-2 flex items-center hover:bg-orange-900 hover:border-orange-900'>View Work <HiArrowNarrowRight/></div>
        </div> 
    </div>
  )
}

export default Home