import React from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./.firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import CheckoutPage from "./pages/checkout/checkout.component";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { Layout } from "./pages/layout/layout.component";
import CollectionPage from "./pages/collection/collection.component";
import NotFoundPage from "./pages/notfound/notfound.component";

class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			// this.setState({ currentUser: user });
			// console.log(user);
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data(),
					});
				});
			}
			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='shop' element={<Outlet />}>
						<Route index element={<ShopPage />} />
						<Route path=':collectionId' element={<CollectionPage />} />
					</Route>
					<Route path='checkout' element={<CheckoutPage />} />
					<Route
						path='signin'
						element={
							this.props.currentUser ? (
								<Navigate replace to='/' />
							) : (
								<SignInAndSignUpPage />
							)
						}
					/>
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
