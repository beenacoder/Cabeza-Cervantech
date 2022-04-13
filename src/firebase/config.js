
import { initializeApp } from "firebase/app";


//Mis configuraciones y API KEY
const firebaseConfig = {
  apiKey: "AIzaSyDz-s4T6vx4vryVJC_C1aRUxXkHfQ4nkjA",
  authDomain: "cervantech-90c38.firebaseapp.com",
  projectId: "cervantech-90c38",
  storageBucket: "cervantech-90c38.appspot.com",
  messagingSenderId: "825117725568",
  appId: "1:825117725568:web:d4995e53b407cc6687a765"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Vamos a importar nuestra funcion en la jerarquia mas alta de nustra aplicacion, index.js
export const getFirestoreApp = () => {
    return app
}