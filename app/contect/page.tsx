import React from 'react'
import Image from 'next/image'

import Navbar from '@/components/navbar/page'
import img from "@/components/images/group 888.png"
import img1 from "@/components/images/Group 1611.png"
import img2 from "@/components/images/Frame 161.png"
import Footer from '@/components/footer/page'
function Contect() {
  return (
    <div className='py-4'>
      <Navbar/>
      <Image src={img}  height={316} width={1440} alt="pic"></Image>
      <p className='text-center text-3xl font-bold py-4'>Get In Touch With Us</p>
      <p className=' text-center'>For More Information About Our Product & Services. Please Feel Free To Drop Us<br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
      <Image src={img1}  height={923} width={1058} alt="pic"></Image>
      <Image src={img2}  height={270} width={1440} alt="pic"></Image>
      <br/>
      <br/>
      <Footer/>
    </div>
  )
}

export default Contect
