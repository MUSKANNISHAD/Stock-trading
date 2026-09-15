import { createContext, useContext, useState } from "react";
import clientServer from "./clientServer.js";

const MyContext = createContext();

export const useAuth = () => {
    return useContext(MyContext);
};

export const MyProvider = ({ children }) => {

    const [isLogin, setIsLogin] = useState(true);

    const handleRegister = async () => {
        try {
            const response = await clientServer.post("/register", {
                username,
                email,
                password
            });
            console.log("response is ", response);
        } catch (err) {
            console.log(err);
        }
    }
    const handlelogin = async () => {
        try {
            const response = await clientServer.post("/login", {
                email,
                password
            });
            console.log("response is ", response);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <MyContext.Provider
            value={{
                isLogin,
                setIsLogin,
                handleRegister,
                handlelogin
            }}
        >
            {children}
        </MyContext.Provider>
    );
};