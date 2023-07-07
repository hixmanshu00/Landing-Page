import React from 'react'
import {CheckIcon} from '@heroicons/react/solid'

const Pricing = () => {
  return (
    <div name="pricing" className='w-full my-24 text-white'>
      <div className="absolute w-full bg-slate-900 h-[800px] mix-blend-overlay"></div>

      <div className='max-w-[1240px] mx-auto py-12 '>
        <div className='text-center py-8 text-slate-300 animate-fade-in-up'>
            <h2 className='text-3xl uppercase'>Pricing</h2>
            <h3 className='text-5xl font-bold text-white py-8'>The right price for your hiring solution</h3>
            <p className='text-3xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas maxime voluptatum explicabo rem sed. Voluptatibus consectetur eum officia ad praesentium!</p>
        </div>
      
        <div className='grid md:grid-cols-2'> 
            <div className='bg-white text-slate-900 rounded-xl shadow-2xl m-4 p-8 relative'>
                <span className='uppercase px-3 py-1 rounded-2xl text-indigo-900 text-sm bg-indigo-200'>Standard</span>
            
            <div>
                <p className='text-6xl font-bold py-4 flex'>$49<span className='text-xl flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <div className='text-2xl'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                <button className='w-full py-4 px-4 bg-slate-900'>Get Started</button>
            </div>
            </div>
            <div className='bg-white text-slate-900 rounded-xl shadow-2xl m-4 p-8 relative'>
                <span className='uppercase px-3 py-1 rounded-2xl text-indigo-900 text-sm bg-indigo-200'>Premium</span>
            
            <div>
                <p className='text-6xl font-bold py-4 flex'>$99<span className='text-xl flex flex-col justify-end'>/mo</span></p>
            </div>
            <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            <div className='text-2xl'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-green-600'/>Lorem, ipsum dolor.</p>
                <button className='w-full py-4 px-4 bg-slate-900'>Get Started</button>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Pricing
