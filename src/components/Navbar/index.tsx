import Image from 'next/image'
import Link from 'next/link'
import CtaButton from '@/components/CtaButton'

const Navbar = () => {
  return (
    <nav className='con flex items-center justify-between py-2.5 bg-slate-950/30 backdrop-blur-xs rounded-md text-white font-medium text-2xl'>
      <Link href='/'>
        <Image
          src='/logo-200x200-compressed.png'
          alt='Logo'
          width={200}
          height={200}
          className='w-14'
        />
      </Link>

      <ul className='flex gap-12 capitalize items-center'>
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
    </nav>
  )
}

export default Navbar
