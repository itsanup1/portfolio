import { NavBar } from "./components/NavBar"
import { Hero } from "./components/Hero"
import { Terminal } from "./components/Terminal"


function App() {

  return (


    <section className="hero">
      <section className="relative z-10">
        <NavBar />
        <Hero />
        <Terminal />
      </section>
    </section>


  )
}

export default App
