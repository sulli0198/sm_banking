'use client'
import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image';
import { usePathname } from 'next/navigation'
import Footer from './ui/Footer'



const MobileNav = ({user} : MobileNavProps ) => {
  const pathname = usePathname(); 
  return (
    <section className='w-fulll max-w-[264px] ' >
        <Sheet>
          <SheetTrigger>
          <svg
              width={30}
              height={30}
              viewBox="0 0 24 24"
              fill="#FFFFFF" // Set the fill color here
              xmlns="http://www.w3.org/2000/svg"
              className='cursor-pointer'
            >
            <path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
          </svg>
          </SheetTrigger>
          <SheetContent  className='sheet-background border-none ' >
          <Link href="/"
         className='flex cursor-pointer items-center gap-1 px-4'>
          <Image 
          src="icons/logo.svg"
          width={34}
          height={34}
          alt='logo'
           />
           <h1 className='text-20 font-ibm-plex-serif font-bold' >CashOrbit</h1>
        </Link>
        <div className='mobilenav-sheet' >
          <SheetClose asChild>
            <nav className='flex h-full flex-col gap-6 pt-16 text-white'>
            {sidebarLinks.map((item) => {
          const isActive = 
          pathname === item.route || pathname.startsWith(`${item.route}/`);
          return(
            <SheetClose asChild key={item.route}>
             <Link 
          href={item.route} 
          key={item.label} 
          className={cn(
            'mobilenav-sheet_close w-full',
            {'bg-bankGradient' : isActive , 'text-darkbankGradient': isActive}
          )} >
                <Image 
                 src={item.imgURL}
                 alt={item.label}
                 width={20}
                 height={20}
                 className={cn({
                  'brightness-[3] invert-0' :isActive
                 })}
                />       
            <p className={cn
              ('text -16 font-semibold text-white', 
                {'!text-darkbankGradient': isActive
              })}>
              {item.label}
            </p>
          </Link>
            </SheetClose>
          )
          })}
          
          User
            </nav>
          </SheetClose>

          <Footer user={user} />
        </div>

        
          </SheetContent>
        </Sheet>    
    </section>

  )
}

export default MobileNav
