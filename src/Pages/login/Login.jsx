import { useState } from "react";
import AuthForm from "../../Components/auth-form/AuthForm";
import { useAuth } from "../../Context/AuthContext"

function Login() {
    const { login, isLoggedIn } = useAuth();
    

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

    return <AuthForm username={username} setUsername={setUsername} password={password} setPassword={setPassword} label="login" handleSubmit={handleSubmit} />;
}

export default Login;
