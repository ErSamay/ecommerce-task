import React from 'react'
import "./Hero.css"
import hand_icon from "../Assets/hand_icon.png"
import arrow_icon from "../Assets/arrow.png"
import hero_image from "../Assets/hero_image.png"

function Hero() {
  return (
    <div className='hero h-screen bg-gradient-to-b from-#aabbcc to-#ddeeff flex'>
        <div className="hero-left flex-1 flex flex-col justify-center gap-5 pl-20 leading-tight">
            <h2 className='text-#090909 text-86 font-semibold'>New Arrivals Only</h2>
            <div>
                <div className='hero-hand-icon flex items-center gap-5'>
                    <p className=' text-#171717 text-90 font-bold'>new</p>
                    <img className='w-28' src={hand_icon} alt="" />

                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className='hero-latest-btn flex justify-center items-center gap-3 w-80 h-16 rounded-full mt-8 bg-#ff4141 text-white text-22 font-semibold'>
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />

            </div>
        </div>
        <div className="hero-right flex-1 flex justify-center items-center">
            <img className='h-4/5 object-cover' src={hero_image} alt='' /> 

        </div>

    </div>
  )
}

export default Hero