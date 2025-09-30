import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavItems from './NavItems'
function Navbar() {
  return (
  <nav className='navbar'>
    <Link href="/">
      <div className='flex items-center gap-2.5 cursor-pointer'> 
        <Image src="/images/logo.svg" alt="Logo" width={50} height={50} />
      </div>
    </Link>
    <div className='menu flex items-center gap-8'>
      <NavItems />
    <p>Sign Up</p>
    </div>
  </nav>
  )
}

export default Navbar
