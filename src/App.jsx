import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './component/Layout/Layout'
import Home from './component/Home/Home'
import About from './component/About/About'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Layout></Layout>,
      children:[
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    }
  ])

  return (
    <div className="App ">
     <RouterProvider router={router}>

    </RouterProvider>
    </div>
  )
}

export default App
