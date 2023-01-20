import React from 'react'
import profilePic from '../assets/portfolio/profilePic.jpg'
import {MdOutlineArrowRight} from 'react-icons/md'
const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-white to-red-10'>
      <div className='max-w-screen-lg mx-auto flex flex-col
      items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold'>
            I am  FullStack Developer
          </h2>
          <p className='text-gray-600 py-4 max-w-md'>
            I have  6 months experience in building and 
            Developing software.
            Currently i like to work on web applications using 
            technologies like react, Tailwind, Django, Python
            Mysql, JS
          </p>
          <div>
            <button className='group w-fit px-6 py-3 my-2
            flex items-center rounded-md bg-gradient-to-r from-blue-600
            to-cyan-500'>
              Portfolio<span className='group-hover:rotate-90 duration-300  '><MdOutlineArrowRight size={30}/></span>
              
            </button>
          </div>
        </div>
        <div>
          <img src={profilePic} alt="profile picture" className='rounded-2xl mx-auto
          w-2/3 md:w-full mr-20'></img>
        </div>
      </div>
    </div>
  )
}

export default Home