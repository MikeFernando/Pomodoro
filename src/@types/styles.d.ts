import 'styled-components'

import { THEME } from '../styles/theme'

type ThemeType = typeof THEME

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}