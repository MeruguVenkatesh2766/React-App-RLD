import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=>{
    return(
        <div>
            <ul>
                <Link to="/login"><li>Login</li></Link>
            </ul>
        </div>
    );
}

export default Navbar;