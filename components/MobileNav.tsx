'use client'
import React from 'react'
import {
  Sheet,
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
          <SheetContent>
          <Link href="/"
         className='mb-12 flex cursor-pointer items-center gap-2'>
          <Image 
          src="icons/logo.svg"
          width={34}
          height={34}
          alt='logo'
          className='size-[24px] max-xl:size-14'
           />
           <h1 className='sidebar-logo' >CashOrbit</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive = 
          pathname === item.route || pathname.startsWith(`${item.route}/`);
          return(
          <Link 
          href={item.route} 
          key={item.label} 
          className={cn(
            'sidebar-link',
            {'bg-bankGradient' : isActive , 'text-darkbankGradient': isActive}
          )} >
            <div className='relative size-6'>
                <Image 
                 src={item.imgURL}
                 alt={item.label}
                 fill
                 className={cn({
                  'brightness-[3] invert-0' :isActive
                 })}
                />
            </div>
            <p className={cn
              ('sidebar-label', 
                {'!text-darkbankGradient': isActive
              })}>
              {item.label}
            </p>
          </Link>
          )
          })}
          </SheetContent>
        </Sheet>    
    </section>

  )
}

export default MobileNav
