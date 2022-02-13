import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firestore = firebase.firestore();

firestore
	.collection("users")
	.doc("W13meVzoXitP4I6Q8sCG")
	.collection("cartItems")
	.doc("bu5FDChdigQ63XGoRPkn");

firestore.doc("users/W13meVzoXitP4I6Q8sCG/cartItems/bu5FDChdigQ63XGoRPkn");
firestore.collection("users/W13meVzoXitP4I6Q8sCG/cartItems");
