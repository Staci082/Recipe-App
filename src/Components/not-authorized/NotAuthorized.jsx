import taco from "/runningtaco.gif"


function NotAuthorized() {

  return (
    <>

    <div className="no-auth-container">
    <a href="/" className="form-back-button">
        &times;
    </a>
        <p className="no-auth-text">You must be logged in to use this feature.</p>
    <img src={taco} alt="taco gif" className="taco-gif"/>
    </div>

    </>
  )
}

export default NotAuthorized