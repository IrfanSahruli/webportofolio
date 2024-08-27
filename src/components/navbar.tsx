import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-gray-600 fixed flex justify-between h-14 w-full'>
        <div>
          <Image className='ml-4' src='/logo.png' width={60} height={60} alt='logo'/>
        </div>
        <div className='flex space-x-4 m-4'>
          <Link href='#'>
            <p>Home</p>
          </Link>
          <Link href='#about'>
            <p>About</p>
          </Link>
          <Link href='#contact'>
            <p>Contact</p>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
