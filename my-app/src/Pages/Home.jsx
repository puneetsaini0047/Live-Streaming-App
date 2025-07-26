import React from 'react'
import Brand from '../components/Brand'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import JoinRoom from '../components/JoinRoom'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
        <Navbar/>
        <Hero/>
        <Brand/>
        <JoinRoom/>
        <Pricing/>
        <FAQ/>
        <Footer/>
    </div>
  )
}

export default Home