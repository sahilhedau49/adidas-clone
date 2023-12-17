import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.React_App_apiKey,
  authDomain: process.env.React_App_authDomain,
  projectId: process.env.React_App_projectId,
  storageBucket: process.env.React_App_storageBucket,
  messagingSenderId: process.env.React_App_messagingSenderId,
  appId: process.env.React_App_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
