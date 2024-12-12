import React from 'react'
import Navbar from '@/components/navbar/page'
import Image from 'next/image'
import img from "@/components/images/8888.png"
import img1 from "@/components/images/Group 165.png"
import img2 from "@/components/images/Frame 161.png"
import Footer from '@/components/footer/page'

function Productcom() {
  return (
    <div className='py-4'>
        <Navbar/>
      < Image src={img}  height={316} width={1440} alt="pic"></Image>
      < Image src={img1}  height={2645} width={1332} alt="pic"></Image>
      < Image src={img2}  height={270} width={1440} alt="pic"></Image>
      <br/>
      <br/>
      <Footer/>
    </div>
  )
}

export default Productcom
