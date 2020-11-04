import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAkxNHhgWKGX2qg04x1bVJTOWfxrykYb0U",
    authDomain: "crwn-db-6a556.firebaseapp.com",
    databaseURL: "https://crwn-db-6a556.firebaseio.com",
    projectId: "crwn-db-6a556",
    storageBucket: "crwn-db-6a556.appspot.com",
    messagingSenderId: "193006510580",
    appId: "1:193006510580:web:7490f6f8bda2bfff4199a1",
    measurementId: "G-PGXHFBFP7P"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;