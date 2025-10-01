import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavItems from './NavItems'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"
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
      <SignedOut>
        <SignInButton mode="modal">
          <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
            Sign In
          </button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Sign Up
          </button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton 
          appearance={{
            elements: {
              avatarBox: "w-8 h-8"
            }
          }}
        />
      </SignedIn>
    </div>
  </nav>
  )
}

export default Navbar
