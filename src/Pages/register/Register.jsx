import { useState } from 'react'

function Register() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className="register-container">
            <a href="/" className="back-button">&times;</a>
            <form className="register-form">
                
                <h2>Register</h2>

                <div className="form-group">
                    <label htmlFor="name">Username:</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <button type="submit" className="register-submit-button">
                    Register
                </button>
            </form>
        </div>
    );
}

export default Register;
