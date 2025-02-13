import { onAuthStateChanged } from "firebase/auth";
import { use, useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../FIrebaseConfig";




const AuthContext = createContext();

const AuthContextProvider = ({children}) => {   
    const [user,setUser] = useState(null);
    const [isAuthenticated,setIsAuthenticated] = useState(undefined);


    useEffect(() => {
        //onAuthStateChanged
        const unsub = onAuthStateChanged(auth, (user)=>{
            if(user){
                setIsAuthenticated(true);
                setUser(user);
            }else{
                setIsAuthenticated(false);
                setUser(null);
            }
        });
        return unsub;
    },[]);

    const login = async (email,password) => {
        try {

        }catch(error){
            console.log(error);
        }
    };
    const logout = () => {
        try {

        }catch(error){
            console.log(error);
        }
    } ;
    const register = (email,password,username,profileUrl) => {
        try {

        }catch(error){
            console.log(error);
        }
    } 

    return (
        <AuthContext.Provider value={{user,login,logout,register,isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
}


export const useAuth = () =>{
    const value = useContext(AuthContext);
    if(!value){
        throw new Error("useAuth must be used within AuthContextProvider");
    }
    return value;
}

export default AuthContextProvider;