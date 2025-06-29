import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'
import PaymentTransferForm from '@/components/ui/PaymentTransferForm'
import { getLoggedInUser } from '@/lib/actions/user.actions';
import { getAccounts } from '@/lib/actions/bank.actions';

const Transfer
 = async () => {
  const loggedin = await getLoggedInUser();
   const accounts = await getAccounts({userId:loggedin.$id})

   if(!accounts) return;

   const accountsData= accounts?.data;
  return (
    <section className='payment-transfer'>
      <HeaderBox 
      title='Payment Transfer'
      subtext='please provide specific details or notes related to the payment transfer'
      />
      <section className='size-full pt-5'>
        <PaymentTransferForm accounts={accountsData}/>
      </section>
    </section>
  )
}

export default Transfer

