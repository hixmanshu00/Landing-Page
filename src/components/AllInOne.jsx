import React from 'react'
import {CheckIcon} from '@heroicons/react/outline'

const AllInOne = () => {
  return (
    <div name="platforms" className='w-full my-32'>
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className='text-5xl font-bold text-center animate-fade-in-up'>All-In-One Platform</h2>
        <p className='text-2xl text-gray-500 py-8'>Are you tired of the traditional and time-consuming hiring processes? Look no further! Our cutting-edge digital recruitment solution is here to revolutionize the way you hire talented individuals for your organization.</p>
      
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
            <div className='flex'>
                <div>
                <CheckIcon className='w-7 mr-4 text-green-600'/>
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Streamlined Hiring Process</h3>
                    <p className='text-lg pt-2 pb-4'>Say goodbye to stacks of resumes and endless paperwork. Our platform offers a streamlined hiring process that saves you time and effort. Easily manage job postings, applications, and candidate profiles all in one place.</p>
                </div>
            </div>
            <div className='flex'>
                <div>
                <CheckIcon className='w-7 mr-4 text-green-600'/>
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Advanced Candidate Search</h3>
                    <p className='text-lg pt-2 pb-4'>Our powerful search engine allows you to quickly find the perfect candidates for your job openings. Utilize a range of filters to narrow down the talent pool based on skills, experience, location, and more.</p>
                </div>
            </div>
            <div className='flex'>
                <div>
                <CheckIcon className='w-7 mr-4 text-green-600'/>
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Intelligent Matching Algorithm</h3>
                    <p className='text-lg pt-2 pb-4'>Our smart algorithm analyzes job requirements and candidate profiles to provide you with a list of top matches. Say goodbye to manual screening and let our technology do the work for you.</p>
                </div>
            </div>
            <div className='flex'>
                <div>
                <CheckIcon className='w-7 mr-4 text-green-600'/>
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Seamless Collaboration</h3>
                    <p className='text-lg pt-2 pb-4'>Collaborate with your team and hiring managers effortlessly. Share candidate profiles, leave feedback, and schedule interviews within the platform. Stay organized and make informed decisions together.</p>
                </div>
            </div>
            <div className='flex'>
                <div>
                <CheckIcon className='w-7 mr-4 text-green-600'/>
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Candidate Assessment Tools</h3>
                    <p className='text-lg pt-2 pb-4'>Evaluate candidates effectively with our integrated assessment tools. From pre-screening questionnaires to online skills tests, we provide a comprehensive evaluation process to help you make the right hiring decisions.</p>
                </div>
            </div>
            <div className='flex'>
                <div>
                <CheckIcon className='w-7 mr-4 text-green-600'/>
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Data-Driven Insights</h3>
                    <p className='text-lg pt-2 pb-4'>Gain valuable insights and analytics on your recruitment process. Track key metrics, identify bottlenecks, and make data-driven improvements.</p>
                </div>
            </div>
            <div className='flex'>
                <div>
                <CheckIcon className='w-7 mr-4 text-green-600'/>
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Improved Collaboration</h3>
                    <p className='text-lg pt-2 pb-4'>Our platform facilitates seamless collaboration between team members, enabling faster decision-making and a more efficient hiring process.</p>
                </div>
            </div>
            <div className='flex'>
                <div>
                <CheckIcon className='w-7 mr-4 text-green-600'/>
                </div>
                <div>
                    <h3 className='font-bold text-lg'>Time Efficiency</h3>
                    <p className='text-lg pt-2 pb-4'>Reduce the time spent on repetitive tasks and focus on what matters most – finding the best talent for your organization.</p>
                </div>
            </div>
      </div>

      </div>
    </div>
  )
}

export default AllInOne
