import React from 'react'
import cssPic from '../assets/portfolio/cssPic.png'
import djangoPic from '../assets/portfolio/djangoPic.png'
import htmlPic from '../assets/portfolio/htmlPic.png'
import jsPic from '../assets/portfolio/jsPic.png'
import pythonPic from '../assets/portfolio/pythonPic.png'
import reactPic from '../assets/portfolio/reactPic.png'
import tailwindPic from '../assets/portfolio/tailwindPic.png'

const Experience = () => {

  const experience = [
    {
      id:1,
      src: htmlPic,
      title: 'HTML',
      style:'shadow-orange-500'
    },
    {
      id:2,
      src: cssPic,
      title: 'CSS',
      style:'shadow-blue-500'
    },
    {
      id:3,
      src: jsPic,
      title: 'JavaScriot',
      style:'shadow-yellow-400'
    },
    {
      id:4,
      src: reactPic,
      title: 'REACT',
      style:'shadow-blue-600'
    },
    {
      id:5,
      src: djangoPic,
      title: 'DJANGO',
      style:'shadow-green-500'
    },
    {
      id:6,
      src: pythonPic,
      title: 'PYTHON',
      style:'shadow-white'
    },
    {
      id:7,
      src: tailwindPic,
      title: 'Tailwind',
      style:'shadow-sky-500'
    }
  ]

  return (
    <div name="experience"
    className='bg-gradient-to-b from-blue-800 to-green-800
     h-screen w-full'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col
      justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold  border-b-4
          border-green-300 p-2 inline'>Experience</p>
          <p className='py-6'>These are the technologies which i have worked with
          </p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 text-center
        py-8 px-12 sm:px-0 gap-8'>
          {
            experience.map(({id, src, title, style}) => (
              <div key={id} className={`shadow-md  rounded-lg py-2 ${style}`}>
            <img  src={src} alt="" className='w-20 mx-auto'></img>
            <p>{title}</p>
          </div>
            ))
          }
          
        </div>
      </div>
    </div>
  )
}

export default Experience