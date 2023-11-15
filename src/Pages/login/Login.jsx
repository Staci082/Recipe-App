import { useState } from "react";
import AuthForm from "../../Components/forms/authForm";
import { useAuth } from "../../Context/AuthContext"

function Login() {
    const { login } = useAuth();
    

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            login(username, password);
        } catch (error) {
            console.error(error);
        }
    };

    return <AuthForm username={username} setUsername={setUsername} password={password} setPassword={setPassword} label="Log in" handleSubmit={handleSubmit} />;
}

export default Login;
