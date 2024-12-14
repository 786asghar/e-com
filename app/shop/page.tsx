import React from 'react'
import Navbar from '../../components/navbar/page'
import Image from 'next/image'
import img2 from "@/components/images/Group 63.png"
import img1 from "@/components/images/Group 78.png"

import img3 from "@/components/images/Images1.png";
import img4 from "@/components/images/Description1.png";
import img5 from "@/components/images/Group 95.png";
import img7 from "@/components/images/Description2.png";
import img6 from "@/components/images/Images2.png"
import img8 from "@/components/images/Featured Products.png"
import Link from 'next/link'
import img9 from "@/components/images/Frame 8.png"
import img10 from "@/components/images/Frame 72.png"
import img11 from "@/components/images/Feature.png"
import Footer from '@/components/footer/page'

function Shop() {
  return (
    <div className='py-4'>
      <Navbar/>
     <div>
    <Image src={img1} height={316} width={1440} alt="pic"></Image>
    </div>
    <div>
    <Image src={img2} height={100} width={1440} alt="pic"></Image>
    </div>
    <div className='flex  p-3 gap-4'>
      <div>
    <Image src={img3} height={301} width={285} alt="pic"></Image>
    <Image src={img4} height={99} width={249} alt="pic"></Image>
    </div>

    <div>
      <div>
   
    <Link href="/product"> <Image src={img5}  height={301} width={285} alt="pic"></Image></Link></div>

    
    <p className='font-bold text-3xl textt'>Asgaard sofa</p>
    <p className='font-bold text-2xl'>Rp. 250,000.00</p>
    <p className='text-xs sm:text-ms md:text-base lg:xl xl:2xl'>Asgaard sofa</p>
    <p className='text-xs sm:text-ms md:text-base xl:text-xl lg:text-lg '>Rp. 250,000.00</p>
    </div>
    
      <div >
      <Image src={img6} height={301} width={285} alt="pic"></Image>
      <Image src={img7} height={99} width={249} alt="pic"></Image>
      </div>

      <div>
      <Image src={img8} height={446} width={285} alt="pic"></Image>
      </div>
    </div>
    <div className=''>
    <Image src={img9} height={446} width={1236} alt="pic"></Image>
    </div>
    <div className=''>
    <Image src={img9} height={446} width={1236} alt="pic"></Image>
    </div>
    <div className=''>
    <Image src={img9} height={446} width={1236} alt="pic"></Image>
    </div>
    <div className='flex justify-center'>
    <Image src={img10} height={90} width={392} alt="pic"></Image>
    </div>
    <br/>
    <div className='txtt'>
    <Image src={img11} height={70} width={1334} alt="pic"></Image>
    </div>
    <br/>
    <Footer/>
    </div>
  )
}

export default Shop
