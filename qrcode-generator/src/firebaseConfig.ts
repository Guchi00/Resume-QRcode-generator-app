import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyB2thcHQ-40jJZRP0u4_B4y0Hlu98ARbbg",
  authDomain: "resume-qrcode-generator.firebaseapp.com",
  projectId: "resume-qrcode-generator",
  storageBucket: "resume-qrcode-generator.firebasestorage.app",
  messagingSenderId: "810679271267",
  appId: "1:810679271267:web:8455ce4a77b7b3a790dd56",
  measurementId: "G-D93KK30WFP",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
