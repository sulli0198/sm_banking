import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'
import RightSidebar from '@/components/ui/RightSidebar'

const Home = () => {

   const loggedin = {firstName : "Salman",
    lastName : "ibrahim", email : 'salmanibrahim521@gmail.com'}
   
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
        </header>
        Recent transactions
      </div>

      <RightSidebar 
      user = {loggedin}
      transactions = {[]}
      banks = {[]}
      />
    </section>
  )
}

export default Home
