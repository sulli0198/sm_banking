import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BankCard from './BankCard'


const RightSidebar = ({ user }: RightSidebarProps) => {
  if (!user) return null;

  return (
    <aside className="right-sidebar">
      <div className='flex flex-col pb-8'>
        <h3 className='profile-name'>{user.name}</h3>
        <p className='profile-email'>{user.email}</p>
      </div>

      <div className='profile' >
        <div className='profile-img'>
          <span className='text-5xl font-bold text-blue-500'>{user.name[0]}</span> 
        </div>
        <div className='profile-details'>
          <h1 className='profile-name'>
            {user.name}
          </h1>
          <p className='profile-email'>
            {user.email}
          </p>
        </div>
      </div>
    </aside>
  )
}

export default RightSidebar
