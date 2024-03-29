'use client'
import Head from "next/head"
import Image from "next/image"
import Cookies from 'js-cookie'
import Link from "next/link";
import { useEffect, useState } from "react";

function SingleHotel({ hotel }) {

    const [auth, setAuth] = useState(false)
    useEffect(() => {
        const cookies = Cookies.get("user")
        if (cookies) {
            setAuth(true)
            return;
        }
        setAuth(false)
    }, [])
    return (
        <>
            <Head>
                <title>{hotel?.name}</title>
            </Head>
            <div className="w-7/12 mx-auto my-10">
                <Image src={hotel?.banner} alt="imagHotel" width={2000} height={2000} className="h-large-box w-full  my-5" />
                <div className="w-7/12">
                    <h3 className="text-3xl font-bold">{hotel?.name}</h3>
                    <p className="text-xl my-5 text-justify">{hotel?.description}</p>
                    <button className="w-60 h-14 rounded-lg bg-blue-400 text-lg">Price: &#8377; {hotel?.price}</button>
                    <p className="text-3xl font-bold my-5">Facilities:</p>
                    {/* <ul className="flex text-xl justify-between">
                    <li>Swimming Pool</li>
                    <li>Dogs</li>
                    <li>Garden</li>
                    <li>Loundry</li>
                    <li>Cricket</li>
                </ul> */}
                    <ul className="flex text-xl justify-between" >
                        {
                            hotel ? hotel.facilities?.map((ele) => {
                                return (

                                    <li key={ele.name} className="mr-10 mb-3 flex items-center">
                                        <span><Image src={ele.img} width={200} height={200} className="w-8 h-8 rounded-full" aly="abc" /></span>
                                        <span className="ml-5">{ele.name}</span>
                                    </li>

                                )
                            }) : ""
                        }
                    </ul>

                    {auth ? <Link href={`/payment/${hotel?._id}`}><button className="w-60 h-14 rounded-lg bg-red-400 text-lg my-5">Book Now</button></Link> : <span className="text-2xl">Please <Link href={'/login'} className="text-blue-500">Log in </Link>to get new offers!</span>}
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(ctx) {
    const res = await fetch(`https://oyo-clone-fullstack.vercel.app/api/hotels/${ctx.query.id}`)
    const data = await res.json()
    return {
        props: {
            hotel: data.hotel
        }
    }
}
export default SingleHotel