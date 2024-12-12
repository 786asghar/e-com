import Image from "next/image";
import Navbar from "@/components/navbar/page";


import img1 from "@/components/images/Mask Group.png"
import img2 from "@/components/images/Group 115.png"
import img3 from "@/components/images/Our Products.png";
import img4 from "@/components/images/Inspirations.png";
import img5 from "@/components/images/Share.png";
import Footer from "@/components/footer/page";


export default function Home() {
  return (
   <div className="p-4">
    <Navbar/>
    <Image src={img1} height={717} width={1440} alt="pic"></Image>
     <br/>
      <br/>
      <div>
      <Image src={img2} height={685} width={1183} alt="pic"></Image>
      </div>
      <br/>
      <br/>
     <div className="pic1">
     <Image src={img3} height={1084} width={1236} alt="pic"></Image>
     </div>
     <div>
     <Image src={img4} height={670} width={1760} alt="pic"></Image>
     </div>
     <br />
     <br />
     
     <Image src={img5} height={780} width={1799} alt="pic"></Image>
        
        <br/>
        <br />
        <Footer />
</div>
   
  );
}
