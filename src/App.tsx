import React from 'react';
import './App.css';
import Layout from "./components/layout/layout";
import Router from "./routes/router";
import UserContextProvider from "./context/userContextProvider";

function App() {
  
  return (
    <div className="App">
      <UserContextProvider>
        <Layout>
          <Router/>
        </Layout>
      </UserContextProvider>
    </div>
  );
}

export default App;
