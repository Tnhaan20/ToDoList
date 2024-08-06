import React from 'react'
import SideBar, { SideBarItem } from './components/SideBar/SideBar'
import {} from "lucide-react"
import { Link, useLocation } from 'react-router-dom'

export function homePage(){
  return(
    <div className="text-3xl">dfsdfsdfsdf</div>
  )
}

export default function App() {
  const location = useLocation()
  return (

    <section className="bg-img">

    <SideBar>
      <Link to="/myday">
        <SideBarItem 
          icon={<i className="fa fa-bullseye" aria-hidden="true"></i>} 
          text='My day' 
          number={2} 
          active={location.pathname === '/myday'}
          />
      </Link>
      <Link to="/important">
        <SideBarItem 
          icon={<i className="fa fa-star" aria-hidden="true"></i>} 
          text='Important' 
          number={4}
          active={location.pathname === '/important'}
          />
      </Link>
      <Link to="/alltask">
        <SideBarItem 
          icon={<i className="fa fa-tasks" aria-hidden="true"></i>} 
          text='All task' 
          number={3}
          active={location.pathname === '/alltask'}
        />
      </Link>
      <hr className="my-3" />
      <Link to="/flag">
        <SideBarItem 
          icon={<i className="fa fa-flag" aria-hidden="true"></i>} 
          text='Flag' 
          number={4}
          active={location.pathname === '/flag'}
        />
      </Link>
      <Link to="/completed">
        <SideBarItem 
          icon={<i className="fa fa-check" aria-hidden="true"></i>} 
          text='Completed' 
          number={3}
          active={location.pathname === '/completed'}
          />
      </Link>
    </SideBar>
    </section>  
    
  
  )
}

