import React from 'react'
import Navigation from '../Components/Navigation'
import Banner from '../Components/Banner'
import Cards from '../Components/Cards'
import Footer from '../Components/Footer.js'
import { TableFooter } from '@mui/material'
import BookSlider from '../Components/BookSlider'

const HomePage = () => {
  return (
    <div>
        <Navigation/>
        <Banner/>
        <BookSlider/>
        <Cards/>
        <TableFooter/>
        <Footer/>
    </div>
  )
}

export default HomePage