import './index.css'

const NotFound = props => {
  const onClickGoBackToHome = () => {
    const {history} = props
    history.replace('/')
  }

  return (
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/du8lwvfjj/image/upload/v1758367344/not-found_ia5toh.svg"
        alt="not found"
        className="not-found-image"
      />
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-description">
        we are sorry, the page you requested could not be found. Please go back
        to the homepage.
      </p>
      <button
        type="button"
        className="not-found-button"
        onClick={onClickGoBackToHome}
      >
        Go Back to Home
      </button>
    </div>
  )
}

export default NotFound
