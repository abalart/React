// Esta implementación simplifica la inicialización de firebase en toda tu app
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";   // iMPORTO esto
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUlKGYveTnkMdMTcptRK_LMLJb74HwVJw",
  authDomain: "coderhouse-ecommerce-4e273.firebaseapp.com",
  projectId: "coderhouse-ecommerce-4e273",
  storageBucket: "coderhouse-ecommerce-4e273.appspot.com",
  messagingSenderId: "483818266665",
  appId: "1:483818266665:web:c8b5beb03cfb531b21bc38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
