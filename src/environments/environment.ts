import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyCD9VuJIlLIZAEvEIdwdIFeinlUMoPMVTE",
    authDomain: "sil-hosting.firebaseapp.com",
    projectId: "sil-hosting",
    storageBucket: "sil-hosting.appspot.com",
    messagingSenderId: "675416219162",
    appId: "1:675416219162:web:78958919f2fa479b19fba3",
    measurementId: "G-XXKXJZWNCS"
  }
};

// Initialize Firebase
const app = initializeApp(environment.firebase);
const analytics = getAnalytics(app);
