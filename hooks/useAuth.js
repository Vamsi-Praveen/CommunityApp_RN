import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


const useAuth = () => {
    let context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth cannot be used outside of AuthProvider')
    }
    return context
}

export default useAuth