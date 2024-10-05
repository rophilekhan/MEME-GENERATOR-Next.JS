// import Image from 'next/image';
// import React from 'react'

import React from 'react'

const page = async () => {
  const memes = await fetch('https://api.imgflip.com/get_memes')
  const response = await memes.json()
  console.log(response.data.memes);
  

  return (
    <>
    <h1 className='text-center mt-5 text-5xl font-bold'>
    Meme Generator
    </h1>
    <h4 className='text-center mt-5 text-5xl font-bold'>
    Do You want to Generate Memes Click on Image 
    </h4>
    </>
  )
}

export default page


