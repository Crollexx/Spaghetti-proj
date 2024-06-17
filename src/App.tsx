import React from 'react';
import './App.css';
import Layout from "./components/layout/layout";
import Router from "./routes/router";
import UserContextProvider from "./context/userContextProvider";
import {BrowserRouter} from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <UserContextProvider>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </UserContextProvider>
    </div>
  );
}

export default App;
