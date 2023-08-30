
function Login() {
  return (
    <div className="login-container">

            <form className="login-form">
                <h2>Login</h2>
                <label htmlFor="name">Username:</label>
                <input type="text" id="name" name="name"/>

                <label htmlFor="password">Password:</label>
                <input id="password" name="mpassword"/>

                <button type="submit" className="submit-button">Submit</button>
            </form>

        </div>
  )
}

export default Login