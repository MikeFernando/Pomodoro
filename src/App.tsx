import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { GlobaStyle } from './styles/global'
import { THEME } from './styles/theme'

export function App() {
  return (
    <ThemeProvider theme={THEME}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobaStyle />
    </ThemeProvider>
  )
}
