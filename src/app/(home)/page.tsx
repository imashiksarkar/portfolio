import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <section className='home-page w-full h-dvh grid grid-flow-row grid-rows-[auto_1fr_auto]'>
      <header>
        <Navbar />
      </header>
      <main className='bg-red-300 flex items-center justify-center'>
        <h1>Home</h1>
      </main>
      <footer className='w-full bg-amber-200 flex items-center justify-center'>
        <p>Footer</p>
      </footer>
    </section>
  )
}
