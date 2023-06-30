import { React } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
import { LandingPage } from './LandingPage'
import { Navigation } from './Navigation';
import "tailwindcss/tailwind.css";

function App() {
 

  return (
   <div>
    <Navigation/>
    <Routes>
      <Route path="/" element={<LandingPage/>} />
    </Routes>
   </div>
  )
}

export default App
