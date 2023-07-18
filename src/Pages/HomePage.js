import React from 'react'
import Navigation from '../Components/Navigation'
import Banner from '../Components/Banner'
import Cards from '../Components/Cards'
import Footer from '../Components/Footer.js'

const HomePage = () => {
  return (
    <div>
        <Navigation/>
        <Banner/>
        <Cards/>
        <Footer/>
    </div>
  )
}

export default HomePage