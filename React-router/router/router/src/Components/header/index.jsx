import React from "react";
import { NavLink,useLocation } from "react-router-dom";

function index() {  
  return (
    <div>   
      <nav className="navbar navbar-expand-lg navbar-light bg-light"> 
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">    
          <span className="navbar-toggler-icon"></span> 
        </button>   
        <div className="collapse navbar-collapse">    
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink exact className={location.pathname === '/' ? "active" : "nonactive"}  to='/'>All Courses</NavLink>  
            </li>   
            <li className="nav-item">
              <NavLink exact className={location.pathname === '/career' ? "active" : "nonactive"}  to='/career'>Career</NavLink>   
            </li>
            <li className="nav-item"> 
              <NavLink exact  className={location.pathname === '/cyber' ? "active" : "nonactive"} to='/cyber'>Cyber Security</NavLink>  
            </li>   
            <li className="nav-item">
              <NavLink exact  className={location.pathname === '/datascience' ? "active" : "nonactive"} to='/datascience'>Data Science</NavLink>  
            </li>
            <li className="nav-item">
              <NavLink exact  className={location.pathname === '/fullstack' ? "active" : "nonactive"} to='/fullstack'>Full Stack</NavLink>  
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default index;
