import { createContext, useContext, useEffect, useState } from "react";
import { ToastSuccess, ToastError } from "../Hooks/useToasts";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [state, setState] = useState();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();

    const register = async (userData) => {
        try {
            const response = await axios.post("http://localhost:5712/auth/register", userData);
            const { token, userID } = response.data;
            const decoded = jwt_decode(token);

            localStorage.setItem("user", JSON.stringify(decoded));
            setState(decoded);
            setIsLoggedIn(true);
            localStorage.setItem("userID", userID);
            ToastSuccess("test!");
        } catch (error) {
            console.error(error);
            setIsLoggedIn(false)
        }
    };

    const login = (username, password) => {
        axios
            .post("http://localhost:5712/auth/login", {
                username,
                password,
            })
            .then((response) => {
                const decoded = jwt_decode(response.data.token);
                localStorage.setItem("user", JSON.stringify(decoded));
                setState(decoded);
                setIsLoggedIn(true);
                ToastSuccess("Logged in successfully!");
                navigate("/");
            })
            .catch((error) => {
                console.error(error);
                setIsLoggedIn(false)
                ToastError("Oops! Somthing went wrong!");
            });
    };

    const logout = () => {
        localStorage.removeItem("user");
        setState(null);
        setIsLoggedIn(false);
        ToastSuccess("You have been logged out.");
    };

    const checkIsLoggedIn = () => {
        const user = localStorage.getItem("user");
        if (user) {
            setState(JSON.parse(user))
            setIsLoggedIn(true);
        } 
    };

    useEffect(() => {
        checkIsLoggedIn();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                AuthContext,
                state,
                register,
                login,
                logout,
                isLoggedIn
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
