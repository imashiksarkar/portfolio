import CtaButton from '@/components/CtaButton'
import Image from 'next/image'

const Hero = () => {
  return (
    <section
      className="
          hero
          bg-[url('/hero-bg.png')]
          bg-cover
          bg-center
        text-white
          hero-clip
          pt-10
        "
    >
      <div
        className='
            con
            grid
            grid-cols-1 
            md:grid-cols-2
            h-full
          '
      >
        <div className='details'>
          <br />
          <br />
          <br />
          <br className='hidden lg:block' />
          <br className='hidden lg:block' />
          <h1 className='text-4xl font-bold'>Hi, I&apos;m Ashik</h1>
          <p className='text-xl font-semibold'>I&apos;m a Web Developer</p>
          <br />
          <p className='text-lg'>
            I am a web developer with a passion for creating beautiful and
            functional websites. I have experience working with a wide range of
            technologies, including React, Nodejs, Nextjs, Expressjs, Mongodb
            and more.
          </p>
          <br />
          <CtaButton
            href='https://drive.google.com/uc?export=download&id=1f6ERGbkXAdtVJRQAOo7m9QFrzB5c7adA'
            className='w-max text-2xl'
            doanload='Ashik_Sarkar_CV.pdf'
          >
            Download CV
          </CtaButton>
          <br />
          <br />
        </div>
        <div className='banner h-full overflow-hidden hidden md:block'>
          <figure className='h-full'>
            <Image
              src='/dev-pic.png'
              alt='Hero'
              width={557}
              height={583}
              className='ms-auto h-full lg:object-cover'
            />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Hero
