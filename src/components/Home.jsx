import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const home = () => {
  return (
    <div name='home' className='w-full h-screen bg-slate-700'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-red-500'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-gray-300'>Robert Warren</h1>
            <h2 className='text-3xl sm:text-5xl font-bold text-gray-500 max-w-[700px]'>I'm a Java Full Stack Developer.</h2>
            <p className='text-gray-500 py-4 max-w-[700px]'> I focus mainly on Java and building RESTful API's 
                using SpringBoot, Hibernate, and MySQL. I have basic skills in HTML, CSS, and React.js.</p>
                <div>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-500 hover:border-red-500'>
                        View Work
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </div>
        </div>
    </div>
  )
}

export default home