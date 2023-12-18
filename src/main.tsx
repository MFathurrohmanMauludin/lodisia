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
import StartCarier from './pages/start-carier'
import Company from './pages/company-list'
import SkipToContent from './components/skip-content'
import SaveJobs from './pages/save-jobs'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cari-pekerjaan",
    element: <SearchPage />,
  },
  {
    path: "/memulai-karir",
    element: <StartCarier />,
  },
  {
    path: "/daftar-perusahaan",
    element: <Company />,
  },
  {
    path: "/lowongan-tersimpan",
    element: <SaveJobs />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SkipToContent />
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)
