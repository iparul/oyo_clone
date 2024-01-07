"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Block from './Block'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

function Header1() {
    const [auth, setAuth] = useState(false)
    const router = useRouter()


    useEffect(() => {
        const key = Cookies.get("user")
        if (key) {
            setAuth(true)
            return
        }
        setAuth(false)
    }, [auth])
    const handleLogout = () => {
        Cookies.remove("user")
        setAuth(false)
        router.push("/login")
    }

    return (
        <div className=' flex justify-between border-b-2 border-gray-300 items-center h-24 px-10'>
            <Image src={'/logo.png'} alt="oyo" width={200} height={200} className='w-28 h-28' />
            <div className=' border-gray-300 h-full flex'>
                {/* <Block title={'Become  member'} pera={'Addititonal  0% off on stays.'} /> */}
                <Block title={'OYO for business'} pera={'Trusted by 5000 corporates.'} img={"/business.svg"} />
                <Block title={'List your property'} pera={'Start earning in 30 min'} img={"/property.svg"} />
                <Block title={'98765438733'} pera={'Call us to bbok now.'} img={"/call.svg"} />
                <div className='flex items-center px-3' >
                    <Image src={'/person-4.webp'} height={200} width={200} className="w-10 h-10 rounded-full mr-5" alt="oyo" />
                </div>


                {auth ?
                    <h3 className='font-bold cursor-pointer flex items-center' onClick={handleLogout}>Log Out</h3>
                    : <Link href={"/login"}>
                        <h3 className='font-bold'>Login / Signup</h3>
                    </Link>}
            </div>
        </div>
    )
}

export default Header1