import React from 'react'
import { FaFlag } from "react-icons/fa";

const Header = () => {
    return (
        <div className='bg-[#334455] text-white flex justify-between text-base px-28 py-2 fixed top-0 w-full'>
            <div>
                <img src="./logo.png" alt="" />
            </div>
            <div className='flex items-center  gap-5'>
                <h1 className='bg-[#EE8522] rounded py-2 px-4'>Create Listing</h1>
                <h1>Listings</h1>
                <h1 className='bg-[#3957EA] py-2 px-4 rounded'>Featured</h1>
                <h1>Categories</h1>
                <h1>Guest Post</h1>
                <h1>Login</h1>
                <FaFlag />
            </div>
        </div>
    )
}

export default Header