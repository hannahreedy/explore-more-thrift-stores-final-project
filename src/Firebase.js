// Firebase.js
import firebase from 'firebase';
const config = {
	apiKey: "AIzaSyBXxjpLlY2oX8ydeIqBFiHiqcl6LPOpj8Y",
    authDomain: "thrift-stores.firebaseapp.com",
    databaseURL: "https://thrift-stores.firebaseio.com",
    projectId: "thrift-stores",
    storageBucket: "thrift-stores.appspot.com",
    messagingSenderId: "64266349757"
};
firebase.initializeApp(config);
export default firebase;
