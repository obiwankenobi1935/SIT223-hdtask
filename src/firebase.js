import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDgAjhhwHiOYaUR7Js0jaafUQdklmHPuXw",

    authDomain: "find-question-page-6ce9b.firebaseapp.com",
  
    projectId: "find-question-page-6ce9b",
  
    storageBucket: "find-question-page-6ce9b.appspot.com",
  
    messagingSenderId: "914286741129",
  
    appId: "1:914286741129:web:4050a748d13c732604e858"
  
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
