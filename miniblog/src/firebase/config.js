import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuração do firebase
const firebaseConfig = {
  apiKey: "AIzaSyAROSGEArthk1xUjOhZZtom_43w5DTFEXs",
  authDomain: "miniblog-7ed8f.firebaseapp.com",
  projectId: "miniblog-7ed8f",
  storageBucket: "miniblog-7ed8f.appspot.com",
  messagingSenderId: "1065743558527",
  appId: "1:1065743558527:web:db5e891dd2a35ccb3b5c4a",
};

const app = initializeApp(firebaseConfig);

// Configuração do firestore
const db = getFirestore(app);

export { db };
