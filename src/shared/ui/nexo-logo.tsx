import type { ImgHTMLAttributes } from 'react'
import logoUrl from '../../assets/icons/nexo-logo-mark.png'

type NexoLogoProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> & {
  size?: number
}

export const NexoLogo = ({
  size = 28,
  alt = 'Nexo',
  ...rest
}: NexoLogoProps) => {
  return (
    <img
      src={logoUrl}
      alt={alt}
      width={size}
      height={size}
      draggable={false}
      {...rest}
    />
  )
}
