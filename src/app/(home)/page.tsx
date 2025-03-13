import AboutMe from '@/components/AboutMe'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <section className='home-page w-full min-h-dvh max-h-full grid grid-flow-row grid-rows-[auto_1fr_auto] grid-cols-1  overflow-x-hidden'>
      <header className='row-[1/2] col-[1/2] md:py-5 z-20'>
        <Navbar />
      </header>
      <main className='row-[1/3] col-[1/2]'>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
      </main>
      <footer className='w-full bg-slate-800 flex items-center justify-center py-2 text-base text-white'>
        <p>{new Date().getFullYear()} © Ashik Sarkar | All Rights Reserved</p>
      </footer>
    </section>
  )
}
