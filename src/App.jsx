import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Sobre from "./components/Sobre"
import Servicos from "./components/Servicos"
import Contato from "./components/Contato"
import Footer from "./components/Footer"
import Duvidas from "./components/Duvidas";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sobre />
      <Servicos />
      <Duvidas />
      <Contato />
      <Footer />
      
    </>
  )
}