import React from 'react'
import Navbar from '@/components/navbar/page'
import Image from 'next/image'
import img1 from "@/components/images/Group 84.png"
import img2 from "@/components/images/Group 85.png"
import img3 from "@/components/images/Group 62.png"
import img4 from "@/components/images/Group 102.png"
import img5 from "@/components//images/Group 110.png"
import img6 from "@/components/images/Group 19.png"
import Footer from '@/components/footer/page'
import img7 from "@/components/images/Group 88.png"
import img8 from "@/components/images/Group 92.png"
import img9 from "@/components/images/Rectangle 42.png"
import img10 from "@/components/images/Rectangle 43.png"
import img11 from "@/components/images/Rectangle 44.png"
import img12 from '@/components/images/Group 93.png'
import { Button } from '@/components/ui/button'
import img13 from "@/components/images/akar-icons_facebook-fill.png"
import img14 from "@/components/images/akar-icons_linkedin-box-fill.png"
import img15 from "@/components/images/ant-design_twitter-circle-filled.png"
import img16 from "@/components/images/Group 21.png"
import img17 from "@/components/images/Group 101.png"
import Link from 'next/link'
import { Grid } from 'lucide-react'
function Product
() {
  return (
    <div>
      <div className='py-4 mx-5'>
      <Navbar/>
      </div>
      <br/>

      <div className="pro flex justify-normal bg-red-100 p-5">
      <Image src={img1}  height={24} width={70} alt="pic"></Image>
      <Image src={img2}  height={24} width={82} alt="pic"></Image>
      <Image src={img3}  height={37} width={142} alt="pic"></Image>
      </div>

      <div className='flex '>
        <div className=''>
        <div className='sm:width{600}'>
        <Image src={img4}  height={500} width={1440} alt="pic"></Image>
        </div>

      <div>
      <div className='w-1440 h-820'>
        <div><p className='as bg-white text-3xl p-4'>Asgaard sofa</p></div>
        <div><p className='rs'>Rs. 250,000.00</p></div>
      </div>

       <div className='flex p-4'>
        <div className=''>
         <Image src={img7}  height={20} width={124} alt="pic"></Image></div>
        <p className='cu'>5 Customer Review</p></div>
        <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
       </p>

      <div className='p-4'>
        <Image src={img8}  height={20} width={124} alt="pic"></Image></div>
      <div className='flex gap-4'>
        <Image src={img9}  height={30} width={30} alt="pic"></Image>
        <Image src={img10}  height={30} width={30} alt="pic"></Image>
        <Image src={img11}  height={30} width={30} alt="pic"></Image>
      </div>

      <div className='flex justify-between p-4 gap-4'>
        <Image src={img12}  height={64} width={123} alt="pic"></Image>
        <Link href="/cart"><Image src={img16}  height={64} width={215} alt="pic"></Image></Link>
        <Link href="/comparison"><Image src={img17}  height={64} width={215} alt="pic"></Image> </Link></div>
      <div className='sm:grid grid-cols-1 md:flex gap-3'>
        <Image src={img12}  height={40} width={123} alt="pic"></Image>
        <Link href="/cart"><Image src={img16}  height={64} width={123}  alt="pic"  ></Image></Link>
        <Link href="/comparison"><Image src={img17}  height={64} width={123} alt="pic" ></Image> </Link></div>
      </div>
  </div>
      <div className='text-center py-4'>
      <div className='text-center py-4 sm:text-sm md:base lg:lg'>
       <p className='font-bold'>SKU       :  SS001</p> 
       <p className='font-bold'>Category  :  Sofas</p>
       <p className='font-bold'>Tags       :  Sofa, Chair, Home, Shop</p>
       <p className='flex justify-center gap-4 font-bold'>Share     :
       <Image src={img13}  height={20} width={20} alt="pic"></Image>
       <Image src={img14}  height={20} width={20} alt="pic"></Image>
        <Image src={img15}  height={20} width={20} alt="pic"></Image></p>
      </div>
  

<div>
  <Image src={img5}  height={744} width={1440} alt="pic"></Image>
  <Image src={img6}  height={777} width={1440} alt="pic"></Image>
</div>
<Footer/>
    </div>
  )
}

export default Product
