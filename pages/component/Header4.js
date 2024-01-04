'use client'

import Image from "next/image"

const Header4 = () => {
    return (
        <div className="flex justify-between mx-20 my-14 border-2 border-gray-300 px-5  rounded-xl">

            <div className="flex justify-center items-center">
                <Image src={"/fire.jpg"} width={200} height={200} alt="fire" className="w-32 h-32 rounded-full mr-5" />
                <div className="text-xl">
                    <p className="font-bold">Get access to exclusive deals</p>
                    <p>Only the best deals reach your inbox</p></div>
            </div>
            <div className="flex items-center">
                <input type="email" className="px-4 py-2 outline-none border border-gray-300 rounded-lg mr-5 w-80 h-16" placeholder="e.g. jonhe@gmail.com" />
                <button type="submit" className="w-48 h-14 bg-red-500 text-xl text-white cursor-pointer rounded-lg">Notify</button>
            </div>
        </div>
    )
}

export default Header4