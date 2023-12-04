import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from '../Components/NavigationBar'


function RootHomeLayout() {
  return (
    <>
    <NavigationBar/>
    <Outlet/>
    </>
  )
}

export default RootHomeLayout