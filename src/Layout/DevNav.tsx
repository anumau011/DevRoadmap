import DevNavBar from '@/components/DevNavBar'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function DEV() {
  return (
    <>
      <DevNavBar/>
      <Outlet/>   
    </>
  )
}

export default DEV
