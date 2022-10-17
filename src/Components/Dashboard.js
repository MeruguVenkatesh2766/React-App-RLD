import React from "react";

const Dashboard=()=>{
    const name=localStorage.getItem('name')
    const email=localStorage.getItem('email')
    return(
        <div className="Dashboard">
            <h2>Dashboard</h2>
            <h4>Name: {name}</h4>
            <h4>Email: {email}</h4>
            <h4>Skills: c++,java</h4>
        </div>
    );
}
export default Dashboard;