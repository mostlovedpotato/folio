import React,{useState} from 'react';
import {FaBars,FaTimes} from 'react-icons/fa'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const links = [
        {
          id: 1,
          link: "home",
        },
        {
          id: 2,
          link: "about",
        },
        {
          id: 3,
          link: "portfolio",
        },
        {
          id: 4,
          link: "experience",
        },
        {
          id: 5,
          link: "contact",
        },
      ];

  return (
    <div className='flex justify-between items-center w-full h-20 text-black fixed bg-gradient-to-b from-black-200 to-black-700 px-4'>
        <div>
            <h1 className='text-5xl font-signature ml-2'>Prash</h1>
        </div>
        <ul className='hidden md:flex'>
            {links.map(({id,link})=>(
                <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200"
                >
                  {link}
              </li>
            ))}
        </ul>

        <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
          {nav ? <FaTimes className='text-gray-200' size={30}/> : <FaBars size={30}></FaBars>}
        </div>
          
        {nav && (<ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-violet-800 to-cyan-200 text-white-500 capitalize'>
            {links.map(({id,link})=>(
                <li
                key={id}
                className="px-4 cursor-pointer py-6 text-4xl"
                >
                  {link}
              </li>
            ))}
        </ul>)}
        
    </div>
  );
};

export default Navbar;