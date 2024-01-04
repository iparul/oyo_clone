"use client"

import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react'
import axios from "axios"
import Cookies from "js-cookie"
import { useRouter } from 'next/router'

const Login = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [login, setLogin] = useState(false)
    const router = useRouter()

    const singUp = async () => {
        try {
            const res = await axios.post(`/api/user/register`, {
                email, password, name
            })
            if (res?.data) {
                Cookies.set('user', res.data.token, { expires: 7 })
                alert(res.data.msg)
                router.back()
            }
        } catch (err) {
            alert(err?.response?.data?.msg)
        }

    }

    const handleLogin = async () => {
        try {
            const res = await axios.post(`/api/user/login`, {
                email, password
            })

            if (res?.data.msg == "User login succesuflly") {
                Cookies.set('user', res.data.token, { expires: 7 })
                alert(res.data.msg)
                router.back()
            } else {
                alert(res.data.msg)
            }
        } catch (err) {
            console.log("****", err?.response?.data?.msg)
            alert(err?.response?.data?.msg)
        }

    }

    const handleToggle = () => {
        setLogin(!login)
    }

    return (
        <div>
            <Head>
                <title>
                    OYO : Login!.
                </title>

            </Head>
            <div className='flex h-screen justify-center items-center relative bg-login-background bg-no-repeat bg-cover'>
                <div className='absolute top-10 px-20 flex items-center w-full'>
                    <Image src={'/logo.png'} alt="oyo" width={100} height={100} className='w-18 h-18' />
                    <p className='font-bold text-2xl text-white'>Hotels and homes across 800 cities, 24+ countries</p>
                </div>
                <div className='flex justify-center items-center w-9/12'>
                    <div>
                        <p className='font-bold text-5xl text-justify text-white'>There’s a smarter way to OYO around</p>
                        <p className='font-bold text-2xl mt-5 text-justify text-white'>Sign up with your phone number and get exclusive access to discounts and savings on OYO stays and with our many travel partners.</p>
                    </div>
                    <div className='ml-20 w-10/12 border h-100 pb-40 bg-slate-50'>
                        <p className='h-10 px-10 text-white flex items-center bg-gradient-to-r from-orange-600 to bg-red-800 font-bold'>Sign up & Get
                            ₹500
                            OYO Money</p>
                        <div className='px-10'><h3 className='text-5xl font-bold my-5'>Login / Signup</h3>
                            <p className='font-bold text-lg mb-1'>Please enter your phone number to continue</p>
                            {login ? "" : <input type="text" placeholder='Enter your name...' className="border-2 my-3 border-gray-300 px-3 py-1  h-10 w-96" onChange={(e) => setName(e.target.value)} />}
                            <input type="email" placeholder='Enter your email...' className="border-2 my-3 border-gray-300 px-3 py-1  h-10 w-96" onChange={(e) => setEmail(e.target.value)} />

                            <input type="password" placeholder='Enter your password...' className="border-2 my-3 border-gray-300 px-3 py-1  h-10 w-96" onChange={(e) => setPassword(e.target.value)} />
                            <button className='w-96 h-14 text-lg font-bold bg-rose-400 hover:cursor-pointer hover:bg-red-600 text-white my-5 rounded-lg' onClick={login ? handleLogin : singUp}>{login ? "Login" : "Sign Up"}</button>
                            <p className='my-1 text-xl'>
                                <span>{login ? "Don't have an account?" : "Already have an account?"}</span>
                                <span className='ml-1 border-b-2 border-red-500 text-red-600 pd-1 hover:cursor-pointer' onClick={handleToggle}>{login ? "Sing Up" : "Login"}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login