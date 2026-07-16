import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { StyledButton } from './button.styled.ts'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  $variant?: 'primary' | 'secondary'
}

export const Button = ({
  children,
  onClick,
  type = 'button',
  $variant = 'primary',
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      $variant={$variant}
      {...rest}
    >
      {children}
    </StyledButton>
  )
}
