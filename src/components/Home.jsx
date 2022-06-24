import React from 'react'

import HeroImage from '../assets/heroImage.png'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-violet-900 to-cyan-100'>
      
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-blue-700'>I'm a FullStack Developer</h2>
          <p className='py-4 max-w-md text-sky-100'>
            I have good grasp over React and Node.
            Currently, I love to work on web applications using
            technologies like React,Node,Tailwind,Mongodb. 
          </p>
          <div>
            <button className='text-sky-800 bg-gradient-to-r from-violet-400 to-violet-300 hover:scale-100 duration-200 hover:text-2xl hover:text-bold w-fit px-6 py-3 my-2 cursor-pointer flex items-center rounded-md '>
              Portfolio <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight className='ml-1' size={25}/></span>
            </button>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="My Persona" className='rounded-2xl mx-auto w-2/3 md:w-full' />
        </div>
      </div>
    </div>
  )
}

export default Home