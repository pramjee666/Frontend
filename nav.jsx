import React from 'react';
import { NavLink } from "react-router-dom";

const Nav = () => {
    return ( 
        <div className="bg-success p-2 text-white bg-opacity-50 ">
            <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
             <NavLink className="navbar-brand" to="/home" >HealthCareApp</NavLink>
             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
             </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                         <li className="nav-item">
                         <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                         </li>
                        <li className="nav-item">
                         <NavLink className="nav-link" to="/aboutus">AboutUS</NavLink>
                         </li>
                         <li className="nav-item">
                         <NavLink className="nav-link " to="/diagnosticTest">
                          DiagnosticTest
                     </NavLink>
                     </li>
                        </ul>
                        <ul className="navbar-nav mb-2">
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/login">
                        Login
                        </NavLink>
                         </li>
                         <li className="nav-item">
                        <NavLink className="nav-link" to="/register">
                        Register
                        </NavLink>
                         </li>
                        </ul>
                     </div>
                 </div>
            </nav>
        </div>
     );
}
 
export default Nav;