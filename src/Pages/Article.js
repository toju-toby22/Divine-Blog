import React from 'react'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import "../Styles/article.css"
import image1 from "../Assets/mind.png"
import BookSlider from '../Components/BookSlider'
const Article = () => {
  return (
    <div>
        <Navigation/>


        <div className="Article_banner " data-bs-theme="dark">
                <div className="banner">
                <div className="second_header_text">
                    <h2 className="header_text">
                       TOP FEATURED ARTICLES
                    </h2>
                </div>

                </div>
            </div> 

      <div className="container article_section">
          <div className="topics">
            <div className=''>
              <img className='article_image' src={image1} alt="" />
            </div>

            <div className="contents">
              <h5 className="header">
                Fixed Mindset
              </h5>

              <p className="description">
                Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit.
              </p>
            </div>
          </div>


          <div className="topics">
            <div className=''>
              <img className='article_image' src={image1} alt="" />
            </div>

            <div className="contents">
              <h5 className="header">
                Fixed Mindset
              </h5>

              <p className="description">
                Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit.
              </p>
            </div>
          </div>


          <div className="topics">
            <div className=''>
              <img className='article_image' src={image1} alt="" />
            </div>

            <div className="contents">
              <h5 className="header">
                Fixed Mindset
              </h5>

              <p className="description">
                Lorem ipsum dolor sit amet, 
                consectetur adipisicing elit.
              </p>
            </div>
          </div>
      </div>
      <Footer/>
      
    </div>
  )
}

export default Article