import React from 'react'
import LandingPage from './components/LandingPage'
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles'
import ReactDOM from 'react-dom'

// import WidgetFallback from './components/WidgetFallback'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#99bee0',
      main: '#0085ff',
      dark: '0085ff',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000'
    },
    success: '#64dd17',
    text: {
      primary: '#404040',
      secondary: '#868686'
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: "'Fredoka One', cursive;"
  }
})


// const userContext = createContext(null)

// export const useUserStore = () => useContext(userContext)


const App = () => {
  return (
    <div>
        <MuiThemeProvider theme={theme}>
            <LandingPage />
        </MuiThemeProvider>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))
