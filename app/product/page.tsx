import React from 'react'
import Navbar from '@/components/navbar/page'
import Image from 'next/image'
import img001 from "@/components/images/Group 84.png"
import img002 from "@/components/images/Group 85.png"
import img003 from "@/components/images/Group 62.png"
import img004 from "@/components/images/Group 102.png"
import img005 from "@/components//images/Group 110.png"
import img006 from "@/components/images/Group 19.png"
import Footer from '@/components/footer/page'
import img007 from "@/components/images/Group 88.png"
import img008 from "@/components/images/Group 92.png"
import img009 from "@/components/images/Rectangle 42.png"
import img0010 from "@/components/images/Rectangle 43.png"
import img0011 from "@/components/images/Rectangle 44.png"
import img0012 from '@/components/images/Group 93.png'
import img0013 from "@/components/images/akar-icons_facebook-fill.png"
import img0014 from "@/components/images/akar-icons_linkedin-box-fill.png"
import img0015 from "@/components/images/ant-design_twitter-circle-filled.png"
import img0016 from "@/components/images/Group 21.png"
import img0017 from "@/components/images/Group 101.png"
import Link from 'next/link'

function Product() {
  return (
    <div>
        <div className='py-4 mx-5'>
          <Navbar/>
        </div>
        
        <div className=" flex justify-normal bg-red-100 p-5">
          <Image src={img001}  height={24} width={70} alt="pic"></Image>
          <Image src={img002}  height={24} width={82} alt="pic"></Image>
          <Image src={img003}  height={37} width={142} alt="pic"></Image>
        </div>
        
        
           <div className='sm:grid grid-cols-1 md:flex justify-between p-4'>
             <div>
               <Image src={img004}  height={4000} width={1400} alt="pic"></Image>
               </div>
            <div className='py-5'>
               <div><p className='as text-3xl font-bold'>Asgaard sofa</p></div>
               <div> <p className='rs'>Rs. 250,000.00</p></div>
               
            
            
               
                 <div>
                    <Image src={img007}  height={20} width={124} alt="pic"></Image>
                    </div>
                    <div>
                     <p className='cu'>5 Customer Review</p>
                     <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>
                     </div>
                    
                   <div className='p-4'>
                     <Image src={img008}  height={20} width={124} alt="pic"></Image>
                     </div>
                   <div className='flex p-4 gap-4'>
                     <Image src={img009}  height={30} width={30} alt="pic"></Image>
                     <Image src={img0010}  height={30} width={30} alt="pic"></Image>
                     <Image src={img0011}  height={30} width={30} alt="pic"></Image>
                    </div>
                 
              
               <div className='flex justify-end p-4 gap-4 mr-52'>
                <div className='sm:grid grid-cols-1 md:flex justify-between gap-3'>
                 <Image src={img0012}  height={64} width={123} alt="pic"></Image>
                 <Link href="/cart"><Image src={img0016}  height={80} width={123}  alt="pic"  ></Image></Link>
                 <Link href="/comparison"><Image src={img0017}  height={80} width={123} alt="pic" ></Image> </Link></div>
               </div>
           </div></div>
               <div className='text-center py-4'>
                 <div className='text-center py-4 sm:text-sm md:base lg:lg'>
                  <p className='font-bold'>SKU       :  SS001</p> 
                   <p className='font-bold'>Category  :  Sofas</p>
                  <p className='font-bold'>Tags       :  Sofa, Chair, Home, Shop</p>
                    <p className='flex justify-center gap-4 font-bold'>Share     :
                    <Image src={img0013}  height={20} width={20} alt="pic"></Image>
                     <Image src={img0014}  height={20} width={20} alt="pic"></Image>
                      <Image src={img0015}  height={20} width={20} alt="pic"></Image></p>
                      </div>
                  <div>
                 <Image src={img005}  height={744} width={1440} alt="pic"></Image>
                 <Image src={img006}  height={777} width={1440} alt="pic"></Image>
                  </div>
              </div>
             
             
             
             <Footer/>
         
       </div>
    
  )
}

export default Product
