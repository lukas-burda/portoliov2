
import './App.css'
import { Footer } from './navigation/footer/Footer'
import { Navbar } from './navigation/navbar/Navbar'
import { AboutMe } from './sections/aboutme/AboutMe'
import { HomePage } from './page/homepage/Homepage'
import { Skills } from './sections/skills/Skills'
import { Competences } from './sections/competences/Compenteces'
import { Projects } from './sections/projects/Projects'

function App() {

  return (
    <>
      <Navbar />
      <HomePage />
      <AboutMe />
      <Skills />
      <Competences />
      <Projects />
      <Footer />
    </>
  )
}

export default App
