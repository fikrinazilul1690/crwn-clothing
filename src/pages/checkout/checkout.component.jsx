import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import {
	selectCartItems,
	selectCartTotal,
} from '../../redux/cart/cart.selectors';

import { Link } from 'react-router-dom';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => {
	console.log(cartItems);
	return (
		<div className='checkout-page'>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>Product</span>
				</div>
				<div className='header-block'>
					<span>Description</span>
				</div>
				<div className='header-block'>
					<span>Quantity</span>
				</div>
				<div className='header-block'>
					<span>Price</span>
				</div>
				<div className='header-block'>
					<span>Remove</span>
				</div>
			</div>
			{cartItems.length ? (
				cartItems.map((cartItem) => (
					<CheckoutItem key={cartItem.id} cartItem={cartItem} />
				))
			) : (
				<span className='no-item'>
					Cart Empty, <Link to={'/shop'}>Go back to shop</Link>
				</span>
			)}
			<div className='total'>{`TOTAL: $${total}`}</div>
			<div className='test-warning'>
				*Please use the following test credit card for payments*
				<br />
				4242 4242 4242 4242 - Exp: MM/YY(Any Future Date) - CVV: Any 3 Digits
			</div>
			<StripeCheckoutButton price={total} />
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(CheckoutPage);
