import React from 'react'
import "../Styles/Footer.css"
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { GrInstagram } from 'react-icons/gr';
import { AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';


// GrInstagram

const Footer = () => {
  return (
    <div>
        <div className="footer__container" variant="secondary"   bg="dark" data-bs-theme="dark">
            <Container bg="dark" data-bs-theme="dark" >
            <Navbar.Brand href="#home" className="brand__name">GrittlyStudent</Navbar.Brand>
                <div className="social__links">
                    <div className="socials">
                    <GrInstagram href="/" className='social Link'/>
                    <AiFillLinkedin className='social'/>
                    </div>

                    <div className="links">
                        <ul>
                            <li>About</li> 
                            <li>Contact</li>
                            <li>Podcasts</li>
                            <li>Terms and Conditions</li>
                        </ul>
                    </div>
                </div>

                <span className="footer__copy">&#169; GrittlyStudentsAll rights reserved</span>
            </Container>
        </div>
    </div>
  )
}

export default Footer