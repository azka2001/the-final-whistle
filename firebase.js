
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBiaPklZdS-zh-8vnpGtiSMhpk7MnEmtp8",
    authDomain: "thefinalwhistle-62e49.firebaseapp.com",
    projectId: "thefinalwhistle-62e49",
    storageBucket: "thefinalwhistle-62e49.appspot.com",
    messagingSenderId: "220518426937",
    appId: "1:220518426937:web:62787990e4e09da16be0e8"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
