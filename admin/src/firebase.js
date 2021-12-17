import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyABWU5q-hoybNxgF_Wu2uBigL0LnbKIQnE",
    authDomain: "netflix-411a3.firebaseapp.com",
    projectId: "netflix-411a3",
    storageBucket: "netflix-411a3.appspot.com",
    messagingSenderId: "610684697984",
    appId: "1:610684697984:web:6ea38597228f7ab8e89565",
    measurementId: "G-50D88GLS8L"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;