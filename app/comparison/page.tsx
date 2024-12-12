import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import img from "@/components/images/Group 150.png"
import img1 from "@/components/images/Frame 152.png"
import img2 from "@/components/images/Frame 153.png"
import img3 from "@/components/images/Frame 151.png"

 function Comparison() {
  return (
    <div className='p-44'>
      <Image src={img}  height={334} width={350} alt="pic"></Image>
      <div className='felx justify-around py-11'>
      <div className='sub'><p>Subtotal</p></div>
      <div className='rss'><p>Rs. 520,000.00</p></div>
      </div>
      <div className='flex gap-5'>
        <Link href={"/cart"}><Image src={img3} height={30} width={87} alt='pic'></Image></Link>
        <Link href={"/checkout"}><Image src={img1} height={30} width={118} alt='pic'></Image></Link>
        <Link href={"/produectcom"}><Image src={img2} height={30} width={135} alt='pic'></Image></Link>
      </div>
    </div>
  )
}
export default Comparison