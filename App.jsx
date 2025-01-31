import react from 'react'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import GuardDog from "./components/GuardDog"

import HomePage from './pages/Homepage'
import Login from "./pages/Login"
import Registration from "./pages/Registration"
import Home from "./pages/Home"
import NotFound404 from "./pages/NotFound404"
import Search from "./pages/Search"

function Logout(){
  localStorage.clear()
  return <Navigate to="/login" />
}

function Register(){
  localStorage.clear()
  return <Registration />
}

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/secure" element={<GuardDog><Home/></GuardDog>}/>

        <Route path="/" element={<HomePage />}/>
        <Route path="/reg" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/logout" element={<Logout />}/>
        <Route path="/search" element={<Search/>}/>


        <Route path="*" element={<NotFound404/>}/>
      </Routes>
    </BrowserRouter>
  )}

export default App

