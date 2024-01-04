import Header2 from '@/pages/component/Header2'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Banner from './component/Banner'
import Footer from './component/Footer'
import Header1 from './component/Header1'
import Header4 from './component/Header4'

const index = () => {
  return (
    <div>
      <Head>
        <title>
          OYO : India`s Best Online Hotel Booking Site For Sanitized Stay.
        </title>

      </Head>
      <Header1 />
      <Header2 />
      <Banner />
      <div className='mx-20 my-14'>
        <Image src={'/banner1.avif'} alt="banner1" width={200} height={200} className="h-60 w-full" />
      </div>
      <div className='mx-20 mb-14'>
        <Image src={'/banner2.avif'} alt="banner1" width={200} height={200} className="h-40 w-full" />
      </div>
      <Header4 />
      <Footer />
    </div>
  )
}

export default index