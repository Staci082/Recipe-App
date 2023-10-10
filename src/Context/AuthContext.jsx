import { createContext, useContext, useEffect, useState } from "react";
import { ToastSuccess, ToastError } from "../Hooks/useToasts";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import baseAPI from "./baseAPI";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [state, setState] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const navigate = useNavigate();

    const register = async (userData) => {
        try {
            const response = await axios.post(baseAPI + "auth/register", userData);
            const { token, userID } = response.data;
            const decoded = jwt_decode(token);

            localStorage.setItem("user", JSON.stringify(decoded));
            setState(decoded);
            localStorage.setItem("userID", userID);
            setIsLoggedIn(true);
            ToastSuccess("You have been successfully registered!");
        } catch (error) {
            console.error(error);
            setIsLoggedIn(false)
            ToastError("Oops! Something went wrong!")
        }
    };

    const login = (username, password) => {

        axios.post(baseAPI + "auth/login", {
                username,
                password,
            })
            .then((response) => {
                const decoded = jwt_decode(response.data.token);
                const userId = decoded.userId;
                localStorage.setItem("user", JSON.stringify({ ...decoded, userId }));

                setState(decoded);
                setIsLoggedIn(true);
                ToastSuccess("Logged in successfully!");
                navigate("/");
            })
            .catch((error) => {
                console.error(error);
                setIsLoggedIn(false)
                ToastError("Oops! Something went wrong!");
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
            console.log(user)
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
