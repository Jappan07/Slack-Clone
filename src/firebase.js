import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBrDOTpm8FWWBjpcTR29dNhz2oQKmDt5SM",
    authDomain: "slack-clone-a02fa.firebaseapp.com",
    projectId: "slack-clone-a02fa",
    storageBucket: "slack-clone-a02fa.appspot.com",
    messagingSenderId: "100159286184",
    appId: "1:100159286184:web:77d351ec1791d0c8a04b9d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db