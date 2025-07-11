'use client';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Footer from './ui/Footer';
import PlaidLink from './ui/PlaidLink';

const SideBar = ({ user }: SiderbarProps) => {
   const pathname = usePathname();

  return (
    <section className='sidebar' >
      <nav className='flex flex-col gap-4' >
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
          <PlaidLink  user={user}/>
      </nav>
       <Footer user={user} />   
    </section>
  )
}

export default SideBar
