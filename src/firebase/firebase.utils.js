import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
	apiKey: "AIzaSyAXHB-JscXGBdI7bN3Rzc6HKdNIYnz66s8",
	authDomain: "crwn-clothing-db-db6c4.firebaseapp.com",
	projectId: "crwn-clothing-db-db6c4",
	storageBucket: "crwn-clothing-db-db6c4.appspot.com",
	messagingSenderId: "283618169712",
	appId: "1:283618169712:web:45424cc761b772bb3eb5b5",
	measurementId: "G-GY1XG3EVWT",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
