import React from 'react'
import {
    FaTwitch,
    FaFacebook,
    FaGithub,
    FaInstagram,
    FaTwitter,
  } from "react-icons/fa";
const Footer = () => {
  return (
    <div className='w-full mt-24 bg-slate-900 text-gray-300 py-8 px-2'>
        <div className=' grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
        <div className="">
          <h6 className="font-bold uppercase p-2 ">Solutions</h6>
          <ul>
            <li className="py-1 text-sm hover:text-white cursor-pointer">
              Analytics
            </li>
            <li className="py-1 text-sm hover:text-white cursor-pointer">
              Marketing
            </li>
            <li className="py-1 text-sm hover:text-white cursor-pointer">
              Commerce
            </li>
            <li className="py-1 text-sm hover:text-white cursor-pointer">
              Insights
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase p-2">Support</h6>
          <ul>
            <li className="py-1 text-sm hover:text-white cursor-pointer">
              Pricing
            </li>
            <li className="py-1 text-sm hover:text-white cursor-pointer">
              Documentation
            </li>
            <li className="py-1 text-sm hover:text-white cursor-pointer">
              Guides
            </li>
            <li className="py-1 text-sm hover:text-white cursor-pointer">
              API Status
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase p-2">Company</h6>
          <ul>
            <li className="py-1 text-sm hover:text-white cursor-pointer">
              About
            </li>
            <li className="py-1 text-sm hover:text-white cursor-pointer">
              Blogs
            </li>
            <li className="py-1 text-sm hover:text-white cursor-pointer">
              Jobs
            </li>
            <li className="py-1 text-sm hover:text-white cursor-pointer">
              Press
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase p-2">Legal</h6>
          <ul>
            <li className="py-1 text-sm hover:text-white cursor-pointer">
              Claim
            </li>
            <li className="py-1 text-sm hover:text-white cursor-pointer">
              Policy
            </li>
            <li className="py-1 text-sm hover:text-white cursor-pointer">
              Terms
            </li>
          </ul>
        </div>
        <div className='col-span-2 pt-8 md:pt-2'>
            <p className='font-bold uppercase'>Subscribe to our newsletter</p>
            <p className='py-4'>The latest news, article and resources, sent to your inbox weekly.</p>
            <form className='flex flex-col sm:flex-row'>
                <input type="email" className='w-full p-2 mr-4 rounded-md mb-4'placeholder='Enter email'/>
                <button className='p-2 mb-4'>Subscribe</button>
            </form>
        </div>
      </div>
      <div className='flex flex-col max-w-[1240px] px-2 py-4  mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2023 Himanshu Rajput, LLC. All rights reserved.</p>
        <div className='flex justify-between sm:w-[300px]  text-2xl pt-4'>
            <FaFacebook className='hover:text-white cursor-pointer hover:translate-y-[-10px] duration-300'/>
            <FaInstagram className='hover:text-white cursor-pointer hover:translate-y-[-10px] duration-300'/>
            <FaTwitter className='hover:text-white cursor-pointer hover:translate-y-[-10px] duration-300'/>
            <FaGithub className='hover:text-white cursor-pointer hover:translate-y-[-10px] duration-300'/>
            <FaTwitch className='hover:text-white cursor-pointer hover:translate-y-[-10px] duration-300'/>
        </div>
      </div>
    </div>
  )
}

export default Footer
