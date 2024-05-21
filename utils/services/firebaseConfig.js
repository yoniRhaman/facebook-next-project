// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuYpRqlRkzzRmPQW_XnxgGIpJbJOxmO8M",
  authDomain: "facebook-5a8f0.firebaseapp.com",
  projectId: "facebook-5a8f0",
  storageBucket: "facebook-5a8f0.appspot.com",
  messagingSenderId: "410230564466",
  appId: "1:410230564466:web:55453ecf5d8c43d42844eb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

//-------------------------
