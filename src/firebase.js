import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBXDcBPpIw7MXM91qZ1EX9MOHxtQImXN54",
    authDomain: "whatsapp-clone-fa923.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-fa923.firebaseio.com",
    projectId: "whatsapp-clone-fa923",
    storageBucket: "whatsapp-clone-fa923.appspot.com",
    messagingSenderId: "953894487832",
    appId: "1:953894487832:web:23597066585ae23547006d",
    measurementId: "G-RC55ZESTP4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;