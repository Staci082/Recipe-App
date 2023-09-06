import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import AuthForm from "../../Components/auth-form/AuthForm";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            await axios.post("http://localhost:5712/auth/register", {
                username,
                password
            })
            alert("Registration completed! Please log in.")
            navigate("/login")
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
        label="register"
        onSubmit={onSubmit} />
    );
}

export default Register;
