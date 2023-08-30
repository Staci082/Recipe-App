
function Login() {
  return (
    <div className="login-container">

            <form className="login-form">
                <a href="/" className="form-back-button">&times;</a>
                <h2>Log in</h2>
                <label htmlFor="name">Username:</label>
                <input type="text" id="name" name="name"/>

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password"/>

                <button type="submit" className="submit-button">Log in</button>
            </form>

        </div>
  )
}

export default Login