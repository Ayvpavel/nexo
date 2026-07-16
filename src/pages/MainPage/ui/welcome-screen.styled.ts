import styled from 'styled-components'

export const Screen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 400px;
  padding: 40px;
  text-align: center;
`

export const IconWrap = styled.div`
  position: relative;
  width: 88px;
  height: 72px;
  margin-bottom: 24px;
`

const BaseMessage = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const BackMessage = styled(BaseMessage)`
  left: 0;
  top: 8px;
  width: 48px;
  height: 40px;
  border-radius: 14px;
  background: #e5e5e5;
  color: #9e9e9e;

  & > svg {
    font-size: 22px;
  }
`

export const MainMessage = styled(BaseMessage)`
  right: 0;
  top: 0;
  width: 56px;
  height: 48px;
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};

  & > svg {
    font-size: 26px;
  }
`

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 10px;
`

export const Subtitle = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 360px;
  line-height: 1.5;
`
