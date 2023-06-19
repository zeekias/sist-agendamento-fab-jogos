// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";


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
const provider = new GoogleAuthProvider();

export async function loginWithEmail(email, password) {

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


export async function loginWithGoogle() {

  try {
    const result = await signInWithPopup(auth, provider)
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    return { status: true, userToken: token }
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);

    console.error(errorCode, errorMessage, email, credential);
    return { status: false, userToken: '' }
  }

}

export async function searchAdminByEmail(email) {
  console.log(email);
  const adminUsersRef = collection(db, "admin-users");
  const q = query(adminUsersRef, where("email", "==", email));
  const querySnapshot = await getDocs(q);
  let result = null;
  querySnapshot.forEach((doc) => {
    result = doc.data();
  });
  return result;
}


export const db = getFirestore(app);

export default app;
