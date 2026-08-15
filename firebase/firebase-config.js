// ============================================
// GALAL ACADEMY — FIREBASE CONFIG
// ============================================
// ده مشروع Firebase الحقيقي بتاع Galal Academy (galal-academy-da457).
// لو غيّرت المشروع مستقبلاً أو عملت مشروع جديد، استبدل القيم من:
// Firebase Console → Project Settings → General → "Your apps" → Web app → Config
// ============================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyD1gj5HrcAb3nsdTAGboYW7r2Sz03InwfQ",
  authDomain: "galal-academy-da457.firebaseapp.com",
  projectId: "galal-academy-da457",
  storageBucket: "galal-academy-da457.firebasestorage.app",
  messagingSenderId: "266501167766",
  appId: "1:266501167766:web:d9300ae68dfbd5097d00b7",
  measurementId: "G-556FHKFZ3N",
};

// -------------------- Init --------------------
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Analytics اختياري — بيتفعّل بس لو المتصفح والبيئة بتدعمه (مش هيشتغل مثلاً وقت
// فتح الملفات مباشرة بـ file://، وده طبيعي ومش مشكلة في التطوير المحلي)
export let analytics = null;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});
