import Image from 'next/image'

const AboutMe = () => {
  return (
    <section className='about-me'>
      <div className='con text-white py-12 flex flex-col items-center justify-center'>
        <h1
          className="
          text-xl
          md:text-3xl
          font-semibold
          bg-[url('/title-bg.png')]
          bg-[20px_25px]
          bg-contain
          bg-no-repeat
          overflow-visible
          px-20
          md:px-36
          py-8
          md:py-10
          uppercase
        "
        >
          About Me
        </h1>
        <div
          className='
        details-wrapper
        grid
        grid-cols-1
        md:grid-cols-[5fr_7fr]
        gap-10
        md:gap-24
        py-16
        '
        >
          <figure
            className='dev-pic h-full flex items-center 
          justify-center
          md:justify-end
          '
          >
            <Image
              src='/bio-banner.png'
              alt='dev-pic'
              width={230}
              height={280}
              className='block h-full object-contain'
            />
          </figure>
          <div className='details'>
            <h4 className='text-3xl'>Ashik Sarkar</h4>
            <p className='text-green-500 mt-1'>Web Developer </p>
            <p className='mt-4
            text-sm
            md:text-base
            '>
              I&apos;m a self-taught web developer. I have a passion for
              creating visually appealing and user-friendly websites. I&apos;ve
              worked on a range of projects, from simple landing pages to
              complex web applications.{' '}
            </p>

            <ul className='info mt-8 grid grid-cols-[auto_1fr] gap-y-2 
            gap-x-4
            md:gap-x-10
            text-sm
            md:text-base
            '>
              <li>Birth Date</li>
              <li>: 01 March 2001</li>
              <li>Phone</li>
              <li>: +88017-106-33238</li>
              <li>Email</li>
              <li>: ashiksarkar.s18@gmail.com</li>
              <li>Address</li>
              <li>: Tajpur, Bhagnagorkandi - 6450, Singra, Natore</li>
              <li>Languages</li>
              <li>: Bangla, English, Hindi</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
