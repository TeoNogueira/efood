import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {GlobalCss} from './styles'

import Home from './pages/Home/Index'
import Products from './pages/Products/Index'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/products" element={<Products />}></Route>
  </Routes>

)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
    </BrowserRouter>
  )
}

export default App
