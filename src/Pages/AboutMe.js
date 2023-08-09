import React from 'react'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'

import ProfilePic from '../Assets/profilepic.jpeg'
import "../Styles/Aboutme.css"
import Typography from '@mui/material/Typography';
import { BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
 


const AboutMe = () => {
  return (
    <>

      <Navigation />


      <div className="container">
        <div className="image__description row">
          <div className="image__box col-md-6">
            <img src={ProfilePic} alt="" className="profile_pic" />
          </div>



          <div className="description__box col-md-6">
            <h4 className="header">
              Hello My name is Givine Mariazu
            </h4>

            <p className="body">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Fuga, voluptatem iste. Culpa saepe veritatis dicta porro quibusdam.
              Modi, possimus amet. Doloribus modi voluptate dolorem fugit excepturi! Unde facere tenetur perferendis.
            </p>


            <div className="wrapper">
              <li className="icon linkedIn">
                <span className="tooltip">LinkedIn</span>
                <span><BsLinkedin /></span>
              </li>


              <li className="icon twitter">
                <span className="tooltip">Twitter</span>
                <span><BsTwitter /></span>
              </li>



              <li className="icon instagram">
                <span className="tooltip">Instagram</span>
                <span><FaInstagramSquare /></span>
              </li>
            </div>
          </div>




        </div>


        <div className="second__section">
          <Typography variant="h3" gutterBottom>
            More on Grittly Students
          </Typography>
        </div>
      </div>


      <Footer />
    </>
  )
}

export default AboutMe