import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCFlmPbbkZ0_9ynw3rQKMSkFkQJ_JFqKKE",
  authDomain: "resumeqrcodes.firebaseapp.com",
  projectId: "resumeqrcodes",
  storageBucket: "resumeqrcodes.firebasestorage.app",
  messagingSenderId: "935870621427",
  appId: "1:935870621427:web:1f723324fdbfc8507eb986",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
