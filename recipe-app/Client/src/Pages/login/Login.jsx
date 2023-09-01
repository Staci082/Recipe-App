function Login() {
    return (
        <div className="login-container">
            <form className="login-form">
                <a href="/" className="login-back-button">
                    &times;
                </a>
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
