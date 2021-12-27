import firebase from 'firebase';

const firebaseConfig = {
  
        apiKey: "AIzaSyCFtrl7oCMYtsJJsr8LXk0xAUZTFY0Fb9s",
        authDomain: "todo-app-12512.firebaseapp.com",
        projectId: "todo-app-12512",
        storageBucket: "todo-app-12512.appspot.com",
        messagingSenderId: "903012336475",
        appId: "1:903012336475:web:f09e2618a6e48eb8fa507e",
        measurementId: "G-WBDKVD491R"
      
    };

    const firebaseApp = firebase.initializeApp(firebaseConfig);
    const db = firebaseApp.firestore();
    // const auth = firebase.auth();
    // const provider = new firebase.auth.GoogleAuthProvider();
    const storage = firebase.storage();
    
    export { storage };
    export default db;
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

