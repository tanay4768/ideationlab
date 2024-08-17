import React from 'react'
import Header from './components/Header/Header'
import Header2 from './components/Header/Header2'

import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
        <Header />
        <Outlet />
        {/* <Footer /> */}
    </>
  )
}

export default Layout