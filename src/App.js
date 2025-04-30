import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home/Home'
import Product1 from './Product Page/Product1'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/earbuds' element={<Product1 />} />
      </Routes>
    </div>

  )
}

export default App
