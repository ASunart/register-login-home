/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
import { getFirestore, collection, query, where, getDocs, addDoc } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';

  const firebaseConfig = {
    apiKey: 'AIzaSyAVUXywVQkdQvdUzzePlP5LR2L7TCDVZZs',
    authDomain: 'dcatest-a9d15.firebaseapp.com',
    projectId: 'dcatest-a9d15',
    storageBucket: 'dcatest-a9d15.appspot.com',
    messagingSenderId: '206737488420',
    appId: '1:206737488420:web:e6626c49031c08ae6576b1',
    measurementId: 'G-WCSQ82CL7M'
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const usersRef = collection(db, 'users');

  export const queryUser = async ({
    password,
    username,
    
  }:{
    password: string;
    username: string;
  
  }) => {
    try {
        const q = query(usersRef, where('username', '==', username), where('password', '==', password));
        const querySnapshot = await getDocs(q);
        console.log(querySnapshot);

        querySnapshot.forEach((doc: any) => {
            console.log(doc.id, '=>', doc.data());
        });
        if(querySnapshot.empty){
          return false;
        } else {
          return true;
        }
        
        return !querySnapshot.empty;
    } catch (error) {
        return false;
    }
  };

  export const addUser = async ({
    username,
    password
  }:{
    password: string;
    username: string;
  }) => {
    try {
        const docRef = await addDoc(collection(db,'users'),{
            password,
            username,
        });
        return true;
    } catch (error) {
        return false;
    }
  };