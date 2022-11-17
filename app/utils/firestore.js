import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDNM5Qxz8sewihCFHmKvQ1rI4iKrclYd7s",
    authDomain: "goat-ec7c6.firebaseapp.com",
    projectId: "goat-ec7c6",
    storageBucket: "goat-ec7c6.appspot.com",
    messagingSenderId: "304851713969",
    appId: "1:304851713969:web:36bfe8d7d13066f227c790",
    measurementId: "G-BGDP3Z42ZH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log('app', app);
console.log('db', db);

// export default {
//     app,
//     db
// }