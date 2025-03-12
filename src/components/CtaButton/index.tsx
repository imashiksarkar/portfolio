import Link from 'next/link'

interface Props {
  children: string
  className?: string
  href: string
}

const CtaButton = ({ children, href, className }: Props) => {
  return (
    <Link href={href} className={`cta-button ${className}`}>
      {children}
    </Link>
  )
}

export default CtaButton
