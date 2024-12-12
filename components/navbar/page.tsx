import React from 'react'
import img1 from "@/components/images/Meubel House_Logos-05.png";
import img2 from "@/components/images/mdi_account-alert-outline.png"
import img3 from "@/components/images/Vector.png";
import img4 from "@/components/images/Vector1.png";
import img5 from "@/components/images/ant-design_shopping-cart-outlined.png";
import Image from 'next/image';
  import Link from 'next/link';
  import Sighup from "@/app/shop/page"

function Navbar
() {
  return (
    <div className='flex justify-between'>
      <div className='flex'>
        
    <Image src={img1} height={32} width={50} alt="pic"></Image>
    <p className='txt'>Furniro</p>
    </div>
        <div className= 'sm: font-bold'>
    <Link href="/">Home</Link></div>
  
  <div className='font-bold'>
    <Link href="/shop">Shop</Link>
  </div>
  <div className='font-bold'>
  <Link href="/blog">Blog</Link>
  </div>
  <div className='font-bold'>
    <Link href="/contect">Contect</Link>
  </div>
  <div className='flex justify-between gap-6'>
  
  <Image src={img2} height={14} width={14} alt="pic"></Image>
  <Image src={img3} height={14} width={14} alt="pic"></Image>
  <Image src={img4} height={14} width={14} alt="pic"></Image>
  <Image src={img5} height={14} width={14} alt="pic"></Image>
  </div>
    </div>
  )
}

export default Navbar

        {/* <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Home</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>/</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>

  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>Link</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>

  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>About</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>Link</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>

  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger>Sigh Up</NavigationMenuTrigger>
        <NavigationMenuContent>
          <NavigationMenuLink>sigh-up</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu> */}