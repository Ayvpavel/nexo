import styled from 'styled-components'

export const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  background: ${({ theme }) => theme.colors.panelBg};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: min(100%, 420px);
`

export const SearchWrap = styled.div`
  position: relative;
  flex: 1;
  min-width: 0;
`

export const SearchIconWrap = styled.span`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  color: ${({ theme }) => theme.colors.textSecondary};
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 16px 10px 40px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: 14px;
  outline: none;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`
