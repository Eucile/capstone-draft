import React from "react";
import { Link } from 'react-router-dom';

function NavBar(){
  var navBox = {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "space-between",
    width: "100%"
  };

  var navStyles = {
    marginLeft: "5em",
    marginRight: "5em",
  };

  return (
    <div>
      <ul style={navBox}>
        <li style={navStyles}><a href="">home</a></li>
        <li style={navStyles}><a href="">about</a></li>
        <li style={navStyles}><a href="">contact</a></li>
        <li style={navStyles}><a href="">archive</a></li>
        <li style={navStyles}><a href="">art</a></li>
        <li style={navStyles}><Link to="/LogInForm">log in</Link></li>
      </ul>
    </div>
  );
}

export default NavBar;
