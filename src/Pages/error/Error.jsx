
function Error() {
  return (
    <>
     <div className="no-auth-container">
    <a href="/" className="form-back-button">
        &times;
    </a>
        <p className="no-auth-text">Page not found.</p> 
    <img src="../../../public/runningtaco.gif" alt="taco gif" className="taco-gif"/>
    </div>
    </>
  )
}

export default Error