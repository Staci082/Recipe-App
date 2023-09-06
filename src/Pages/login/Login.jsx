import { useState } from "react";
import { useCookies } from "react-cookie"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import AuthForm from "../../Components/auth-form/AuthForm";


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [_, setCookies ] = useCookies(["access_token"]);

    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post("http://localhost:5712/auth/login", {
                username,
                password
            })

            setCookies("access_token", response.data.token)
            window.localStorage.setItem("userID", response.data.userID)
            navigate("/")

        } catch (error) {
            console.error(error)
        }

    }

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