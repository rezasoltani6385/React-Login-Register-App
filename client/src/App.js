import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import PersonalInfo from './Pages/PersonalInfo';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/personalinfo' element={<PersonalInfo />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
