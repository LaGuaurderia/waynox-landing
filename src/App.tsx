import AppRouter from './router/AppRouter'
import { SEOProvider } from './components/SEO'
import { ThemeProvider } from './components/ThemeProvider'
import './styles/globals.css'

function App() {
  return (
    <ThemeProvider>
      <SEOProvider>
        <AppRouter />
      </SEOProvider>
    </ThemeProvider>
  )
}

export default App
