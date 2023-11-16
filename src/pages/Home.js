import React from 'react'
import '../App.scss'
import About from '../comp/About'
import Skill from '../comp/Skill'
import Work from '../comp/Work'
import Contact from '../comp/Contact'

function Home() {
  return (
    <>
      <About/>
      <Skill/>
      <Work/>
      <Contact/>

    </>
  )
}

export default Home