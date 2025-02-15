import AuthForm from '@/components/ui/AuthForm';
import React from 'react'

const SignUp = () => {
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthForm type="sign-un" />
    </section>
  );
}; 

// Change to Next.js page format
export default function Page() { 
  return <SignUp />;
}