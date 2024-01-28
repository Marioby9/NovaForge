// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore, onSnapshot, query, doc, setDoc, collection, getDoc, addDoc, updateDoc, deleteDoc, where } from "firebase/firestore"
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

export const addSpace = space => addDoc(collection(db, 'spaces'), space)
export const getSpaces = (uid, callback) => onSnapshot(query(collection(db, 'spaces'), where("uid", "==", uid)), callback)
export const getSpace = (id, callback) => onSnapshot(query(doc(db, 'spaces', id)), callback)
export const deleteSpace = id => deleteDoc(doc(db, "spaces", id))

export const addExecutor = (executor) => addDoc(collection(db, 'executors'), executor)
export const getExecutors = (spaceID, callback) => onSnapshot(query(collection(db, 'executors'), where("space", "==", spaceID)), callback)


export const addSensor = (sensor) => addDoc(collection(db, 'sensors'), sensor)