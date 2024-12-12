import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/navbar/page'
import img1 from "@/components/images/cart1.png"
import img2 from "@/components/images/Group 144.png"
import img3 from "@/components/images/Frame 161.png"
import img4 from "@/components/images/Group 21.png"
import Footer from '@/components/footer/page'
import Link from 'next/link'

function Cart
() {
  return (
    <div className='py-4'>
        <Navbar/>
        <Image src={img1}  height={316} width={1440} alt="pic"></Image>
        <div className='flex'>
        <div>
        <Image src={img2}  height={215} width={817} alt="pic"></Image>
        </div>
        <div className='bg-red-100 p-20 mx-3'>
            <p className='ct'>Cart Totals</p>
            <p className='su'>Subtotal    Rs. 250,000.00</p>
            <p className='to'>Total       Rs. 250,000.00</p>
            <Link href="checkout"><Image src={img4}  height={59} width={222} alt="pic"></Image></Link>
        </div>
        </div>
        <br/>
        <br/>
        <Footer/>
    </div>
  )
}

export default Cart
