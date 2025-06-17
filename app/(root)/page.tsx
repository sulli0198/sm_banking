import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'
import RightSidebar from '@/components/ui/RightSidebar'
import { getLoggedInUser } from '@/lib/actions/user.actions'
import { getAccount, getAccounts } from '@/lib/actions/bank.actions'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import RecentTransactions from '@/components/ui/RecentTransactions'

const Home = async({searchParams: {id, page}}: SearchParamProps) => {

   const currentPage  = Number(page as string) || 1;  
   const loggedin = await getLoggedInUser();
   const accounts = await getAccounts({userId:loggedin.$id})

   if(!accounts) return;

   const accountsData= accounts?.data;

   const appwriteItemId = (id as string) || accountsData[0]?.appwriteItemId;
   const account = await getAccount({appwriteItemId})

   
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
       <RecentTransactions  
       accounts = {accountsData}
       transactions = {account?.transactions}
       appwriteItemId = {appwriteItemId}
       page = {currentPage}
       />
      </div>

      <RightSidebar 
      user= {loggedin}
      transactions = {account?.transactions}
      banks = {accountsData?.slice(0,2)}
      />
    </section>
  )
}

export default Home
