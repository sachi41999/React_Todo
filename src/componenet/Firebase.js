// const firebaseConfig = {
//     apiKey: "AIzaSyDrD-9T3GSYfU7DszqWbqruK3Qsvc4ZOTM",
//     authDomain: "react-todo-e4f28.firebaseapp.com",
//     projectId: "react-todo-e4f28",
//     storageBucket: "react-todo-e4f28.appspot.com",
//     messagingSenderId: "1055831133799",
//     appId: "1:1055831133799:web:37c30349c7b2dd986b8ec2",
//     measurementId: "G-GV0SLVLH5D"
//   };

import firebase from "firebase";

const fireb = firebase.initializeApp({
  apiKey: "AIzaSyDrD-9T3GSYfU7DszqWbqruK3Qsvc4ZOTM",
  authDomain: "react-todo-e4f28.firebaseapp.com",
  projectId: "react-todo-e4f28",
  storageBucket: "react-todo-e4f28.appspot.com",
  messagingSenderId: "1055831133799",
  appId: "1:1055831133799:web:37c30349c7b2dd986b8ec2",
  measurementId: "G-GV0SLVLH5D",
});

const db = fireb.firestore();

export default db;
