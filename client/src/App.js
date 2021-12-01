import React, { createContext, useReducer } from 'react'
import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "./App.css";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SignIn from './components/SignIn';
import Registration from './components/Registration';
import Edit from './components/Edit';
import Errorpage from './components/Errorpage';
import Logout from './components/Logout';
import { initialState, reducer } from './reducer/UseReducer';

export const UserContext = createContext();


const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Router>
        <Navbar /> 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/Edit" element={<Edit />} />
          <Route element={<Errorpage />} />
          <Route path="/Logout" element={<Logout />} />
        </Routes>
        </Router>
      </UserContext.Provider>

    </>
  )
}

export default App

