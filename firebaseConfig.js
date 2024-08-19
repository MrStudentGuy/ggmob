import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBdl3-Snv2okidMU3NotsRDbp9mxgxsHpU",
    authDomain: "gameguide-77be2.firebaseapp.com",
    projectId: "gameguide-77be2",
    storageBucket: "gameguide-77be2.appspot.com",
    messagingSenderId: "651503432601",
    appId: "1:651503432601:web:7e8f7fa09dd8ace28f5908"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
