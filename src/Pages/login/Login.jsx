import form from "../../Components/auth-form/authForm";

function Login() {
    return (
        <div className="auth-container">
            <a href="/" className="back-button">
                &times;
            </a>
            <form className="auth-form">
                <h2>Log in</h2>

                <div className="form-group">
                    <label htmlFor="name">Username:</label>
                    <input type="text" name="name" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" />
                </div>

                <button type="submit" className="submit-button">
                    Log in
                </button>
            </form>
        </div>
    );
}

export default Login;
