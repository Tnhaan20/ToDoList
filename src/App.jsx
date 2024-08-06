import React from 'react'
import { Router } from 'react-router-dom'
import SideBar, { SideBarItem } from './components/SideBar/SideBar'
import {} from "lucide-react"
export default function App() {
  return (
    <>
    <section className="bg-img">
      <SideBar>
        <SideBarItem icon={<i class="fa fa-bullseye" aria-hidden="true"></i>} text='My day' number={2} active></SideBarItem>
        <SideBarItem icon={<i class="fa fa-star" aria-hidden="true"></i>} text='Important' number={4}></SideBarItem>
        <SideBarItem icon={<i class="fa fa-tasks" aria-hidden="true"></i>} text='All task' number={3}></SideBarItem>
        <hr className="my-3" />
        <SideBarItem icon={<i class="fa fa-home" aria-hidden="true"></i>} text='Home' number={4}></SideBarItem>
        <SideBarItem icon={<i class="fa fa-check" aria-hidden="true"></i>} text='Completed' number={3}></SideBarItem>
      </SideBar>
    </section>
    </>
  )
}

