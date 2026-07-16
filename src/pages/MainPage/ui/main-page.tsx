import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import type { NavItemId } from '../../../shared/config/navigation.ts'
import { theme } from '../../../shared/styles/theme.ts'
import '../../../app/styles/global.css'
import { Header } from './header.tsx'
import { Sidebar } from './sidebar.tsx'
import { WelcomeScreen } from './welcome-screen.tsx'
import { Body, Content, Page } from './main-page.styled.ts'

export const MainPage = () => {
  const [activeSection, setActiveSection] = useState<NavItemId>('messages')

  return (
    <ThemeProvider theme={theme}>
      <Page>
        <Sidebar
          currentId={activeSection}
          onSelect={setActiveSection}
        />

        <Body>
          <Header />
          <Content>
            <WelcomeScreen />
          </Content>
        </Body>
      </Page>
    </ThemeProvider>
  )
}
