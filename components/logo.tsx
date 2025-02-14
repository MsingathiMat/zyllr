import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex  items-center gap-2'>
      
      <Image alt='logo' src="/assets/logo.svg" width={40} height={40}/>
      <h5 className='text-[20px]'>Zyllr</h5>
    </div>
  )
}

export default Logo
