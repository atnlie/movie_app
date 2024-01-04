import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import './App.css';
import RouterApp from "./router/Router";
import Footer from "./components/Footer/Footer";

const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <RouterApp />
            </BrowserRouter>
            <Footer />
        </QueryClientProvider>
    </div>

  );
}

export default App;
