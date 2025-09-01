import React from 'react'
import AppRouter from './router/AppRouter'
import { SEOProvider } from './components/SEO'
import './styles/globals.css'

function App() {
  return (
    <SEOProvider>
      <AppRouter />
    </SEOProvider>
  )
}

export default App
