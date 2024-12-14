import Navbar from '@/components/navbar/page'
import React from 'react'
import Image from 'next/image'
import img from "@/components/images/Group 7888.png"
import img1 from "@/components/images/Group 176.png"
import img2 from "@/components/images/Group 171.png"
import img3 from "@/components/images/Group 184.png"
import img4 from "@/components/images/Frame 161.png"
import Footer from '@/components/footer/page'
export default function Blog() {
  return (
    <div className='py-4'>
      <Navbar/>
      <Image src={img}  height={316} width={1440} alt="pic"></Image>
      <div className='flex'>
      <div className=' sm:grid grid-cols-1 md:flex'>
        <div>
        <Image src={img1}  height={334} width={350} alt="pic"></Image>
        </div>
        <Image src={img2}  height={334} width={350} alt="pic"></Image>
        <Image src={img3}  height={650} width={393} alt="pic"></Image>
      </div>
      <Image src={img4}  height={270} width={1440} alt="pic"></Image>
      <br/>
      <br/>
      
      <Footer/>
    </div>
  )
}
