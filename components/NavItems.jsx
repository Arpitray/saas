'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navitems = [
    {label : "Home", url : "/"},
    {label : "My Journey", url : "/my-journey"},
    {label : "Companions", url : "/companions"},
    {label : "Dashboard", url : "/dashboard"},
    {label : "Pricing", url : "/subscription"},
]
function NavItems() {
  const pathname = usePathname();

  return (
    <div className='flex items-center gap-8'>
      {navitems.map((item) => (
        <Link
          key={item.label}
          href={item.url}
          className={cn(pathname === item.url && "text-orange-500")}
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
}

export default NavItems

