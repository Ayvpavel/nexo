import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import {
  BackMessage,
  MainMessage,
  IconWrap,
  Screen,
  Subtitle,
  Title,
} from './welcome-screen.styled.ts'

export const WelcomeScreen = () => {
  return (
    <Screen>
      <IconWrap>
        <BackMessage>
          <ChatBubbleOutlinedIcon />
        </BackMessage>
        <MainMessage>
          <ChatBubbleIcon />
        </MainMessage>
      </IconWrap>

      <Title>Выберите диалог</Title>
      <Subtitle>
        Выберите чат из списка слева, чтобы начать общение
      </Subtitle>
    </Screen>
  )
}
