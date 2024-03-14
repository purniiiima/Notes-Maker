import React from 'react'
import "./App.css"
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
import Content from './components/Content'

export default function App() {
  return (
    <div>
      <SideBar/>
      <NavBar/>
      <Content/>
    </div>
  )
}
