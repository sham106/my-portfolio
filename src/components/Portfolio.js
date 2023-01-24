import React from 'react'
import djangoProjectPic from '../assets/portfolio/djangoProjectPic.png'
import projectManagement from '../assets/portfolio/projectManagementPic.png'
import reactProfile from '../assets/portfolio/reactProfilePic.png'
const Portfolio = () => {

  const portfolio = [
    {
      id:1,
      src: djangoProjectPic,
      Github:"https://github.com/sham106/DjangoEcommerceApp",
      Demo:"https://fitch-store.herokuapp.com/"
    },

    {
      id:2,
      src: projectManagement
    },

    {
      id:3,
      src: reactProfile
    },
  ]


  return (
    <div name="portfolio"
    className='bg-gradient-to-b from-green-800 to-blue-800
    text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4
          border-green-300'>
            Portfolio
          </p>
          <p className='py-6'>Check Out Some Of My Work Here</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3
        gap-8 px-12 sm:px-0'>

{
          portfolio.map(({id, src, Github, Demo}) => (
            <div key={id} className='shadow-md shadow-green-600 rounded-lg'>
          <img src={src} alt='' className='rounded-md
          duration-300 hover:scale-105' sizes={30} />
          <div className='flex items-center justify-center'>
            <button  className='w-1/2 px-6 py-3 m-4 duration-300
            hover:scale-105' >Demo</button >
            <button  className='w-1/2 px-6 py-3 m-4 duration-300
            hover:scale-105'>Code</button>
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