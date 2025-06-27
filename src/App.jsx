import { useState } from 'react'
import './App.css'
import NavBar from './components/navbar.jsx'
import HomePage from './pages/landing.jsx'
import ProjectPage from './pages/projects.jsx'
import AboutMe from './pages/aboutme.jsx'

function App() {
  return (
    <>
      <NavBar />
      <div className="fullpage-container">
        <section className="fullpage-section">
          <HomePage />
        </section>
        <section className="fullpage-section">
          <ProjectPage />
        </section>
        <section className="fullpage-section">
          <AboutMe />
        </section>
      </div>
    </>
  )
}

export default App
