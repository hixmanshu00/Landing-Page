import React from 'react'
import CountUp from 'react-countup';

const About = () => {
  return (
    <div name="about" className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-center delay-2000 animate-fade-in-up'>
            <h2 className='text-5xl font-bold'>Trusted by HRs and Managers across the world</h2>
            <p className='text-3xl py-6 text-gray-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum alias laborum mollitia porro consectetur maiores eaque at doloremque adipisci neque.</p>
        </div>
        <div className='grid md:grid-cols-3 text-center'>
            <div className='border py-8 rounded-xl shadow-xl'>
                <p className='text-6xl font-bold text-indigo-600'><CountUp start={0} end={100} delay={2.5}    duration={3.75}
    useEasing={true} />%</p>
                <p className='mt-2 text-gray-500'>Completion</p>
            </div>
            <div className='border py-8 rounded-xl shadow-xl'>
                <p className='text-6xl font-bold text-indigo-600'><CountUp start={0} end={250}  delay={2.5}   duration={3.75}
    useEasing={true}/>K+</p>
                <p className='mt-2 text-gray-500'>Deliveries</p>
            </div>
            <div className='border py-8 rounded-xl shadow-xl'>
                <p className='text-6xl font-bold text-indigo-600'><CountUp start={0} end={500}  delay={2.5}   duration={3.75}
    useEasing={true} />K+ </p>
                <p className='mt-2 text-gray-500'>Transactions</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
