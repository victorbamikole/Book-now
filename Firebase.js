import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA1Z_NWB86CcikbUvnC-zs82wRgEAJ3b5g",
  authDomain: "booking-app-1d4b8.firebaseapp.com",
  projectId: "booking-app-1d4b8",
  storageBucket: "booking-app-1d4b8.appspot.com",
  messagingSenderId: "646148115203",
  appId: "1:646148115203:web:aa9d82e36b2b78a2bab736",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

const db = getFirestore();

// const insertDataToFirestore1 = async (collectionName, data) => {
//   try {
//     const res = await db.collection(collectionName).add(data);
//     console.log("Data inserted successfully");
//   } catch (error) {
//     console.error("Error inserting data:", error);
//   }
// };

const insertDataToFirestore = async () => {
  // const docRef = db.collection(collectionName).doc("places");
  const docRef = db.collection("students").doc("alovelace");
  try {
    await docRef.set({
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
  } catch (error) {
    console.error("Error inserting data:", error);
  }
};

export { auth, db, insertDataToFirestore };
