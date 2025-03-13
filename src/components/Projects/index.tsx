import SectionHeader from '../SectionHeader'
import Image from 'next/image'

const projects = [
  {
    name: 'Food Sharing',
    description: `This is a food sharing platform that connects food enthusiasts with  providers. It allows users to share their favorite foods and habitat preferences with other food enthusiasts.`,
    ss: '/projects-ss/food-sharing.png',
    ghClient: 'https://github.com/imashiksarkar/Food-Sharing-Client.git',
    ghServer: 'https://github.com/imashiksarkar/Food-Sharing-Api.git',
    live: 'https://fs.ashiksarkar.xyz',
    usedTechs: ['React', 'MongoDB', 'Express', 'Node', 'Tailwind'],
    features: [
      `Users can sign up, log in, and log out, ensuring secure access to personalized features.`,
      `Detailed information about each food, including title, description, genre, and more.`,
      'Users can request food items from other food donors.',
      'Sort foods by title, genre, and more.',
      'User can add new foods to the database.',
      'User can delete foods from the database.',
      'User can update food details.',
    ],
  },
]

const Projects = () => {
  return (
    <section className='projects pb-10'>
      <div className='con text-white  flex flex-col items-center justify-center gap-10'>
        <SectionHeader>Projects</SectionHeader>

        <div className='project_boxes w-full grid gap-10'>
          {projects.map((project) => (
            <div
              key={project.name}
              className='project_box grid grid-rows-[300px_auto] md:grid-rows-1 lg:grid-cols-[3fr_5fr] rounded-md'
            >
              <div className='preview w-full'>
                <Image
                  src={project.ss}
                  alt={project.name}
                  width={500}
                  height={500}
                  className='user-select-none h-full w-full object-cover'
                />
              </div>
              <div className='details w-full  bg-slate-800 p-4'>
                <h1 className='text-2xl font-semibold'>{project.name}</h1>
                <p>{project.description}</p>

                <div className='features py-4'>
                  <h4 className='text-lg font-semibold'>Features</h4>
                  <ul className='list-disc pl-4 mt-1 space-y-2'>
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className='used-techs'>
                  <ul
                    className='flex gap-4 
                  [&>li]:text-sm
                  [&>li]:bg-orange-500
                  [&>li]:p-1
                  [&>li]:rounded-sm
                  flex-wrap
                  '
                  >
                    {project.usedTechs.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>

                <p className='text-md flex gap-6 mt-4 text-blue-400'>
                  <a
                    target='_blank'
                    href={project.ghClient}
                    className='underline'
                  >
                    Client Code
                  </a>
                  <a
                    target='_blank'
                    href={project.ghServer}
                    className='underline'
                  >
                    Server Code
                  </a>
                  <a target='_blank' href={project.live} className='underline'>
                    Live
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
