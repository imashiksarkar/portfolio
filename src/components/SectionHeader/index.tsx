import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

const SectionHeader = ({ children, className }: Props) => {
  return (
    <h1
      className={`
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
          ${className}
        `}
    >
      {children}
    </h1>
  )
}

export default SectionHeader
