import React from 'react';
import './App.css';
import Accept from './accept';
import GreetingPage from './greetingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AcceptFrind from './acceptFrind';

function App() {
  return (
<>
  <Router>
      <Routes>
      <Route  exact path="/" Component={GreetingPage} />
      <Route  exact path="/accept" Component={Accept} />     
      <Route  exact path="/acceptFrind" Component={AcceptFrind} /> 
      </Routes>
    </Router>

    </>
    );
}
export default App;



