import Link from 'next/link'

interface Props {
  children: string
  className?: string
  href: string
  [key: string]: unknown
}

const CtaButton = ({ children, href, className, ...rest }: Props) => {
  return (
    <Link href={href} className={`cta-button ${className}`} {...rest}>
      {children}
    </Link>
  )
}

export default CtaButton
