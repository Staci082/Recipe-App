
function NotAuthorized() {

  return (
    <>

    <div className="no-auth-container">
    <a href="/" className="form-back-button">
        &times;
    </a>
        <p className="no-auth-text">You must be logged in to use this feature.</p>
    <img src="../../../public/runningtaco.gif" alt="taco gif" className="taco-gif"/>
    </div>

    </>
  )
}

export default NotAuthorized