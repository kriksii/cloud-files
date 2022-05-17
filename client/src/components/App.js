import React from 'react'
import './app.scss'

import { Routes, Route } from 'react-router-dom'

import Layout from './Layout'
import Registration from './registration/Registration'
import Login from './login/Login'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='registration' element={<Registration />} />
          <Route path='login' element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App