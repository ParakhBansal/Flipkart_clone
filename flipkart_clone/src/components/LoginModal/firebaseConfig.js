import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA6P7K1B1m4JStRrcOUD3WbzRiKJ2UguA4",
    authDomain: "flipkart-clone-e484a.firebaseapp.com",
    projectId: "flipkart-clone-e484a",
    storageBucket: "flipkart-clone-e484a.appspot.com",
    messagingSenderId: "191250256844",
    appId: "1:191250256844:web:c68d01f53cd44869834369"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export {auth};

  export default db;