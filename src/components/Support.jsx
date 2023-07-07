import React from 'react'
import {ShieldCheckIcon, ArrowSmRightIcon} from '@heroicons/react/outline'
import {ChipIcon, SupportIcon} from '@heroicons/react/solid'
import supportImg from '../assets/support.jpg'

const Support = () => {
  return (
    <div name="support" className='w-full mt-24'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={supportImg} alt="/" />
      </div>

      <div className='max-w-[1240px] mx-auto text-white relative'> 
        <div className='px-4 py-12'>
            <h2 className='pt-8 text-center text-slate-300 text-3xl animate-fade-in-up'>Support</h2>
            <h3 className='text-5xl font-bold py-6 text-center'>Expert assistance just a click away</h3>
            <p className='py-4 text-3xl text-slate-300'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt natus dolore expedita quos? Quis sint voluptates vel voluptas exercitationem natus.
            </p>
        </div>

        <div className='grid lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
        <div className='bg-white rounded-xl shadow-2xl'>
                <div className='p-8'>
                    <ShieldCheckIcon className='w-16 p-4 rounded-lg bg-indigo-600 text-white mt-[-4rem]' />
                    <h3 className='font-bold text-2xl my-6'>Data Security</h3>
                    <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus id itaque voluptas, ipsum earum voluptates facilis assumenda cum cumque fugit!</p>
                    <button className='bg-slate-100 py-4 w-full my-4'>
                        <p className='flex items-center text-indigo-600 px-2 hover:translate-x-4 hover:scale-110 hover:font-semibold duration-150 capitalize'>Contact us <ArrowSmRightIcon className='w-5 ml-2 '/></p>
                    </button>
                </div>
            </div>            
            <div className='bg-white rounded-xl shadow-2xl'>
                <div className='p-8'>
                    <SupportIcon className='w-16 p-4 rounded-lg bg-indigo-600 text-white mt-[-4rem]' />
                    <h3 className='font-bold text-2xl my-6'>Techinical Support</h3>
                    <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus id itaque voluptas, ipsum earum voluptates facilis assumenda cum cumque fugit!</p>
                    <button className='bg-slate-100 py-4 w-full my-4'>
                        <p className='flex items-center text-indigo-600 px-2 hover:translate-x-4 hover:scale-110 hover:font-semibold duration-150'>Contact Us <ArrowSmRightIcon className='w-5 ml-2 '/></p>
                    </button>
                </div>
            </div>
            <div className='bg-white rounded-xl shadow-2xl'>
                <div className='p-8'>
                    <ChipIcon className='w-16 p-4 rounded-lg bg-indigo-600 text-white mt-[-4rem]' />
                    <h3 className='font-bold text-2xl my-6'>24/7 Customer Support</h3>
                    <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus id itaque voluptas, ipsum earum voluptates facilis assumenda cum cumque fugit!</p>
                    <button className='bg-slate-100 py-4 w-full my-4'>
                        <p className='flex items-center text-indigo-600 px-2 hover:translate-x-4 hover:scale-110 hover:font-semibold duration-150'>Contact Us <ArrowSmRightIcon className='w-5 ml-2 '/></p>
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Support
