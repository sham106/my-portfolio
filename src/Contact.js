import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b
    from-green-800 to-blue-800 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg
      mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4
          border-green-300'>Contact</p>
          <p className='py-6'>What to get in touch with me send 
            me an Email below
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <form action='https://getform.io/f/93e45a98-
          753e-45e6-ae92-03fc7173dd40'
          method='POST'
           className='flex flex-col w-full md:w-1/2'>
            <input type='text' name='name' 
            placeholder='enter your name'
            className='p-2 bg-transparent border-2 rounded-md
            text-white focus:outline-none'></input>

            <input type='text' name='email' 
            placeholder='enter your email'
            className='p-2 bg-transparent border-2 rounded-md
            text-white focus:outline-none my-4'></input>

            <textarea name='text'
            rows={10}
            placeholder='enter your message'
            className="p-2 bg-transparent border-2 rounded-md
            text-white focus:outline-none"></textarea >

            <button className='text-white bg-gradient-to-b 
            from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex
            items-center rounded-md hover:scale-110 duration-300'>Let's catch up</button>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact