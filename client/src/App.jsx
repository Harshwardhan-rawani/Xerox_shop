import { useState } from 'react'
import './App.css'
import Home from './page/Home';


import { BrowserRouter ,Route, Routes, Link } from 'react-router-dom';
function App() {
 

  return (
    <>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<><Home/></>} /> 
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
