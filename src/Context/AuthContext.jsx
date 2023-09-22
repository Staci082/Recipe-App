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
                setIsLoggedIn(false);
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
        // Check if there's a user in local storage and set the isLoggedIn state accordingly
        const user = localStorage.getItem("user");
        setIsLoggedIn(!!user); // Set isLoggedIn to true if user is found, otherwise false
    };

    useEffect(() => {
        checkIsLoggedIn(); // Call the function when the component mounts
    }, []);

    return (
        <AuthContext.Provider
            value={{
                state,
                login,
                logout,
                isLoggedIn,
                // register
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}
