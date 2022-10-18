import React from "react";

const Dashboard=()=>{
    const fname=localStorage.getItem('fname')
    const lname=localStorage.getItem('lname')
    const email=localStorage.getItem('email')
    return(
        <div className="Dashboard">
            <h2>Dashboard</h2>
            <h4>Name: {fname} {lname}</h4>
            <h4>Email: {email}</h4>
            <h4>Skills: c++,java</h4>
        </div>
    );
}
export default Dashboard;
