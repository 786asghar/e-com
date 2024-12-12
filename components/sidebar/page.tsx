 import React from 'react'
 import img from "@/components/images/icons arrow-right.png";
 import Image from 'next/image';
 
 function Sidebar() {
   return (
     <div className='bg-slate-200 p-4'>
      <ul>
        <li>Women`s Fashion <Image src={img} height={16} width={16} alt="pic"></Image></li>
        
        <br/>
        <li>men`s Fashion
        <Image src={img} height={16} width={16} alt="pic"></Image>
        </li><br/>
        <li>Electronics</li><br/>
        <li>Home & Lifesyle</li><br/>
        <li>Medicine</li><br/>
        <li>sports & Outdoor</li><br/>
        <li>Bay`s & Toys</li><br/>
        <li>Grocerise & Pets</li><br/>
        <li>Health & Beauty</li><br/>
      </ul>
     </div>
   )
 }
 
 export default Sidebar