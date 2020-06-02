import React from 'react';
import Main from '../Main';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from '../Navigation';


function App() {
  return (
    <Router>
      <Navigation />
      <Main />
    </Router>
  );
}

export default App;
