import React from 'react';
import { auth } from '../../.firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';

//! https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files
import { ReactComponent as Logo } from '../../assets/crown.svg';

import { connect } from 'react-redux';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import Cart from '../cart/cart.component';
import {
	HeaderContainer,
	LogoContainer,
	OptionLink,
	OptionsContainer,
} from './header.styles';

const Header = ({ currentUser }) => {
	return (
		<HeaderContainer>
			<LogoContainer to='/'>
				<Logo className='logo' />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to='/shop'>SHOP</OptionLink>
				<OptionLink to='/shop'>CONTACT</OptionLink>
				{currentUser ? (
					<OptionLink as='div' onClick={() => auth.signOut()}>
						SIGN OUT
					</OptionLink>
				) : (
					<OptionLink to='signin'>SIGN IN</OptionLink>
				)}
				<Cart />
			</OptionsContainer>
		</HeaderContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
