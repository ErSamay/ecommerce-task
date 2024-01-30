import React from 'react'
import "./NewsLetter.css"

function NewsLetter() {
  return (
    <div className='newsletter w-65 h-40vh flex flex-col items-center justify-center mx-auto px-0 sm:px-140 mb-150 bg-gradient-to-b from-#aabbcc to-#ddeeff gap-30'>
        <h1 className='text-35 font-semibold'>Get Exclusive Offers On Your Email</h1>
        <p className='text-20'>Subscribe to our newletter and stay updated</p>
        <div className='flex items-center justify-between bg-white w-730 h-70 rounded-full border border-solid'>
            <input className='w-300 ml-20 border-none outline-none font-Poppins text-16' type="email"placeholder='Your Email id' />
            <button className='rounded-full text-16 cursor-pointer'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter