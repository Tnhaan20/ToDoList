import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ChevronFirst } from 'lucide-react'
import React, { createContext, useContext, useState } from 'react'

const SidebarContext = createContext()

export default function SideBar({children}) {
  const [expanded, setExpanded] = useState(true)
  
  return (
    <aside className="h-screen">
      <nav className={`background h-full ${expanded ? "w-72" : "w-16"} flex flex-col border-gray-400 border-r shadow-sm transition-all duration-300 ease-in-out`}>
        <div className="p-4 pb-2 flex justify-between items-center">
          <span className="flex items-center overflow-hidden">
          <img className={`rounded-full shrink-0 transition-all duration-300 ease-in-out ${expanded ? "w-14 h-14" : "w-8 h-8"}`} src="https://i.pinimg.com/564x/0a/fc/82/0afc82d6410e1f3910e8bbbb52bba0fc.jpg" alt="" />
          <div className={`ml-3 overflow-hidden transition-all duration-300 ease-in-out ${expanded ? "w-40 opacity-100" : "w-0 opacity-0"}`}>
              <p className="text-md font-medium">Nhan Thanh</p>
              <p className="text-sm text-gray-500">nhancd909@gmail.com</p>
            </div>
          </span>
        </div>
        
        <div className="p-4 pb-2 flex justify-between items-center">
          <span className={`text-xl transition-all duration-300 ease-in-out ${expanded ? "opacity-100" : "opacity-0 w-0"}`}>To do Web App</span>
          <button onClick={() => setExpanded((curr) => !curr)} className="p-1 rounded-lg hover-animation">
            <ChevronFirst className={`h-5 w-5 transition-transform duration-300 ${expanded ? "rotate-0" : "rotate-180"}`}/>
          </button>
        </div>
        
        <SidebarContext.Provider value={{expanded}}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
        
        <div className="flex w-full justify-center items-left p-2 hover-animation">
          <button className="flex items-center justify-center w-full">
            <i className={`fa fa-plus ${expanded ? "" : "flex items-center justify-center w-full pl-3"}`} aria-hidden="true"></i>
            <span className={`ml-3 transition-all duration-300 ease-in-out ${expanded ? "opacity-100" : "opacity-0 w-0"}`}>New list</span>
          </button>
        </div>

      </nav>
    </aside>
   )
}
export function SideBarItem({icon, text, number, active}){
  const {expanded} = useContext(SidebarContext)
  return(
    <li className={`
      relative flex items-center justify-start py-2 px-3 my-1
      font-medium rounded-md cursor-pointer
      transition-colors group
      ${active ? "background-active" : "hover-animation"}
    `}>
      <div className="flex items-center justify-center w-8 h-8 relative">
        {icon}
        {number && !expanded && (
          <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-black text-white text-sm flex items-center justify-center">
            {number}
          </span>
        )}
      </div>
      <span className={`overflow-hidden transition-all duration-300 ease-in-out ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
      {number && expanded && (
        <span className="ml-auto w-5 h-5 rounded-full bg-black text-white text-xs flex items-center justify-center">
          {number}
        </span>
      )}
      
      {!expanded && (
        <div className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          text-sm bg-[#ffffff] text-black
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}>
          {text}
        </div>
      )}
    </li>
  )
}
