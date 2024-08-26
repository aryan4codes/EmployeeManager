//Create a Context

import { createContext, useState , useContext} from "react";
import { executeBasicAuthenticationService } from "../api/HelloWorldApiService";
import { apiClient } from "../api/ApiClient";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)


export default function AuthProvider({ children }) {



    const [username,setUsername] = useState(null)
    const [token,setToken] = useState(null)

    async function login(username, password) {

        const baToken = 'Basic ' + window.btoa( username + ":" + password )

        try {

            const response = await executeBasicAuthenticationService(baToken)

            if(response.status===200){
                setAuthenticated(true)
                setUsername(username)
                setToken(baToken)
                apiClient.interceptors.request.use(
                    (config) => {
                        console.log("intercepting and adding token")
                        config.headers.Authorization = baToken
                        return config
                    }
                )
                return true            
            } else {
                logout()
                return false
            }    
        } catch(error) {
            logout()
            return false
        }
    }

    function logout() {
        setAuthenticated(false)
    }
    

    const [isAuthenticated, setAuthenticated] = useState(false)

    return (
        <AuthContext.Provider value={ { isAuthenticated,login, logout,username,token} }>
            {children}
        </AuthContext.Provider>
    )
} 