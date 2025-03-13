import Marquee from 'react-fast-marquee'
import SectionHeader from '../SectionHeader'
import Image from 'next/image'

const skills = [
  {
    name: 'React',
    image: '/skills-icons/react.png',
  },
  {
    name: 'Next.js',
    image: '/skills-icons/nextjs.png',
  },
  {
    name: 'Tailwindcss',
    image: '/skills-icons/tailwindcss.png',
  },
  {
    name: 'Typescript',
    image: '/skills-icons/typescript.png',
  },
  {
    name: 'Javascript',
    image: '/skills-icons/javascript.png',
  },
  {
    name: 'Node.js',
    image: '/skills-icons/nodejs.png',
  },
  {
    name: 'Mongodb',
    image: '/skills-icons/mongodb.png',
  },
  {
    name: 'Firebase',
    image: '/skills-icons/firebase.png',
  },
  {
    name: 'Git',
    image: '/skills-icons/git.png',
  },
  {
    name: 'Github',
    image: '/skills-icons/github.png',
  },
  {
    name: 'Vs Code',
    image: '/skills-icons/vs-code.png',
  },
  {
    name: 'Figma',
    image: '/skills-icons/figma.png',
  },
  {
    name: 'Express.js',
    image: '/skills-icons/expressjs.png',
  },
]

const Skills = () => {
  const lastSkillIndex = skills.length - 1

  return (
    <section className='skills'>
      <div className='con text-white  flex flex-col items-center justify-center gap-10'>
        <SectionHeader>Skills</SectionHeader>
        <Marquee pauseOnHover autoFill className='cursor-wait'>
          <ul className='flex gap-10 pb-30'>
            {skills.map((skill, index) => (
              <li
                key={skill.name}
                className={index === lastSkillIndex ? 'mr-10' : ''}
              >
                <Image
                  src={skill.image}
                  alt={skill.name}
                  width={100}
                  height={100}
                  className='user-select-none'
                />
              </li>
            ))}
          </ul>
        </Marquee>
      </div>
    </section>
  )
}

export default Skills
