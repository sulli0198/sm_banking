'use client';
import React from 'react'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"

const Custominput = ({ form, name, label, placeholder }) => {
  return (
    <div>
      <FormField
                control={form.control}
                name={name}
                render={({ field }) => (
                  <div className='form-item'>
                    <FormLabel className='form lable'>
                      {label}
                    </FormLabel>
                    <div className='flex w-full flex-col'>
                     <FormControl>
                       <input 
                       placeholder={placeholder}
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
    </div>
  )
}

export default Custominput
