import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'
import RightSidebar from '@/components/ui/RightSidebar'
import { getLoggedInUser } from '@/lib/actions/user.actions'

const Home = async() => {

   const loggedin = await getLoggedInUser();
   
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="welcome"
            title='Greetings'
            user={loggedin?.name || "Guest"}
            subtext = "Access and view your account and transactions"
          />
        </header>
        Recent transactions
      </div>

      <RightSidebar 
      user= {loggedin}
      transactions = {[]}
      banks = {[{currentBalance: 122.54},{currentBalance: 555.90}]}
      />
    </section>
  )
}

export default Home
