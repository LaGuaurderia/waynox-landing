import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Home from '../pages/Home'
import Servicios from '../pages/Servicios'
import Proyectos from '../pages/Proyectos'
import Precios from '../pages/Precios'
import Nosotros from '../pages/Nosotros'
import Blog from '../pages/Blog'
import Contacto from '../pages/Contacto'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'servicios', element: <Servicios /> },
      { path: 'proyectos', element: <Proyectos /> },
      { path: 'precios', element: <Precios /> },
      { path: 'nosotros', element: <Nosotros /> },
      { path: 'blog', element: <Blog /> },
      { path: 'contacto', element: <Contacto /> },
    ],
  },
])

const AppRouter: React.FC = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter


