"use client"
import Banner from '@public/assets/images/banner.jpg'
import Image from 'next/image'

import { useEffect } from 'react';

const Home = () => {


    return (
        <div className='bg-black h-3/4 overflow-hidden relative'>
            <Image src={Banner} className='w-full h-full object-cover blur-sm' alt="banner"></Image>
            <div className='group bg-black inset-0 absolute opacity-75'></div>
           
            <h1 className='text-white font-bold bottom-20 left-5 text-4xl absolute'>Stream thousands of Movies</h1>
        </div>
    );
}

export default Home;
