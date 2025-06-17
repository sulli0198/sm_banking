import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'
import RightSidebar from '@/components/ui/RightSidebar'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import { getAccount, getAccounts } from '@/lib/actions/bank.actions'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'

const Home = async({searchParams: {id, page}}: SearchParamProps) => {

   const loggedin = await getLoggedInUser();
   const accounts = await getAccounts({userId:loggedin.$id})

   if(!accounts) return;

   const accountsData= accounts?.data;

   const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
   const account = await getAccount({appwriteItemId})

   console.log({
    accountsData,
    account
   });
   
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="welcome"
            title='Greetings'
            user={loggedin?.firstName || "Guest"}
            subtext = "Access and view your account and transactions"
          />
          <TotalBalanceBox 
            accounts = {accountsData}
            totalBanks = {accounts?.totalBanks}
            totalCurrentBalance = {accounts?.totalCurrentBalance}
          />
        </header>
        Recent transactions
      </div>

      <RightSidebar 
      user= {loggedin}
      transactions = {accounts?.transactions}
      banks = {accountsData?.slice(0,2)}
      />
    </section>
  )
}

export default Home
