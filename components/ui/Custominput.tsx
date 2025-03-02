'use client';
import React from 'react'
import {
    FormControl,
    FormField,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import {Control, Form} from 'react-hook-form'
import { z } from 'zod';
import { authFormSchema } from '@/lib/utils';

  interface CustomInput {
    form: Control<z.infer<ReturnType<typeof authFormSchema>>>,
    name: string,
    label: string,
    placeholder: string,
  }

const CustomInput = ({ control, name, label, placeholder}: CustomInput) => {
  return (
    <div>
      <FormField
                control={control}
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

export default CustomInput
