import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";

export default function conectar (){
const firebaseConfig = {
  apiKey: "AIzaSyAxum1cxJZjh9PfAyzz2Rh3qsX_aaFAcbE",
  authDomain: "chat-addb5.firebaseapp.com",
  projectId: "chat-addb5",
  storageBucket: "chat-addb5.appspot.com",
  messagingSenderId: "889242869643",
  appId: "1:889242869643:web:7794b1df1a98f83710198e",
  measurementId: "G-TKZ5RVBWR5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
}