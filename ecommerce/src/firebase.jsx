import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRgpE3-lb5EUIq1rRGgZutuAAwa6IL1HU",
  authDomain: "gamplay-c886a.firebaseapp.com",
  projectId: "gamplay-c886a",
  storageBucket: "gamplay-c886a.appspot.com",
  messagingSenderId: "733868696188",
  appId: "1:733868696188:web:bcbf6feccfcdf4b63c5ff9"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);