import React from 'react'
import './App.css'
import { useWindowScroll } from 'react-use';
import Home from './page/Home';
import { BrowserRouter ,Route, Routes} from 'react-router-dom';
import Print from './component/Print';
import Banner from './component/Banner';
function App() {
  const { x, y } = useWindowScroll();

  return (
    <>
   
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<><Banner height={{y}}/><Home/></>} /> 
        <Route path="/print" element={<><Banner height={{y}}/><Print/></>} /> 
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
