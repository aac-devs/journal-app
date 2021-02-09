import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCj7tQFdO1R8X4b5KBKa5tphbGJ9OdY7PM",
  authDomain: "journal-app-36eed.firebaseapp.com",
  projectId: "journal-app-36eed",
  storageBucket: "journal-app-36eed.appspot.com",
  messagingSenderId: "333065649146",
  appId: "1:333065649146:web:c5d166ee74544cfd5e8243",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
