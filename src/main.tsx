import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

// styles
import './index.css'
import './App.css'

// features & components
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import SearchPage from './pages/search'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cari-pekerjaan",
    element: <SearchPage />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)
