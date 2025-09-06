import Footer from '@/components/Footer'
import NavBar from '../components/NavBar'
import React from 'react'
// import { Footer } from 'react-day-picker'
import { Outlet } from 'react-router-dom'

function NavLayout() {
  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default NavLayout
