import React from 'react'
import Brand from '../components/Brand'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import JoinRoom from '../components/JoinRoom'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
        <Navbar/>
        <Hero/>
        <Brand/>
        <Features/>
        <JoinRoom/>
        <Pricing/>
        <FAQ/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home