import React from 'react'
import './App.scss'
import Header from './assets/components/Header/Header'
import Digital from './assets/components/Digital/Digital'
import Logos from './assets/components/Logos/Logos'
import Branging from './assets/components/Branding/Branding'
import Costom from './assets/components/Costom/Costom'
import Cards from './assets/components/Cards/Cards'
import Part from './assets/components/Part/Part'
import Footer from './assets/components/Footer/Footer'

const App = () => {
  return (
   
    <>
      <Header/>
      <Digital/>
      <Logos/>
      <Branging/>
      <Costom/>
      <Cards/>
      <Part/>
      <Footer/>

    </>
  )
}

export default App