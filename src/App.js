import React from "react"
import Header from "./component/Head/Header"
import Home from "./component/Hero/Home"
import Resume from "./component/Resume/Resume"
import About from "./component/About/About"
import Footer from "./component/Footer"
import "./App.css"

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Resume />
      <About />
      <Footer />
    </>
  )
}

export default App