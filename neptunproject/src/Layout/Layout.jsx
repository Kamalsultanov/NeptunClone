import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Main from '../components/main/Main'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout