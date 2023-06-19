// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA-nJino6NOvHWhx4j1M5fW2lNdBL52GGQ",
  authDomain: "sistema-agendamento-ifma.firebaseapp.com",
  projectId: "sistema-agendamento-ifma",
  storageBucket: "sistema-agendamento-ifma.appspot.com",
  messagingSenderId: "341675348422",
  appId: "1:341675348422:web:402f01dee4a71da13562c7",
  measurementId: "G-135PVRHW8P"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export function loginWithEmail(email, password) {

  try {
    const userCredential = signInWithEmailAndPassword(auth, email, password);
    return userCredential;

  } catch (error) {
    console.log("erro: ", error);
    return null;
  }

}

export function logout() {
  try {
    signOut(auth);
  } catch (error) {
    console.log(error);
  }
}



export default app;
