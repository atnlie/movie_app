import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import NarBar from "./components/NavBar/NavBar";
import RouterApp from "./router/Router";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <RouterApp />
        </BrowserRouter>
    </div>
  );
}

export default App;
