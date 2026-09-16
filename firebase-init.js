// Olvra Hub — shared Firebase initialization.
// Every page that needs Firestore imports { db } from here instead of
// repeating firebaseConfig. Auth is initialized separately in admin.html
// only, since it's the only page that needs it.
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCnKefzZS3pMGfaxIIjsRClkmWjR4xpEWQ",
  authDomain: "olvrahub.firebaseapp.com",
  projectId: "olvrahub",
  storageBucket: "olvrahub.firebasestorage.app",
  messagingSenderId: "821545082724",
  appId: "1:821545082724:web:f20fe7965bf3dd3fede471"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
