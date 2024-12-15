import Image from "next/image";
import Navbar from "@/components/navbar/page";


import img1 from "@/components/images/Mask Group.png"
import img2 from "@/components/images/Group 115.png"
import img00 from "@/components/images/Our Products.png"
import img01 from "@/components/images/Inspirations.png";
import img02 from "@/components/images/Share.png";
import Footer from "@/components/footer/page";


export default function Home() {
  return (
   <div className="p-4">
      <Navbar/>
      <div>
          <Image src={img1} height={717} width={1440} alt="pic"></Image>
             <br/>
              
       <div>
         <Image src={img2} height={685} width={1183} alt="pic"></Image>
       </div>
      
       
         <div>
           <Image src={img00} height={1084} width={1236} alt="pic"></Image>
         </div>
       <div>
         <Image src={img01} height={670} width={1760} alt="pic"></Image>
       </div>
           <br />
         <br />
          <div>
             <Image src={img02} height={780} width={1799} alt="pic"></Image>
          </div>
        <br/>
        <br />
        </div>
        <Footer />

   </div>
  );
}
