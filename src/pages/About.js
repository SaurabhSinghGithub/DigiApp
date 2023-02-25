import React from 'react'
import HeroSection from '../components/HeroSection'
import { useEffect } from 'react'
import { useGlobalContext } from '../context'

const About = () => {

  const { UpdateAboutPage } = useGlobalContext()

  useEffect(() => {

    UpdateAboutPage()

  }, [])


  return (
    // <HeroSection name="kabir Singh" image={require("../images/hero2.png")} />
    <HeroSection />
  )
}

export default About