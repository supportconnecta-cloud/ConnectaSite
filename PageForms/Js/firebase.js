// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBn9DgdxMGRtNbDhdUIyKh9vlKGlcS_WDg",
    authDomain: "connecta-64592.firebaseapp.com",
    projectId: "connecta-64592",
    storageBucket: "connecta-64592.firebasestorage.app",
    messagingSenderId: "455725123898",
    appId: "1:455725123898:web:fe039380727627d405a803"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);