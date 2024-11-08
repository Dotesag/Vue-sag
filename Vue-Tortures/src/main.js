
import { createApp } from 'vue'
import App from '../sins/App.vue'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyC8ZWRs5HMm6s26cVVTfBpu4vu2cSIHHZw",
    authDomain: "vue-torture.firebaseapp.com",
    projectId: "vue-torture",
    storageBucket: "vue-torture.firebasestorage.app",
    messagingSenderId: "804292613626",
    appId: "1:804292613626:web:0f17e701bb7c40769b8043",
    measurementId: "G-YY0FKTQKLH"
  };
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

createApp(App).mount('#app')
