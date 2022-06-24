import React from 'react'

import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImg from '../assets/react.png'
import graphQl from '../assets/graphql.png'
import github from '../assets/github.png'
import nextjs from '../assets/nextjs.png'
import tailwind from '../assets/tailwind.png'
import node from '../assets/node.png'


const Experience = () => {

    const exps = [
        {
            id:1,
            src:html,
            title:'HTML',
            style: 'shadow-orange-500',
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style: 'shadow-sky-500',
        },
        {
            id:3,
            src:javascript,
            title:'JavaScript',
            style: 'shadow-yellow-500',
        },
        {
            id:4,
            src:reactImg,
            title:'React',
            style: 'shadow-blue-500',
        },
        {
            id:5,
            src:tailwind,
            title:'Tailwind',
            style: 'shadow-blue-400',
        },
        {
            id:6,
            src:nextjs,
            title:'NextJS',
            style: 'shadow-green-500',
        },
        {
            id:7,
            src:node,
            title:'node',
            style: 'shadow-pink-500',
        },
        {
            id:8,
            src:github,
            title:'GitHub',
            style: 'shadow-red-500',
        },

    ]

  return (
    <div name="experience" className='bg-gradient-to-b from-cyan-100 to-violet-900 w-full'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-centerw-full h-full text-white'>
            <div className='py-8'>
                <p className='text-4xl text-blue-700 font-bold inline border-b-4 border-sky-500'>Experience</p>
                <p className='py-6 text-purple-600'>These are Technologies I've worked with.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                {
                    exps.map(({id,src,title,style})=>(
                        <div key={id} className={`shadow-md hover:scale-110 duration-300 py-2 rounded-lg ${style}`}>
                            <img className='w-20 mx-auto' src={src} alt="" />
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Experience