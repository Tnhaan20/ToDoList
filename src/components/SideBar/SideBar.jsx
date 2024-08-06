import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ChevronFirst } from 'lucide-react'
import React from 'react'

export default function SideBar({children}) {
  return (
    <aside className=" h-screen">
      <nav className="background h-full w-72 flex flex-col border-gray-400 border-r shadow-sm">
        <div>
          <div className="p-4 pb-2 flex justify-between items-center">
          <span className="flex justify-between items-center">
            <img className="w-10 h-10" src="https://i.pinimg.com/564x/0a/fc/82/0afc82d6410e1f3910e8bbbb52bba0fc.jpg" alt="" />
            <p className="p-5">Nhan Thanh 
              <p>nhancd909@gmail.com</p>
            </p>
          </span>
          </div>
          
        </div>
        <div className="p-4 pb-2 flex justify-between items-center">
          <span className="text-xl">To do Web App</span>
          <button className="p-1 rounded">
            <ChevronFirst/>
          </button>
        </div>

        <ul className="flex-1">{children}</ul>

        <div>
          <button className="w-full flex text-left hover-animation p-3">
            <span>
            <i class="fa fa-plus p-2 pr-5" aria-hidden="true"></i>
            New list
            </span>
          </button>
        </div>
      </nav>
    </aside>

  )
}

export function SideBarItem({icon, text, number}){
  return(
    <li className="hover-animation w-full p-3 cursor-pointer text-base">
    <span className="p-1">{icon} {text}</span>
    <span className="inline-flex items-center justify-center w-8 h-8 bg-black rounded-full text-white">
      {number}
    </span>    

    </li>
  )
}
