// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore, onSnapshot, query, where, doc, setDoc, collection } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOOh2SgVKUfB9py_Bk-ONWsoHgAZuEgIE",
  authDomain: "novaforge-bb5b4.firebaseapp.com",
  projectId: "novaforge-bb5b4",
  storageBucket: "novaforge-bb5b4.appspot.com",
  messagingSenderId: "947172484435",
  appId: "1:947172484435:web:7dd3344801c947e90f6da6",
  measurementId: "G-L400S2DMWP"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore()
const analytics = getAnalytics(app)
export const auth = getAuth()

//

export const addUserConfig = (uid, config) => setDoc(doc(collection(db, 'config'), uid), config)
export const getUserConfig = (uid, callback) => onSnapshot(query(doc(db, 'config', uid)), callback)