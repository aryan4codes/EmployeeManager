//Create a Context

import { createContext, useState , useContext} from "react";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)


export default function AuthProvider({ children }) {



    const [username,setUsername] = useState(null)


    function login(username, password) {
        if(username==='admin1' && password==='admin1'){
            setAuthenticated(true)
            setUsername(username)
            return true            
        } else {
            setAuthenticated(false)
            setUsername(null)
            return false
        }        
    }

    function logout() {
        setAuthenticated(false)
    }
    

    const [isAuthenticated, setAuthenticated] = useState(false)

    return (
        <AuthContext.Provider value={ { isAuthenticated,login, logout,username} }>
            {children}
        </AuthContext.Provider>
    )
} 