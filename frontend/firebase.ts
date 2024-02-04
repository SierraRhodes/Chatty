import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAxGSeKzu0k4rag--2PvyMOCSqiWrPsxJY",
    authDomain: "test-84237.firebaseapp.com",
    projectId: "test-84237",
    storageBucket: "test-84237.appspot.com",
    messagingSenderId: "993339078896",
    appId: "1:993339078896:web:41e333d86536b1fc19aa35",
    measurementId: "G-8VN4DPGFV3",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);