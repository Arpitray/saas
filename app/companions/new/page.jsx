import CompanionForm from '@/components/CompanionForm'
import React from 'react'
import { redirect } from 'next/navigation'
import { auth } from "@clerk/nextjs/server"

const page = async () => {
  const { userId } = await auth();
  
  if (!userId) {
    redirect('/sign-in');
  }
  
  return (
    <main className='min-lg:w-1/3 min-md:w-2/3 items-center justify-center'>
      <h1>Companion builder</h1>
      <CompanionForm />
    </main>
  )
}

export default page
