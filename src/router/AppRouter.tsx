import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import Tarifas from '../pages/Tarifas'
import Proyectos from '../pages/Proyectos'
import Nosotros from '../pages/Nosotros'
import Blog from '../pages/Blog'
import BlogPost from '../pages/BlogPost'
import Contacto from '../pages/Contacto'
import Terminos from '../pages/Terminos'
import Privacidad from '../pages/Privacidad'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'tarifas', element: <Tarifas /> },
      { path: 'proyectos', element: <Proyectos /> },
      { path: 'nosotros', element: <Nosotros /> },
      { path: 'blog', element: <Blog /> },
      { path: 'blog/:slug', element: <BlogPost /> },
      { path: 'contacto', element: <Contacto /> },
      { path: 'terminos', element: <Terminos /> },
      { path: 'privacidad', element: <Privacidad /> },
    ],
  },
])

const AppRouter: React.FC = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter


