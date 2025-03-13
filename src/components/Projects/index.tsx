import SectionHeader from '../SectionHeader'

const Projects = () => {
  return (
    <section className='projects pb-10'>
      <div className='con text-white  flex flex-col items-center justify-center gap-10'>
        <SectionHeader>Projects</SectionHeader>

        <div className='project_boxes w-full grid gap-10'>
          <div className='project_box  grid grid-cols-[2fr_4fr]'>
            <div className='preview w-full h-96 bg-red-400'></div>
            <div className='details w-full h-96 bg-orange-400'></div>
          </div>
          <div className='project_box  grid grid-cols-[2fr_4fr]'>
            <div className='preview w-full h-96 bg-red-400'></div>
            <div className='details w-full h-96 bg-orange-400'></div>
          </div>
          <div className='project_box  grid grid-cols-[2fr_4fr]'>
            <div className='preview w-full h-96 bg-red-400'></div>
            <div className='details w-full h-96 bg-orange-400'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
