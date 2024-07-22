// Import the functions you need from the Firebase SDKs
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// Replace with your project's actual configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuYpRqlRkzzRmPQW_XnxgGIpJbJOxmO8M", // Your API key
  authDomain: "facebook-5a8f0.firebaseapp.com", // Your auth domain
  projectId: "facebook-5a8f0", // Your project ID
  storageBucket: "facebook-5a8f0.appspot.com", // Your storage bucket
  messagingSenderId: "410230564466", // Your messaging sender ID
  appId: "1:410230564466:web:55453ecf5d8c43d42844eb", // Your app ID
};

// Initialize Firebase with the configuration object
const app = initializeApp(firebaseConfig);

// Export the Firebase Storage instance to be used in other parts of your application
export const storage = getStorage(app);
