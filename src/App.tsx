import React from 'react';
import './App.css';
import Layout, {IUserInfo} from "./components/layout/layout";
import Router from "./routes/router";

function App() {
  
  const user: IUserInfo = {
    roleID: 0
  }
  
  return (
    <div className="App">
      <Layout user={user}>
        <Router user={user}/>
      </Layout>
    </div>
  );
}

export default App;
