'use client';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
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
import { Divide } from 'lucide-react';
import { authFormSchema } from '@/lib/utils';




const AuthForm = ({ type }: { type: string }) => {
  const {user, setUser} = useState(null)

   // 1. Define your form.
   const form = useForm<z.infer<typeof authFormSchema>>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: "",
      passwored: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof authFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values) 
  }


  return (
    <section className='auth-form'>
      <header className='flex flex-col gap-5 md:gap-8'>
      <Link href="/"
         className='flex cursor-pointer items-center gap-1'>
          <Image 
          src="icons/logo.svg"
          width={34}
          height={34}
          alt='logo'
           />
           <h1 className='text-20 font-ibm-plex-serif font-bold' >CashOrbit</h1>
        </Link>

        <div className='flex flex-col gap-1 md:gap-3 '>
          <h1 className='text-24 lg:text-36 font-semibold text-white'>
            {user
             ? 'Link Account'
            : type=== 'sign-ins'
               ? 'Sign-in'
               : 'Sign-up' }
            <p className='text-16 font-normal'>
              {user
              ? 'Link your account to get started'
              : 'Please enter your details' 
              }
            </p>
          </h1>
        </div>
      </header>
        {user ? (
          <div className='flex flex-col gap-4'>
            {/* plaidLink */}
          </div>
        ):
        (
          <>
           <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <div className='form-item'>
                    <FormLabel className='form lable'>
                      Email
                    </FormLabel>
                    <div className='flex w-full flex-col'>
                     <FormControl>
                       <input 
                       placeholder='Enter your email'
                       className='input-class'
                       {...field}
                       />
                     </FormControl>
                     <FormMessage className='form-message  mt-2'>
                       
                     </FormMessage>
                    </div>
                  </div>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <div className='form-item'>
                    <FormLabel className='form lable'>
                      Password
                    </FormLabel>
                    <div className='flex w-full flex-col'>
                     <FormControl>
                       <input 
                       placeholder='Enter your password'
                       className='input-class'
                       type='password'
                       {...field}
                       />
                     </FormControl>
                     <FormMessage className='form-message  mt-2'>
                       
                     </FormMessage>
                    </div>
                  </div>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
          </>
        )
        }
    </section>
  )
}

export default AuthForm
