

import React,{useState} from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Logout from "./components/Logout";


const App=()=> {
  const[token, setToken] = useState("")

  return (
    <div>
      <Signup setToken = {setToken}/>
      <Login setToken = {setToken}/>
      <Dashboard token = {token}/>
      <Logout setToken = {setToken}/>
      
      
    </div>
  )
}

export default App;
