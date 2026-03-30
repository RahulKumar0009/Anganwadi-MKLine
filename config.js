// ============================================================
//  CONFIGURATION FILE — Fill in your credentials below
// ============================================================

// 1. FIREBASE CONFIG
//    Go to https://console.firebase.google.com → Your Project
//    → Project Settings → Your Apps → Web App → firebaseConfig
const firebaseConfig = {
  apiKey: "AIzaSyAHCarYJQwJdU0OBCO9Sssp_l9a06XVxeY",
  authDomain: "anganwadi-mkline.firebaseapp.com",
  projectId: "anganwadi-mkline",
  storageBucket: "anganwadi-mkline.firebasestorage.app",
  messagingSenderId: "817976596109",
  appId: "1:817976596109:web:01641b1d0db091354a74c4",
  measurementId: "G-LRBL0X953K"
};

// 2. CLOUDINARY CONFIG
//    Go to https://cloudinary.com → Dashboard → Cloud Name
//    → Settings → Upload → Add upload preset (unsigned)
const CLOUDINARY_CLOUD_NAME  = "du7vec4eh";
const CLOUDINARY_UPLOAD_PRESET = "ml_default"; // unsigned preset

// 3. ADMIN PASSWORD  (change this to your preferred password)
const ADMIN_PASSWORD = "MKLine@2024";

// ============================================================
//  DO NOT EDIT BELOW THIS LINE
// ============================================================
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
