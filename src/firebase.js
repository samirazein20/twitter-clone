import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDb8ZpwJ3aYB3bDhtkJdRiPy8n9wuHFQcs",
    authDomain: "mytwitter-clone-562a1.firebaseapp.com",
    projectId: "mytwitter-clone-562a1",
    storageBucket: "mytwitter-clone-562a1.appspot.com",
    messagingSenderId: "250067065710",
    appId: "1:250067065710:web:1daefd600878c53ed87f7f",
    measurementId: "G-QJDY81RJGJ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;