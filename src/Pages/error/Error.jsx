import taco from "/runningtaco.gif";

function Error() {
    return (
        <>
            <div className="no-auth-container">
                <a href="/" className="form-back-button">
                    &times;
                </a>
                <p className="no-auth-text">404</p>
                <p className="no-auth-text">Page not found.</p>
                <img src={taco} alt="taco gif" className="taco-gif" />
            </div>
        </>
    );
}

export default Error;
