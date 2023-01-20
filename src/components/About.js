import React from 'react'


const About = () => {
  return (
    <div name='about' className='w-full bg-gradient-to-b from-blue-800
    to-green-800 text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col 
       w-full h-full' >
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 
          border-green-300 '>
            About
          </p>
        </div>
        <p className='text-xl mt-20'>
          I develope systems that change lives
        </p>
        <br></br>
        <p className='text-xl'>
          i have experience in both designing, developing frontend and
          backend systems.
        </p>
      </div>
    </div>
  )
}

export default About