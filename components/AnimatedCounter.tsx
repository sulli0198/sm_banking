'use client';
import React from 'react'
import CountUp from 'react-countup'


const AnimatedCounter = ({amount} : {amount : number}) => {
  return (
    <div className='w-full'>
      <CountUp
       prefix="₹"
       duration={2.75}
       end={amount}/>
    </div>
  )
}

export default AnimatedCounter
