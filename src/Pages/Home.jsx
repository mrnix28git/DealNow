import React from 'react'
import FeaturedListings from '../Components/FeaturedListings'
import { FaArrowAltCircleRight } from "react-icons/fa";
import TestimonialCarousel from '../Components/Testimonial';

const Home = () => {
    return (
        <div className='pt-[73px] text-[#333333]'>
            <div className='text-white relative'>
                <div className='  relative'>
                    <img src="./banner.jpg" alt="" className='h-96 w-full' />
                    <div className='bg-gradient-to-r from-[#1B334BDE] to-[#1B334BB5] h-96 w-full absolute top-0 z-10'></div>
                </div>
                <div className='absolute z-10 top-3 px-28 py-14'>
                    <h1 className='font-semibold text-4xl font-'>List your business for free with the <br /> UAE's leading business listing directory</h1>
                    <p className='text-lg font-light py-7'>
                        The purpose of creating a business listing on GetListedUAE is to make your business <br />noticeable on the Web. Listing created on GetListedUAE increases the chances of being <br />found by customers. It also increases your search result visibility.
                    </p>
                    <button className='bg-[#EE8522] rounded py-2 px-4'>Submit Your Listing</button>
                </div>
            </div>
            <div className='px-28 py-10 text-[#333333] '>
                <div className='w-2/3'>
                    <h1 className='text-2xl pb-6'>Popular Categories</h1>
                    <div className='grid grid-cols-4 gap-6'>
                        <div>
                            <img src="./cate1.jpg" alt="" className='w-40 h-40' />
                            <h1 className='text-base pt-3'>Business & Services</h1>
                        </div>
                        <div>
                            <img src="./cate1.jpg" alt="" className='w-40 h-40' />
                            <h1 className='text-base pt-3'>Business & Services</h1>
                        </div>
                        <div>
                            <img src="./cate1.jpg" alt="" className='w-40 h-40' />
                            <h1 className='text-base pt-3'>Business & Services</h1>
                        </div>
                        <div>
                            <img src="./cate1.jpg" alt="" className='w-40 h-40' />
                            <h1 className='text-base pt-3'>Business & Services</h1>
                        </div>
                        <div>
                            <img src="./cate1.jpg" alt="" className='w-40 h-40' />
                            <h1 className='text-base pt-3'>Business & Services</h1>
                        </div>
                        <div>
                            <img src="./cate1.jpg" alt="" className='w-40 h-40' />
                            <h1 className='text-base pt-3'>Business & Services</h1>
                        </div>
                        <div>
                            <img src="./cate1.jpg" alt="" className='w-40 h-40' />
                            <h1 className='text-base pt-3'>Business & Services</h1>
                        </div>
                        <div>
                            <img src="./cate1.jpg" alt="" className='w-40 h-40' />
                            <h1 className='text-base pt-3'>Business & Services</h1>
                        </div>
                        <div>
                            <img src="./cate1.jpg" alt="" className='w-40 h-40' />
                            <h1 className='text-base pt-3'>Business & Services</h1>
                        </div>
                        <div>
                            <img src="./cate1.jpg" alt="" className='w-40 h-40' />
                            <h1 className='text-base pt-3'>Business & Services</h1>
                        </div>
                        <div>
                            <img src="./cate1.jpg" alt="" className='w-40 h-40' />
                            <h1 className='text-base pt-3'>Business & Services</h1>
                        </div>
                        <div>
                            <img src="./cate1.jpg" alt="" className='w-40 h-40' />
                            <h1 className='text-base pt-3'>Business & Services</h1>
                        </div>
                    </div>
                    <div className='text-center '>
                        <button className='bg-[#EE8522] rounded py-2 px-4 mt-8 '>More Categories</button>
                    </div>
                </div>
            </div>
            {/*feature listing */}
            <div>
                <FeaturedListings />
            </div>

            <div className='px-28 py-10'> 
                <div>
                    <h1 className='text-2xl px-28 py-10 text-center'>Why is GetListedUAE Important for Your Business?</h1>
                </div>
                <div >
                    <div className='grid grid-cols-2 gap-6'>
                        <div>
                            <div className='flex items-center gap-2'>
                                <FaArrowAltCircleRight className='text-[#EE8522] text-lg' />
                                <h1 className='font-semibold'>Improve your business local search visibility</h1>
                            </div>
                            <p className=' pt-2'>
                            80% of people do research online before visiting your website or store. GetListedUAE <br />helps you to improve your business local search visibility.
                            </p>
                        </div>
                        <div >
                            <div className='flex items-center gap-2'>
                                <FaArrowAltCircleRight className='text-[#EE8522] text-lg' />
                                <h1 className='font-semibold'>Improve your business local search visibility</h1>
                            </div>
                            <p className=' pt-2'>
                            80% of people do research online before visiting your website or store. GetListedUAE <br />helps you to improve your business local search visibility.
                            </p>
                        </div>
                        <div>
                            <div className='flex items-center gap-2'>
                                <FaArrowAltCircleRight className='text-[#EE8522] text-lg' />
                                <h1 className='font-semibold'>Improve your business local search visibility</h1>
                            </div>
                            <p className=' pt-2'>
                            80% of people do research online before visiting your website or store. GetListedUAE <br />helps you to improve your business local search visibility.
                            </p>
                        </div>
                        <div>
                            <div className='flex items-center gap-2'>
                                <FaArrowAltCircleRight className='text-[#EE8522] text-lg' />
                                <h1 className='font-semibold'>Improve your business local search visibility</h1>
                            </div>
                            <p className=' pt-2'>
                            80% of people do research online before visiting your website or store. GetListedUAE <br />helps you to improve your business local search visibility.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <TestimonialCarousel />
            </div>

        </div>
    )
}

export default Home