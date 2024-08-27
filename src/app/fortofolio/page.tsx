import Footer from '@/components/footer'
import Image from 'next/image'
import React from 'react'

function Page() {
  return (
    <div>
      <div id='home'>
        <div className='grid grid-cols-2 min-h-screen'>
          <div className='bg-white text-center p-10 mt-9'>
              <Image className='ml-36 mt-16 rounded-lg' src='/irfan.png' width={300} height={100} alt='aku'/>
          </div>
          <div className='bg-white p-10'>
            <h2 className='text-black font-serif font-bold text-8xl mt-40'>
              Irfan
            </h2>
            <hr />
            <h2 className='text-black font-serif font-bold text-8xl ml-56'>
              Sahruli
            </h2>
            <h2 className='text-black font-mono font-bold text-2xl mt-10'>
              XII RPL 1
            </h2>
          </div>
        </div>
      </div>

      <div id='about'>
        <div className='grid grid-cols-2 min-h-screen'>
          <div className='bg-white p-10'>
            <h2 className='text-black font-bold text-4xl text-center mt-16'>
              Tentang Saya
            </h2>
            <hr className='m-10'/>
            <p className='text-black text-lg text-center'>
              Hallo, perkenalkan nama saya Irfan Sahruli. Saya sekolah di SMKN 1 Cisarua dan mengambil
              jurusan Rekayasa Perangkat Lunak atau RPL. Alasan saya megambil jurusan RPL adalah karena 
              awalnya disuruh mamah saya untuk mengambil jurusan RPL, dan ternyata jurusan ini sangat 
              menyenangkan walaupun memusingkan juga.
            </p>
            <p className='text-black mt-5 text-lg text-center'>
              Saya adalah anak kedua dari dua bersaudara. 
              Hobi saya adalah bermain bola, bermain futsal, dan bermain game. 
              Saya juga menyenangi segala sesuatu yang berkaitan dengan otomotif baik itu motor 
              maupun mobil. Saya bercita-cita menjadi seorang pengusaha.
            </p>
          </div>
          <div className='bg-white text-center p-10'>
            <Image className='ml-36 mt-14 rounded-lg' src='/futsal.JPG' width={300} height={100} alt='aku'/>
          </div>
        </div>
      </div>

      <div id='contact'>
        <div className='grid grid-cols-3 min-h-screen'>
          <div className='bg-white p-10'>
            <h2 className='text-black font-serif font-bold text-3xl text-center mt-44'>
              Contact Person
            </h2>
            <div className="p-4 m-8 w-80 bg-white shadow-md rounded-xl">
              <h2 className='text-black font-serif font-bold text-xl'>
                Email :
              </h2>
              <p className='text-black text-lg'>
                irfansahruli244@gmail.com
              </p>
              <h2 className='text-black font-serif font-bold text-xl mt-2'>
                Calls :
              </h2>
              <p className='text-black text-lg'>
                +62 83848556992
              </p>
              <p className='text-black text-lg'>
                +62 81276549076
              </p>
            </div>
          </div>
          <div className='bg-white p-5 text-center'>
            <h2 className='text-black font-serif font-bold text-3xl mt-16'>
              CONTACT
            </h2>
            <hr />
            <div className=' mt-20'>
              <Image className='rounded-lg' src='/futsal2.JPG' alt='foto futsal' width={250} height={100}/>
            </div>
            <div className='ml-40 mt-2'>
              <Image className='rounded-lg' src='/futsal3.JPG' alt='foto futsal' width={250} height={100}/>
            </div>
          </div>
          <div className='bg-white p-10'>
            <h2 className='text-black font-serif font-bold text-3xl text-center mt-40'>
              Sosial Media
            </h2>
            <div className="p-4 m-8 w-80 bg-white shadow-md rounded-xl">
              <div className='text-sm text-black flex items-center ml-4'>
                <Image src='/logofb.png' width={60} height={60} alt='Logo Facebook' />
                <p className='text-black text-lg font-semibold m-1'>
                  @irfansahruli
                </p>
              </div>
              <div className='text-sm text-black flex items-center ml-3 mt-3'>
                <Image src='/logoig.png' width={70} height={70} alt='Logo Instagram' />
                <p className='text-black text-lg font-semibold'>
                  @irfan_sahruli
                </p>
              </div>
              <div className='text-lg text-black flex items-center ml-5 mt-3'>
                <Image src='/logott.png' width={55} height={55} alt='Logo TikTok' />
                <p className='text-black text-lg font-semibold m-2'>
                  @fandul26
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Page
