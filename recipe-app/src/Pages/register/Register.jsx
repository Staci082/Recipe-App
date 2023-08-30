// https://www.freecodecamp.org/news/how-to-build-forms-in-react/

function Register() {
    return (
        <div className="register-container">
            <form className="register-form">
                <a href="/" className="form-back-button">&times;</a>
                <h2>Register</h2>
                <label htmlFor="name">Username:</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />

                <button type="submit" className="submit-button">
                    Register
                </button>
            </form>
        </div>
    );
}

export default Register;
