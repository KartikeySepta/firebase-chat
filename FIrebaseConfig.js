// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth , getReactNativePersistence} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { collection, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-nWyiCiLSfZhgQ_TV3MmUO7GfsCOsv-I",
  authDomain: "fir-chat-2d68e.firebaseapp.com",
  projectId: "fir-chat-2d68e",
  storageBucket: "fir-chat-2d68e.firebasestorage.app",
  messagingSenderId: "399671843284",
  appId: "1:399671843284:web:eb4f66abc43702237a1e41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app,{
    persistence: getReactNativePersistence(AsyncStorage)
});

export const db = getFirestore(app);

export const usersRef = collection(db, "users");
export const roomsRef = collection(db, "rooms");

