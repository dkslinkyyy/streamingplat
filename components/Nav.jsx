"use client"

import Link from 'next/link'

import { useState, useEffect } from 'react';
import {
    signIn, signOut,
    useSession, getProviders
} from 'next-auth/react'

const Nav = () => {
    const isUserLoggedIn = true;
    return (
        <nav className="flex text-white justify-between items-center w-full mb-8 py-8 px-8">
            <Link href="/" className='flex gap-2 flex-center'>
                <p className='font-semibold text-ital'>Streamingplat</p>
           </Link>
            <div className='sm:flex hidden'>
                {isUserLoggedIn ? (
                    <div className='text-white gradient font-semibold py-2 px-4 rounded-md'>
                        <Link href="/browse" className=''>
                            Sign Up
                        </Link>
                    </div>
                ) :
                <></>}

            </div>
        </nav>
    );
}

export default Nav;