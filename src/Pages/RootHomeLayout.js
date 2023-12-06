import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from '../Components/NavigationBar'
import Footer from './Footer'


function RootHomeLayout() {
  return (
    <>
    <NavigationBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default RootHomeLayout