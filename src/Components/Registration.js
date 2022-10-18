import React,{useState} from "react";
function Registration() {
  
  const[data,setData]=useState({
    fname:'',
    lname:'',
    email:'',
    password:'',
    cpassword:''
  })
  const{fname,lname,email,password,cpassword}=data;
  const changeHandler=e=>{
    setData({...data,[e.target.name]:[e.target.value]})
  }

  const submitHandler = e=>{
    e.preventDefault()
    if(password!==cpassword){
      alert("Paswword not matched")
    }
    localStorage.setItem('fname',fname)
    localStorage.setItem('lname',lname)
    localStorage.setItem('email',email)
    localStorage.setItem('password',password)
    localStorage.setItem('password',cpassword)

  }
  
  return (

    <div className="Appie">
      <form className="Registration">
        <h1 className="Header">Register Here</h1>
        <h3> First Name :</h3>
        <input type="text" name="fname" placeholder="Enter First Name" value={data.fname} onChange={changeHandler}/><br></br>
        <h3>Last Name :</h3>
        <input type="text" name="lname" placeholder="Enter Last Name" value={data.lname} onChange={changeHandler}/><br></br> 
        <h3>Email :</h3>
        <input type="email" name="email" placeholder="Enter Email" value={data.email} onChange={changeHandler}/><br></br>
        <h3>Password :</h3>
        <input type="password" name="password" placeholder="Enter Password" value={data.password} onChange={changeHandler}/><br></br>
        <h3>Confirm Password :</h3>
        <input type="password" name="cpassword" placeholder="Confirm Password" value={data.cpassword} onChange={changeHandler}/><br></br>
        <br></br>
        <button className="button" onClick={submitHandler}>Submit</button><br></br><br></br>
        <span>Alreeady Registered??</span> <a href="Login"><span className="Log">Login </span></a><span>Here</span>
      </form>
    </div>
  );
}

export default Registration;
