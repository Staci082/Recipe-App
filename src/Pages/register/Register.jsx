import { useState } from "react"
import { useNavigate } from "react-router-dom";
import AuthForm from "../../Components/auth-form/authForm"
import { useAuth } from "../../Context/AuthContext";
import { ToastSuccess, ToastError } from "../../Hooks/useToasts";

function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const { register } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            const userData = {
                username,
                password,
                };
            register(userData);

            ToastSuccess("Registered successfully!");
            navigate("/login");
        } catch (error) {
            console.error(error);
            ToastError("Oops! Somthing went wrong!");
        }
    };

    return <AuthForm 
                username={username} 
                setUsername={setUsername} 
                password={password} 
                setPassword={setPassword} 
                label="register" 
                handleSubmit={handleSubmit} />;
}

export default Register;
