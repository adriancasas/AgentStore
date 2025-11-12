
import { initializeApp, getApps } from "firebase/app";

// This configuration is used for client-side initialization of Firebase.
// It is public and does not contain any sensitive information.
// Security is enforced by Firebase Security Rules.

// IMPORTANT: In a production environment with Firebase App Hosting,
// these values are often provided automatically. This config object
// serves as a fallback and is essential for local development.

export const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
// We check if the app is already initialized to avoid errors.
const app = getApps().length
  ? getApps()[0]
  : initializeApp(firebaseConfig);

export { app };
