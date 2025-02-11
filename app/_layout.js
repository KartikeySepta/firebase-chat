import { View, Text } from 'react-native'
import React, { useEffect ,useState} from 'react'
import { Slot, useRouter, useSegments } from "expo-router";
import AuthContextProvider, { useAuth } from '../context/authContext';
import "../global.css";

const MainLayout = () => {
    const {isAuthenticated} = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect(()=>{
        //chech if user is authenticated or not
        if (typeof isAuthenticated =="undefined") return;
        const inApp = segments[0]=="(app)";
        if (isAuthenticated && !inApp){
            //redirect to home
            router.replace('home');
        }else if(isAuthenticated==false) {
            //redirect to sign in
            router.replace('signIn');
        }
    },[isAuthenticated])

    return <Slot/>
}

export default function RootLayout() {
    return (
        <AuthContextProvider>
            <MainLayout/>
        </AuthContextProvider>
    )
}