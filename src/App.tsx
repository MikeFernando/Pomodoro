import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { CycleContextProvider } from './context/CyclesContext'

import { GlobaStyle } from './styles/global'
import { THEME } from './styles/theme'

export function App() {
  return (
    <ThemeProvider theme={THEME}>
      <BrowserRouter>
        <CycleContextProvider>
          <Router />
        </CycleContextProvider>
      </BrowserRouter>
      <GlobaStyle />
    </ThemeProvider>
  )
}
