import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import MyDay from '../src/views/My day/myday.jsx'
import Important from './views/Important/important.jsx'
import AllTasks from './views/All Tasks/AllTasks.jsx'
import Flagged from './views/Flag/flag.jsx'
import Complete from './views/Complete/complete.jsx'

import './index.css'
import Home from './views/Home/home.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='myday' element={<MyDay/>}/>
          <Route path='important' element={<Important/>}/>
          <Route path='alltask' element={<AllTasks/>}/>
          <Route path='flag' element={<Flagged/>}/>
          <Route path='completed' element={<Complete/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
