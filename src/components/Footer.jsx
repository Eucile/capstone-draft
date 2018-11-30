import React from "react";
import { Link } from 'react-router-dom';

function Footer(){
  var FooterStyles = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    justifyContent: "space-around",
    width: 900,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '1em',
    fontSize: '1em',
    borderTop: '1px solid #d9d9d9',
  };
  var pStyles = {
    color: '#8c8c8c',
    padding: '.5em',
  }
  return (
    <div style={FooterStyles}>
      <p style={pStyles}>Footer Styles stuff goes here la lal ala.</p>
    </div>
  );
}

export default Footer;
