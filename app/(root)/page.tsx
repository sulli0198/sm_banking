import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'

const Home = () => {
          const loggedin = {firstname : "Salman"}
  return (
    <section className="home">
      <div className="home-content">
        <div className="home-header">
          <HeaderBox 
            type="welcome"
            title="Greetings"
            user={loggedin?.firstname || "Guest"}
            subtext = "Access and view your account and transactions"
          />
        </div>
      </div>
    </section>
  )
}

export default Home
