import React from 'react'
import AnimatedCounter from '../AnimatedCounter'


const TotalBalanceBox = ({
  accounts = [] , totalBanks ,totalCurrentBalance 
}: TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance'>
      <div className='total-balance-chart'>
      {/*dougnut chart*/}
      </div>

      <div className='flex flex-col gap-6'>
        <h2 className='header-2'>
        Bank Accounts : {totalBanks} 
        </h2>
        <div className='flex flex-col gap-2'>
            <p className='total-balance-label'>
              Total Current Balance
            </p>
            <div className='text-bankGradient flex-center gap-2 text-24 lg:text-30 font-semibold'>
            <AnimatedCounter amount ={totalCurrentBalance} />
            </div>
        </div>
      </div>

    </section>
  )
}

export default TotalBalanceBox
