import React from 'react'
import "../Styles/Footer.css"
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <div>
        <div className="container" bg="dark" data-bs-theme="dark">
        <Navbar.Brand href="#home" className="brand__name">GrittlyStudent</Navbar.Brand>
            
        </div>
    </div>
  )
}

export default Footer