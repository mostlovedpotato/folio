import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-gradient-to-b from-violet-900 to-sky-100'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl text-sky-400 font-bold inline border-b-4 border-blue-500'>Contact</p>
                <p className='py-6'>Submit the Form below to Get in Touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/1a84f001-9a7f-43e8-9a28-13ecade12b81" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name="name" placeholder='Enter your Name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <input type="email" name="email" placeholder='Enter your Email' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none my-4' />
                    <textarea name="message" rows="10" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
                    <button className='text-white bg-gradient-to-r from-slate-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300' >Let's Talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact