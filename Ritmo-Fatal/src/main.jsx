/* eslint-disable react-refresh/only-export-components */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import VideoClipe from './pages/VideoClipe.jsx'
import Musica from './pages/Musica.jsx'
import Nos from './pages/Nos.jsx'


const Rotas = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        index: true,
        element: <Home/>
      },
      {
        path: "/VideoClipe",
        element: <VideoClipe/>,
      },
      {
        path: "/Musica",
        element: <Musica/>,
      },
      {
        path: "/Nos",
        element: <Nos/>,
      },
      {
        path: "*",
        element: <PageNotFound/>,
      },
      
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Rotas} />
  </StrictMode>,
)
