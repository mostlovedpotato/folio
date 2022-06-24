import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-cyan-100 to-violet-900'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl text-blue-700 font-bold inline border-b-4 border-sky-500'>About</p>
            </div>
            <p className='text-xl mt-20 text-blue-100'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptate quos possimus quas facilis. Provident dolor beatae commodi aliquid tempora sequi molestias. Doloremque ipsam asperiores fugiat minus, atque saepe autem dolorem mollitia nam voluptatem. Cumque amet ex vel molestiae in illum libero rem necessitatibus quisquam adipisci, praesentium soluta hic saepe.
            </p>
            <br />
            <p className='text-xl text-white'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, mollitia pariatur expedita ducimus asperiores aspernatur et ipsum! Ipsum odit a non. Nobis porro beatae molestias illo dignissimos accusantium aliquam consectetur dolorem pariatur nihil mollitia quaerat, quidem, ullam labore quas, officia quos? Maiores, officiis harum optio iusto voluptatum explicabo dolore praesentium.
            </p>
        </div>
    </div>
  )
}

export default About