// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA27g1kb0RQIJbCQG2C3u93gY6XxGSWiNk',
  authDomain: 'fakecommerce-59555.firebaseapp.com',
  projectId: 'fakecommerce-59555',
  storageBucket: 'fakecommerce-59555.appspot.com',
  messagingSenderId: '149565220173',
  appId: '1:149565220173:web:0c936635b80e1574408304',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const DB = getFirestore(app)
