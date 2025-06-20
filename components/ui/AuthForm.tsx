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
import { Divide, Link2, Loader2 } from 'lucide-react';
import { authFormSchema } from '@/lib/utils';
import CustomInput from './Custominput';
import { useRouter } from 'next/navigation';
import { signIn, signUp } from '@/lib/actions/user.actions';
import PlaidLink from './PlaidLink';




const AuthForm = ({ type }: { type: string }) => {  
  const router = useRouter();
  const [user, setUser] = useState(null)
  const [isLoading, setisLoading] = useState(false)

  const formSchema = authFormSchema(type);


   // 1. Define your form.
   const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: type === 'sign-up' ? {
      firstName: "",
      lastName: "",
      address1: "",
      city: "",
      state: "",
      postalCode: "",
      dateOfBirth: "",
      ssn: "",
      email: "",
      password: "",
    } : {
      email: "",
      password: "",
    },
  })
 
  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
 
    setisLoading(true)
    try{
      // sign up on appwrite and create plaid link token


      if(type === 'sign-up'){
        const userData = {
          firstName: data.firstName!,
          lastName: data.lastName!,
          address1: data.address1!,
          city: data.city!,
          state: data.state!,
          postalCode: data.postalCode!,
          dateOfBirth: data.dateOfBirth!,
          ssn: data.ssn!,
          email: data.email,
          password: data.password,
        }


        const newUser = await signUp(data);

        setUser(newUser);
      }

      if(type === 'sign-in'){
        const response = await signIn({
          email: data.email,
          password: data.password,
        });

        if(response) router.push('/')
      }

      
    setisLoading(false);
    }catch(error){
      console.log(error)
    }finally{
      setisLoading(false);
    }
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
            : type === 'sign-in'
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
            <PlaidLink user={user} variant="primary"/>
          </div>
         ):
        ( 
          <>
           <Form {...form}>
            <form 
              onSubmit={(e) => {
                console.log('Form submitted')
                form.handleSubmit(onSubmit)(e)
              }} 
              className="space-y-8"
            >
              {type === 'sign-up' && (
                <>
                <div className='flex gap-4'>
                <CustomInput 
                  control={form.control} 
                  name='firstName' 
                  label="First name" 
                  placeholder='Enter your first name'
                  />
                  <CustomInput 
                  control={form.control} 
                  name='lastName' 
                  label="Last name" 
                  placeholder='Enter your last name'
                  />
                </div>
                 
                  <CustomInput 
                  control={form.control} 
                  name='address1' 
                  label="Address" 
                  placeholder='Enter your address'
                  />
                  <CustomInput 
                  control={form.control} 
                  name='city' 
                  label="City" 
                  placeholder='Enter your city'
                  />
                  <div className='flex gap-4'>
                  <CustomInput 
                  control={form.control} 
                  name='state' 
                  label="State" 
                  placeholder='Example: NY'
                  />
                  <CustomInput 
                  control={form.control} 
                  name='postalCode' 
                  label="Postal Code" 
                  placeholder='Examle: 11101'
                  />
                  </div>
                 <div className='flex gap-4'>
                 <CustomInput 
                  control={form.control} 
                  name='dateOfBirth' 
                  label="Date of Birth" 
                  placeholder='YYYY-MM-DD'
                  />
                  <CustomInput 
                  control={form.control} 
                  name='ssn' 
                  label="SSN" 
                  placeholder='Example: 1234'
                  />
                 </div>
                </>
              )}

              <CustomInput 
              control={form.control} 
              name='email' 
              label="Email" 
              placeholder='Enter your email'
              />
              <CustomInput 
              control = {form.control} 
              name = 'password'
              label = "Password" 
              placeholder = 'Enter your password'
              />
              <div className='flex flex-col gap-4'>
                <Button className='form-btn' type="submit" disabled={isLoading}>
                  { isLoading ? (
                    <>
                    <Loader2 size = {20} className='animate-spin' /> &nbsp;
                    Loading...
                    </>
                  ): type === 'sign-in' ? 'Sign In' : 'Sign Up' }
                </Button>
              </div>
            </form>
          </Form>
          <footer className='flex justify-center gap-1'>
            <p className='text-14 font-normal'>
              {type === 'sign-in' ? "Don't have an account?" : "Already have an account?"}
            </p>
            <Link 
              className='form-link' 
              href={type === 'sign-in' ? '/sign-up' : '/sign-in'}
            >
              {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
            </Link>
          </footer>
          </>
         )
        } 
    </section>
  )
}

export default AuthForm
