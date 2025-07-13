import React from 'react'

const About = () => {
  return (
    <div className='p-10 '>
      <h1 className='text-xl text-center  text-gray-700'>
        I’m <span className='text-gray-900 font-medium'>P.Abhishek</span>, a B.Tech 3rd year student at <span className='text-gray-900 font-medium'>Kalasalingam University</span>. I developed a <span className='text-gray-900 font-medium'>language translator</span>  web application using <span className='text-gray-900 font-medium'> React</span> for the frontend, <span className='text-gray-900 font-medium'> Node.js</span>  for the backend, and <span className='text-gray-900 font-medium'> Python</span> for the translation logic. The app uses a deep learning-based translator model to process input text and return accurate translations. The frontend sends requests to the Node.js server, which then communicates with the Python backend to generate and return the translated output.
      </h1>
    </div>
  )
}

export default About