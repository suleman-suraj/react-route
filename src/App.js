 import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Blog from './pages/Blog'
import Home from './pages/Home'
 
 function App() {
   return (
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/about' element={<About/>} />
       <Route path='/blog' element={<Blog/>} />
       <Route path='*' element={<Navigate/>} />
     </Routes>
   )
 }
 
 export default App