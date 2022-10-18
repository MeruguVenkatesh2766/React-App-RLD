import React from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
function Login() {
  
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const navigate=useNavigate()

  const submitHandler = e=>{
    e.preventDefault()
    const uemail=localStorage.getItem('email')
    const upwd=localStorage.getItem('password')
    if(uemail===email && upwd===password){
      navigate('/dashboard')
    }
  }


  return (
    <div className="App">
      <div className="LogForm">
      <form>
        <h1>Login</h1>
        <h2>Email :</h2>
        <input type="email" name="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br></br>
        <h2>Password :</h2>
        <input type="password" name="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br></br>
        <br></br>
          <button className="button" onClick={submitHandler}>Login</button>
      </form>
      </div>
    </div>
  );
}

export default Login;
