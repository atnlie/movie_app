import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NarBar from "./components/NavBar/NavBar";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NarBar />
        </BrowserRouter>
    </div>
  );
}

export default App;
