import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxDTI-_8DcSAGcc7k1SkjynoAGRqH2ysg",
  authDomain: "clone-9a276.firebaseapp.com",
  projectId: "clone-9a276",
  storageBucket: "clone-9a276.appspot.com",
  messagingSenderId: "85522285729",
  appId: "1:85522285729:web:00c053c9948d8c3fb45ce0",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
