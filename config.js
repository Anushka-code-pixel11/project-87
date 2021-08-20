import firebase from 'firebase'
require("@firebase/firestore");

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCt--1a7HYTq9e2AEl8n6RvIwXtU7roO2w",
    authDomain: "barter-app-c1350.firebaseapp.com",
    projectId: "barter-app-c1350",
    storageBucket: "barter-app-c1350.appspot.com",
    messagingSenderId: "451293578182",
    appId: "1:451293578182:web:33dd2161f1cf83fffa68c7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();