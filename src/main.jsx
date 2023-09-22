import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/AuthContext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <App />
                <ToastContainer position="bottom-center" autoClose={3000} hideProgressBar={false} closeOnClick={true} draggable={true} progress={undefined} theme="light" />
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);
