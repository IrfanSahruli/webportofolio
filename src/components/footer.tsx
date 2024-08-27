import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Footer() {
  return (
    <div>
        <hr />
      <div className='grid grid-cols-3'>
        <div className='bg-white'>
            <Link href='https://www.instagram.com/irfan_sahruli/#' >
            <div className='text-sm text-black flex items-center ml-4'>
                <Image src='/logofb.png' width={60} height={60} alt='Logo Facebook' />
                <p className='text-black text-lg font-semibold m-1'>
                  @irfansahruli
                </p>
              </div>
            </Link>
        </div>
        <div className='bg-red-600'>
            <Link href='https://www.instagram.com/irfan_sahruli/#' >
            <div className='text-sm text-black flex items-center ml-4'>
                <Image src='/logoig.png' width={70} height={70} alt='Logo Instagram' />
                <p className='text-black text-lg font-semibold m-1'>
                  @irfansahruli
                </p>
              </div>
            </Link>
        </div>
        <div className='bg-red-600'>
            <Link href='https://www.instagram.com/irfan_sahruli/#' >
            <div className='text-sm text-black flex items-center ml-4'>
                <Image src='/logott.png' width={55} height={55} alt='Logo ' />
                <p className='text-black text-lg font-semibold m-1'>
                  @irfansahruli
                </p>
              </div>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
