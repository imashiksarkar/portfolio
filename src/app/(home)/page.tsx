import AboutMe from '@/components/AboutMe'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <section className='home-page w-full min-h-dvh nax-h-full grid grid-flow-row grid-rows-[auto_1fr_auto] grid-cols-1'>
      <header className='row-[1/2] col-[1/2] md:py-5 z-20'>
        <Navbar />
      </header>
      <main className='row-[1/3] col-[1/2]'>
        <Hero />
        <AboutMe />
      </main>
      <footer className='w-full bg-amber-200 flex items-center justify-center'>
        <p>Footer</p>
      </footer>
    </section>
  )
}
