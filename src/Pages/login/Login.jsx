import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import AuthForm from "../../Components/auth-form/AuthForm";
import { useAuth } from "../../Context/AuthContext"

function Login() {
    const { login } = useAuth(); // Access the login function from the authentication context

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            login(username, password); // Call the login function from the context
            // The login function will handle setting cookies, local storage, and navigation
        } catch (error) {
            console.error(error);
        }
    };

    // Rest of your component...

    return <AuthForm username={username} setUsername={setUsername} password={password} setPassword={setPassword} label="login" onSubmit={onSubmit} />;
}

export default Login;
