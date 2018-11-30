import React from "react";
import NavBar from "./NavBar";
import { Link } from 'react-router-dom';

function Header(){
  var HeaderStyles = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  };
  return (
    <div style={HeaderStyles}>
      <NavBar/>
    </div>
  );
}

export default Header;
