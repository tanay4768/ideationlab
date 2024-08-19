import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { BrowserRouter } from 'react-router-dom'
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom/server'

import { BrowserRouter } from 'react-router-dom'
import { Route ,createBrowserRouter, createRoutesFromElements,  RouterProvider } from 'react-router-dom'
    
   
import Home from './components/Home/Home.jsx'
import Home2 from './components/Home/Home2.jsx'

import Layout from './Layout.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home/>} />
      </Route>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

