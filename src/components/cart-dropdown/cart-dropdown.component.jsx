import React from 'react';

import { connect } from 'react-redux';
import { CartItem } from '../cart-item/cart-item.component';

import { CustomButton } from '../custom-button/custom-button.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';
import { createStructuredSelector } from 'reselect';

import withRouter from '../../withRouter';

const CartDropdown = ({ cartItems, match }) => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.length ? (
					cartItems.map((cartItem) => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
				) : (
					<span className='empty-message'>Your cart is empty</span>
				)}
			</div>
			<CustomButton
				inverted
				onClick={() => {
					match.navigate('checkout');
				}}
			>
				Go to checkout
			</CustomButton>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

// const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps)(CartDropdown));
