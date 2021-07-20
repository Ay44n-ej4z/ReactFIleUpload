  import * as firebase from 'firebase'
  import 'firebase/storage'
  import 'firebase/firestore'
  // Your web app's Firebase configuration

  var firebaseConfig = {
    apiKey: "AIzaSyA1cnxyv-8YrSFiayQCMkNcGorVcZ01A9c",
    authDomain: "uploadimages-c64a7.firebaseapp.com",
    projectId: "uploadimages-c64a7",
    storageBucket: "uploadimages-c64a7.appspot.com",
    messagingSenderId: "536954256994",
    appId: "1:536954256994:web:95dbfe8833d6f741ae5b3b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const projectStorage = firebase.storage();
  const projectFireStore = firebase.firestore();
  export {projectStorage, projectFireStore}