import Image from 'next/image'
import React from 'react'

const Page = async () => {
  const response = await fetch('https://api.imgflip.com/get_memes')
  const data = await response.json()
  console.log(data.data.memes);

  return (
    <>
      <h1 className='text-center mt-5 text-5xl font-bold'>
        Meme Generator
      </h1>
      <h4 className='text-center mt-2 font-bold'>
        Do You want to Generate Memes Click on Image 
      </h4>
      <section className='mx-auto container'>
        <div className='flex flex-wrap justify-between mt-10 gap-3'>
          {data.data.memes.map((item) => (
            <div className='justify-center items-center' key={item.id}>
              <Image src={item.url} alt={item.name} height={300} width={300} priority={true} />
              <p className='text-center font-bold text-xl mt-5 mb-3'>{item.name} 
                <button className=" btn btn-sm btn-neutral ml-7"> Edit</button></p>
              
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Page