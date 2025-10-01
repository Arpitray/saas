'use client'
import React from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { subjects } from "@/constants"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  name: z.string().min(2, { message: "Companion is Required" }).max(50),
  topic: z.string().min(2, { message: "topic is Required" }).max(50),
  subject: z.string().min(2, { message: "subject is Required" }).max(50),
  voice: z.string().min(2, { message: "voice is Required" }).max(50),
  style: z.string().min(2, { message: "style is Required" }).max(50),
  duration: z.coerce.number().min(2, { message: "Duration is Required" }).max(50),
})

function CompanionForm() {
  // 1. Define your form (plain JSX, no TS generics)
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      topic: "",
      subject: "",
      voice: "",
      style: "",
      duration: 15,
    },
  })

  // 2. Define a submit handler.
  const onSubmit = (values) => {
    console.log(values)
  }

  return (
   <>
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
            <FormField
              control={form.control}
              name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What Should the Companion Help With..</FormLabel>
              <FormControl>
                <Input placeholder="ex. Derivatives and Integrals" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
            <FormField
          control={form.control}
              name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                value={field.value}
                >
  <SelectTrigger className="input capitalize">
    <SelectValue placeholder="Select Subject" />
  </SelectTrigger>
  <SelectContent>
    {subjects.map((subject) => (
      <SelectItem key={subject} value={subject} className="capitalize">
        {subject}
      </SelectItem>
    ))}
  </SelectContent>
</Select>
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
              name="voice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>voice</FormLabel>
              <FormControl>
                <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                value={field.value}
                >
  <SelectTrigger className="input">
    <SelectValue placeholder="voice" />
  </SelectTrigger>
  <SelectContent>
   
      <SelectItem value="male">
        Male
      </SelectItem>
      <SelectItem value="Female">
        Female
      </SelectItem>
    
  </SelectContent>
</Select>
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
     <FormField
          control={form.control}
              name="style"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Style</FormLabel>
              <FormControl>
                <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                value={field.value}
                >
  <SelectTrigger className="input">
    <SelectValue placeholder="Style" />
  </SelectTrigger>
  <SelectContent>
   
      <SelectItem value="Formal">
        Formal
      </SelectItem>
      <SelectItem value="Casual">
        Casual
      </SelectItem>
    
  </SelectContent>
</Select>
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Duration</FormLabel>
              <FormControl>
                <Input type="number" className="input" placeholder="15" {...field} />
              </FormControl >
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full cursor-pointer" type="submit">Build Your Companion</Button>
      </form>
    </Form></>
  )
}

export default CompanionForm
