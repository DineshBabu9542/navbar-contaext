// Write your code here

import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const themeImgURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navBgClass = isDarkTheme ? 'navbar-bg-dark' : 'navbar-bg-light'

      const siteLogoImgURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const navItemClass = isDarkTheme
        ? 'list-text-dark-theme'
        : 'list-text-light-theme'

      return (
        <div className={`nav-container ${navBgClass}`}>
          <div className="div-container">
            <div>
              <img
                src={siteLogoImgURL}
                alt="website logo"
                className="nav-light-theme-img"
              />
            </div>
            <ul className="home-and-about-container">
              <li>
                <Link to="/" className={`nav-link ${navItemClass}`}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className={`nav-link ${navItemClass}`}>
                  About
                </Link>
              </li>
            </ul>
            <div>
              <button
                className="img-btn"
                onClick={onToggleTheme}
                type="button"
                data-testid="theme"
              >
                <img
                  src={themeImgURL}
                  alt="light-theme"
                  className="nav-right-theme-img"
                />
              </button>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
