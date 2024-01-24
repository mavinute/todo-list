import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCMEQIAStDNOJP1gBe6nMtEc3ahJrcZqTY",
    authDomain: "todo-list-158a4.firebaseapp.com",
    projectId: "todo-list-158a4",
    storageBucket: "todo-list-158a4.appspot.com",
    messagingSenderId: "1066612611514",
    appId: "1:1066612611514:web:c1725fef3aeffc044aa583"
};

const initializeAplication = initializeApp(firebaseConfig);

const auth = getAuth(initializeAplication);
const db = getFirestore(initializeAplication);

export { auth, db }