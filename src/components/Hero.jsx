import React from 'react';
import HomeImage from '../../images/illustration-working.svg';

function Hero() {
    return (
        <>
            <div className='flex justify-center md:pt-20 md:mb-20'>
                <div className='flex align-middle md:flex-row flex-col-reverse  items-center justify-between md:w-[1400px]'>
                    <div className=''>
                        <h1 className='md:text-7xl md:text-left md:py-2 text-center text-4xl font-extrabold'>More than just <br /> shorter links</h1>
                        <p className='text-gray-400 font-medium md:text-lg text-lg md:text-left text-center py-4 md:mb-4 mb-2'>Build your brand recognition and get detailed <br /> insights on how your links are performing</p>

                        <div className='flex md:justify-start justify-center'>
                            <button className='py-3 text-base font-medium text-white bg-[#2BD0D0] rounded-full bg-primary px-7 hover:bg-opacity-90'>Get Started</button>
                        </div>
                    </div>
                    <div className=''>
                        <img className='md:w-full md:pb-0 pb-8 w-[350px]' src={HomeImage} alt="hero-image" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
