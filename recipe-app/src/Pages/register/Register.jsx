

// https://www.freecodecamp.org/news/how-to-build-forms-in-react/

function Register() {
    return (
        <div className="register-container">

            <form className="register-form">
                <h2>Register</h2>
                <label htmlFor="name">Username:</label>
                <input type="text" id="name" name="name"/>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email"/>

                <label htmlFor="password">Password:</label>
                <input id="password" name="mpassword"/>

                <button type="submit" className="submit-button">Submit</button>
            </form>

        </div>
    );
}

export default Register;
