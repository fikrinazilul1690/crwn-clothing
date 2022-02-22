import './header.styles.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../.firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';

//! https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import Cart from '../cart/cart.component';

const Header = ({ currentUser }) => {
	return (
		<div className='header'>
			<Link to='/'>
				<Logo className='logo' />
			</Link>
			<div className='options'>
				<Link className='option' to='/shop'>
					SHOP
				</Link>
				<Link className='option' to='/shop'>
					CONTACT
				</Link>
				{currentUser ? (
					<div className='option' onClick={() => auth.signOut()}>
						SIGN OUT
					</div>
				) : (
					<Link className='option' to='signin'>
						SIGN IN
					</Link>
				)}
				<Cart />
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
