import styled from 'styled-components'

export const StyledButton = styled.button<{ $variant: 'primary' | 'secondary' }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 10px;
  min-width: 40px;
  min-height: 40px;
  background: ${({ $variant, theme }) =>
    $variant === 'primary' ? theme.colors.primary : theme.colors.white};
  color: ${({ $variant, theme }) =>
    $variant === 'primary' ? theme.colors.white : theme.colors.text};
  border: ${({ $variant, theme }) =>
    $variant === 'primary' ? 'none' : `1px solid ${theme.colors.border}`};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: 14px;
  cursor: pointer;
  white-space: nowrap;
  line-height: 1;

  &:hover {
    background: ${({ $variant, theme }) =>
      $variant === 'primary' ? '#6a1524' : theme.colors.panelBg};
  }
`
