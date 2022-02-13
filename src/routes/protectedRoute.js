import { connect } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../redux/user/user.selectors';

const ProtectedRoutes = ({ currentUser }) => {
	return currentUser ? <Outlet /> : <Navigate replace to={'/signin'} />;
};
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(ProtectedRoutes);
