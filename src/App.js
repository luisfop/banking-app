import React from 'react';
import {BrowserRouter} from 'react-router-dom'

import './App.css';
import Home from './pages/Home';
import Banking from './pages/Banking';




function App() {
  return (
     <div>
       <Home/>
       <Banking/>
    </div>
  );
}

export default App;
