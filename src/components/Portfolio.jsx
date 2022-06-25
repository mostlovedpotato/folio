import React from 'react'
import pFolio from '../assets/pFolio.png'
import installNode from '../assets/portfolio/installNode.jpg'
import EShop from '../assets/img-1.PNG'
import Site from '../assets/Site.PNG'
import MpBox from '../assets/Mpbox.png'
import reactWeather from '../assets/portfolio/reactWeather.jpg'





const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src:pFolio,
            link : "https://sprightly-quokka-97e4b4.netlify.app",
            link2:"https://github.com/mostlovedpotato/folio",
        },
        {
            id:2,
            src:Site,
            link:"https://mellow-kulfi-018b19.netlify.app",
            link2:"https://github.com/mostlovedpotato/small_business_templ",
        },
        {
            id:3,
            src:EShop,
            link:"None",
            link2:"https://github.com/autoSaveInstance/server-MERN"
        },
        {
            id:4,
            src:MpBox,
            link:"None",
            link2:"https://github.com/autoSaveInstance/Adventure-Sharing-Application-c52f9ccafd355e64710b1e0e5528554dfdea346c"
        },
     
        

    ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-violet-900 to-cyan-100 w-full text-sky-300 md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className="text-4xl font-bold inline border-b-4 border-blue-500">Portfolio</p>
                <p className='py-6'>Check out some of my works</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                portfolios.map(({id,src,link,link2})=>(
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-110'>
                        <img src={src} alt="Not Found"  className='rounded-md ' />
                        <div className='flex items-center justify-center'>
                            <a href={link} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'  target="_blank" rel='noreferrer'>Demo</a>
                            <a href={link2} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110' target="_blank" rel='noreferrer'>Code</a>

                        </div>
                    </div>
                ))
            }

            </div>
        </div>
    </div>
  )
}

export default Portfolio