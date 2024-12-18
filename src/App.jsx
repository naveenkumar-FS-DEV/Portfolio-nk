import { useEffect, useState } from "react"
import Contact from "./Components/Contact"
import Header from "./Components/Header"
import Home from "./Components/Home"
import Loader from "./Components/Loader"
import Projects from "./Components/Projects"
import Skills from "./Components/Skills"

const App = () => {
  let [loading, setLoading] = useState(true)

  useEffect(()=>{
  let timer =  setTimeout(()=>{
     setLoading(false)
   },3000)
   return () => clearTimeout(timer);

  },[])
  return (
    <div>
     {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Home />
          <Skills />
          <Projects />
          <Contact />
        </>
      )}
    </div>
  )
}

export default App
