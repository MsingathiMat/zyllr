"use client"
import { NavListItems } from '@/app/Constants/NavListItems'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

const NavList = ({IsMobile}:{IsMobile?:boolean}) => {

    const ActivePath = usePathname()


  return (
    <div className={cn(' hidden lg:flex gap-12 justify-center items-center',IsMobile?" flex flex-col ":"")}>
       
         {

NavListItems.map((item,index)=><div key={index}><Link href={item.link} className={cn('hover:text-orange-500',ActivePath==item.link?" text-orange-500":"")} >{item.label}</Link></div> )
       }
       
    </div>
  )
}

export default NavList
