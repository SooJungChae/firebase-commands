import { initializeApp } from "firebase/app";
import { doc, collection, getFirestore, writeBatch } from "firebase/firestore";

let db;

// TODO: 1) Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

// TODO: 2) Set your collection path
const path = 'products';

const initFirebase = () => {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  db = getFirestore(app);
};

const writeDocuments = async (documents) => {
  // Get a new write batch
  const batch = writeBatch(db);
  
  // Set data with batch
  documents.forEach((document) => {
    // Automatically generate unique id
    const ref = doc(collection(db, path));
    batch.set(ref, document);
  });
  
  // Commit the batch
  await batch.commit();
};

// TODO: 3) Replace documents to your data
const documents = [
  { casNo: '1111', name: '1111', imageUrl: '', type: 'OLED' },
  { casNo: '2222', name: '2222', imageUrl: '', type: 'OLED' },
];

initFirebase();

await writeDocuments(documents);

console.log('Finished to write batch!');