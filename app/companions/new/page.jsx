"use client"
import CompanionForm from '@/components/CompanionForm'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

function page() {
  return (
    <main className=' min-lg:1/3 min-md:w-2/3 items-center justify-center'>
      <h1>Companion builder</h1>
      <CompanionForm />
    </main>
  )
}

export default page
