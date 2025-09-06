import DsaNavBar from '@/components/DsaNavBar'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function DSA() {
  return (
    <>
      <DsaNavBar/>
      <Outlet/>   
    </>
  )
}

export default DSA
