import styled from 'styled-components'

export const Page = styled.div`
  display: flex;
  height: 100vh;
`

export const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: ${({ theme }) => theme.colors.panelBg};
`

export const Content = styled.main`
  flex: 1;
  overflow: auto;
  background: ${({ theme }) => theme.colors.contentBg};
  margin: 0 16px 16px;
  border-radius: ${({ theme }) => theme.radius.lg};
`
