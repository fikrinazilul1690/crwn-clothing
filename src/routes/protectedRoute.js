import { connect } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import SignInAndSignUpPage from '../pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { selectCurrentUser } from '../redux/user/user.selectors';

const ProtectedRoutes = ({ currentUser }) => {
	return currentUser ? <Outlet /> : <SignInAndSignUpPage />;
};
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(ProtectedRoutes);
