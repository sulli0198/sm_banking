import AuthForm from '@/components/ui/AuthForm';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const SignUp = async () => {

  const loggedInUser = await getLoggedInUser();
  
  console.log(loggedInUser);
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthForm type="sign-up" />
    </section>
  );
}; 

// Change to Next.js page format
export default function Page() { 
  return <SignUp />;
}