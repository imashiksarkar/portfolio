'use client'

import Image from 'next/image'
import Link from 'next/link'
import CtaButton from '@/components/CtaButton'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
import { RxCrossCircled } from 'react-icons/rx'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='con flex items-center justify-between py-2.5 bg-slate-950/30 backdrop-blur-xs md:rounded-md text-white font-medium text-2xl h-full'>
      <Link href='/'>
        <Image
          src='/logo-200x200-compressed.png'
          alt='Logo'
          width={200}
          height={200}
          className='w-14'
        />
      </Link>

      <ul className='gap-12 capitalize items-center hidden md:flex'>
        <li>
          <Link href='/'>home</Link>
        </li>
        <li>
          <Link href='/#about'>about</Link>
        </li>
        <li>
          <Link href='/#skills'>skills</Link>
        </li>
        <li>
          <Link href='/#education'>education</Link>
        </li>
        <li>
          <CtaButton href='/#contact'>contact me</CtaButton>
        </li>
      </ul>

      <div
        className={`h-dvh w-full bg-slate-950 fixed top-0 z-50 py-4 md:hidden transition-all duration-300 ${
          isOpen ? 'right-0' : '-right-[100%]'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div className='con flex flex-col gap-8'>
          <button
            className='self-end cursor-pointer'
            onClick={() => setIsOpen(false)}
          >
            <RxCrossCircled className='text-4xl' />
          </button>
          <ul className='flex flex-col gap-6 capitalize items-center'>
            <li>
              <Link href='/'>home</Link>
            </li>
            <li>
              <Link href='/#about'>about</Link>
            </li>
            <li>
              <Link href='/#skills'>skills</Link>
            </li>
            <li>
              <Link href='/#education'>education</Link>
            </li>
            <li>
              <CtaButton href='/#contact'>contact me</CtaButton>
            </li>
          </ul>
        </div>
      </div>

      <button
        className='bg-orange-400 md:hidden h-10 p-1 aspect-square cursor-pointer'
        onClick={() => setIsOpen(true)}
      >
        <GiHamburgerMenu className='h-full w-full' />
      </button>
    </nav>
  )
}

export default Navbar
