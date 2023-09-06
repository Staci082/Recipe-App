import { useState } from "react";
import AuthForm from "../../Components/auth-form/AuthForm";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <AuthForm 
        username={username} 
        setUsername={setUsername} 
        password={password}
        setPassword={setPassword} 
        label="login"
        onSubmit={onSubmit} />
    );
}

export default Login;