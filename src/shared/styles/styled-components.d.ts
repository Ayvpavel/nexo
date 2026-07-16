import type { AppTheme } from './theme.ts'

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
