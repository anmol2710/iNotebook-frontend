import './App.css';
import React , {useState} from 'react'
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import { Routes, Route } from "react-router-dom";
import Login from './components/user/Login';
import SignUp from './components/user/Signup';
import AddNote from './components/NoteItem/AddNote'
import Cookies from 'js-cookie';
import NotePage from './components/NoteItem/NotePage';

function App() {

  const [isLoggedIn , setIsLoggedIn] = useState(false);

  const handleLogin = () =>{
    setIsLoggedIn(true);
  }
  
  const handleLogout = () =>{
    Cookies.remove('token')
    setIsLoggedIn(false);
  }
  
  return (
    <>
        <Navbar isLoggedIn = {isLoggedIn} handleLogout = {handleLogout} />
        <Routes>
          <Route exact path='/' element={<Home isLoggedIn = {isLoggedIn} handleLogin = {handleLogin} />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path="/login" element={<Login handleLogin = {handleLogin} />} />
          <Route exact path="/Signup" element={<SignUp handleLogin = {handleLogin} />} />
          <Route exact path="/addnote" element={<AddNote />} />
          <Route exact path="/note/:id" element={<NotePage/>} />
        </Routes>
    </>
  );
}

export default App;
