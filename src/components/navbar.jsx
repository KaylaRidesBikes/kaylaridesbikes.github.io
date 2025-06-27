import './css/navbar.css'
import homeButton from '../assets/bunny_button.gif'

function NavBar() {
  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <a href="#top">
          <img src={homeButton} className="home_button" alt="Home" />
        </a>

        <nav className="navbar-links">
          <a href="#projects" className="navbar-link">My Projects</a>
          <a href="#aboutme" className="navbar-link">About Me</a>
          <a href="mailto:kaylaridesbikes@gmail.com" className="navbar-link">Contact</a>
        </nav>
      </div>
    </header>

  )
}

export default NavBar