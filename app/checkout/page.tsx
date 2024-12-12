import React from 'react';
import Navbar from '@/components/navbar/page';
import Image from 'next/image';
import img1 from "@/components/images/Group 788.png"
import img2 from "@/components/images/Group 133.png"
import img3 from "@/components/images/Group 134.png"
import img4 from "@/components/images/Frame 161.png"
import Footer from '@/components/footer/page';
function Checkout() {
  return (
    <div>
      <Navbar/>
     < Image src={img1}  height={316} width={1440} alt="pic"></Image>
     <div className='flex'>
        <div>
     < Image src={img2}  height={1714} width={608} alt="pic"></Image>
        </div>
        <div>
        < Image src={img3}  height={789} width={608} alt="pic"></Image>
        </div>
     </div>
     < Image src={img4}  height={70} width={1334} alt="pic"></Image>
     <br/>
     <br/>
     <Footer/>
    </div>
  )
}


export default Checkout
