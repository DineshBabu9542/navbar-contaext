// Write your code here

import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundBgContainer = isDarkTheme
        ? 'not-found-bg-dark'
        : 'not-found-bg-light'

      const notFoundHeadingText = isDarkTheme
        ? 'not-found-dark-heading'
        : 'not-found-light-heading'

      const notFoundDescriptionText = isDarkTheme
        ? 'not-found-dark-description'
        : 'not-found-light-description'

      return (
        <div className={`app-container ${notFoundBgContainer}`}>
          <Navbar />

          <div className="not-found-responsive-container">
            <div className="not-found-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="not-found-img"
              />
              <h1 className={`not-found-heading ${notFoundHeadingText}`}>
                Lost Your Way?
              </h1>
              <p className={`not-found-content ${notFoundDescriptionText}`}>
                We cannot seem to find the page you are looking for.
              </p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
