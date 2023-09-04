import React from "react";

function LoginRegister() {
    return (
        <div className="login-register-links">
            <a href="/login">Log in</a>
            <p>&#x2022;</p>
            <a href="/register">Register</a>
            <p className="close-menu-button">&times;</p>
        </div>
    );
}

export default LoginRegister;
