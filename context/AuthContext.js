import { createContext, useState } from "react";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [error, setError] = useState({
        username: '',
        password: ''
    })
    const [user, setUser] = useState({
        username: '',
        password: ''
    })
    const [showPassword, setShowPassword] = useState(false)
    return <AuthContext.Provider value={{ error, setError, user, setUser, showPassword, setShowPassword }}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider