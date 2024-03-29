import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HeroHeader = () => {
  return (
    <div className="md:py-4 md:px-10">
      <div className="flex items-center justify-center gap-x-8">

        <Link href={'tournaments'} className='tracking-wider'>
          Tournaments
        </Link>
        <Link href={'tournaments'} className='tracking-wider'>
          Our Sponser
        </Link>

        <Image src="/hero-img.png" alt="logo" width={140} height={140} />

        <Link href={'tournaments'} className='tracking-wider'>
          About Us
        </Link>
        <Link href={'tournaments'} className='tracking-wider'>
          Contact Us
        </Link>

      </div>
    </div>
  )
}

export default HeroHeader