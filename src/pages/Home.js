import React from 'react'
import HeroSection from '../components/HeroSection'
import { useEffect } from 'react'
import { useGlobalContext } from '../context'
// import About from './About'
import Services from './Services'
import Contact from './Contact'


const Home = () => {

  const { UpdateHomePage } = useGlobalContext()

  useEffect(() => {

    UpdateHomePage()


  }, [])



  return (
    <>
      <HeroSection />
      <Services />
      <Contact />
    </>

  )
}

export default Home