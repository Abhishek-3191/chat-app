// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfZrKyx_Qvg7EBE0DoTNzAaqLFJYZSELg",
  authDomain: "chat-app-327a2.firebaseapp.com",
  projectId: "chat-app-327a2",
  storageBucket: "chat-app-327a2.appspot.com",
  messagingSenderId: "922618116401",
  appId: "1:922618116401:web:c27a975bc927f5b8555810"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);