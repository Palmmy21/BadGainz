/**
 * Firebase Database Seed Script
 * Run: node scripts/seed-firebase.mjs
 * 
 * This initializes the Firestore collections with proper structure
 */

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { readFileSync } from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env.local
const envPath = resolve(__dirname, "../.env.local");
const envContent = readFileSync(envPath, "utf-8");
const envVars = {};
for (const line of envContent.split("\n")) {
  const trimmed = line.trim();
  if (!trimmed || trimmed.startsWith("#")) continue;
  const [key, ...rest] = trimmed.split("=");
  envVars[key.trim()] = rest.join("=").replace(/^"|"$/g, "").trim();
}

const firebaseConfig = {
  apiKey: envVars["NEXT_PUBLIC_FIREBASE_API_KEY"],
  authDomain: envVars["NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN"],
  projectId: envVars["NEXT_PUBLIC_FIREBASE_PROJECT_ID"],
  storageBucket: envVars["NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET"],
  messagingSenderId: envVars["NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID"],
  appId: envVars["NEXT_PUBLIC_FIREBASE_APP_ID"],
};

console.log("🔥 Connecting to Firebase project:", firebaseConfig.projectId);

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function seed() {
  console.log("\n📦 Creating collections...\n");

  try {
    // 1. Create subscribers collection
    const subRef = await addDoc(collection(db, "subscribers"), {
      name: "__init__",
      email: "__init__@badgainz.com",
      source: "seed",
      createdAt: new Date(),
      _note: "Initial document to create collection — safe to delete",
    });
    console.log("✅ subscribers collection created:", subRef.id);

    // 2. Create inquiries collection
    const inqRef = await addDoc(collection(db, "inquiries"), {
      name: "__init__",
      contact: "__init__",
      projectType: "seed",
      budget: "-",
      details: "Initial document to create collection — safe to delete",
      createdAt: new Date(),
      status: "new",
      _note: "Initial document to create collection — safe to delete",
    });
    console.log("✅ inquiries collection created:", inqRef.id);

    // 3. Create orders collection
    const ordRef = await addDoc(collection(db, "orders"), {
      _note: "Initial document to create collection — safe to delete",
      createdAt: new Date(),
      status: "seed",
    });
    console.log("✅ orders collection created:", ordRef.id);

    console.log("\n🎉 Database initialized successfully!");
    console.log("👉 Go to Firebase Console and delete the __init__ documents");

  } catch (err) {
    console.error("❌ Error:", err.message);
    console.log("\n⚠️  If you see PERMISSION_DENIED, update Firestore Rules first:");
    console.log("   Go to Firebase Console → Firestore → Rules → paste the contents of firestore.rules");
  }

  process.exit(0);
}

seed();
