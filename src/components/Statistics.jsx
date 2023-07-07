import React from 'react';
import statisticData from '../data';
import image1 from '../../images/icon-brand-recognition.svg';
import image2 from '../../images/icon-detailed-records.svg';
import image3 from '../../images/icon-fully-customizable.svg';

function Statistics() {
  return (
    <>
      <div className='bg-[#F5F5F5] md:pb-28 md:pt-12 pt-12'>
        <div className='text-center my-8'>
          <p className='md:text-4xl text-2xl font-bold my-2'>Advanced Statistics</p>
          <div className='md:text-center'>
            <p className='text-gray-700'>Track how your links are performing access on the web with our advance statistics dashbord</p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row py-8 md:py-0 justify-center align-middle items-center'>

          <div id='cards' className="py-12 my-8 rounded-md shadow-md  md:mx-12 px-4 relative card flex flex-col justify-center md:text-center md:items-start items-center md:justify-start bg-white">
            <div className="image absolute bottom-[10rem] md:left-8 md:bottom-[10.5rem] px-2 py-2 bg-[#2BD0D0] flex justify-center rounded-full">
              <img id='card_image' src={image1} alt="logo" className='w-[40px] h-[40px] object-cover' />
            </div>

            <div className='md:text-left'>
              <p className='text-xl py-2 font-bold'>Brand Recognigation</p>
            </div>

            <div className='md:text-left text-center'>
              <p className='text-sm max-w-[300px]'>
                Boost your Brand Recognition with each click. Generic links dont mean a thing. Branded links instal confidence in your content
              </p>
            </div>
            <div className='line1'>
              <div id='line' className='absolute h-[4rem] w-1 top-[12rem] md:top-28 md:h-1 md:w-[6.1rem] bg-[#2BD0D0] md:absolute md:left-[20.6rem] md:bottom-[5rem]' />
            </div>
          </div>

          <div id='cards' className="py-12 my-8 rounded-md shadow-md  md:mx-12 px-4 relative card flex flex-col justify-center md:text-center md:items-start items-center md:justify-start bg-white">
            <div className="image absolute bottom-[10rem] md:left-8 md:bottom-[10.5rem] px-2 py-2 bg-[#2BD0D0] flex justify-center rounded-full">
              <img id='card_image' src={image2} alt="logo" className='w-[40px] h-[40px] object-cover' />
            </div>

            <div className='md:text-left'>
              <p className='text-xl py-2 font-bold'>Detailed Records</p>
            </div>

            <div className='md:text-left text-center'>
              <p className='text-sm max-w-[300px]'>
                Boost your Brand Recognition with each click. Generic links dont mean a thing. Branded links instal confidence in your content
              </p>
            </div>
            <div className='line1'>
              <div id='line' className='absolute h-[4rem] w-1 top-[12rem] md:top-28 md:h-1 md:w-[6.1rem] bg-[#2BD0D0] md:absolute md:left-[20.6rem] md:bottom-[5rem]' />
            </div>
          </div>

          <div id='cards' className="py-12 my-8 rounded-md shadow-md  md:mx-12 px-4 relative card flex flex-col justify-center md:text-center md:items-start items-center md:justify-start bg-white">
            <div className="image absolute bottom-[10rem] md:left-8 md:bottom-[10.5rem] px-2 py-2 bg-[#2BD0D0] flex justify-center rounded-full">
              <img id='card_image' src={image3} alt="logo" className='w-[40px] h-[40px] object-cover' />
            </div>

            <div className='md:text-left'>
              <p className='text-xl py-2 font-bold'>Fully Customizable</p>
            </div>

            <div className='md:text-left text-center'>
              <p className='text-sm max-w-[300px]'>
                Boost your Brand Recognition with each click. Generic links dont mean a thing. Branded links instal confidence in your content
              </p>
            </div>
            <div className='line1'>
              <div id='line' className='hidden absolute h-[4rem] w-1 top-[12rem] md:top-28 md:h-1 md:w-[6.1rem] bg-[#2BD0D0] md:absolute md:left-[20.6rem] md:bottom-[5rem]' />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Statistics
