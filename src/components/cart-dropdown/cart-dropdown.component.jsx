import React from "react";

import { connect } from "react-redux";
import { CartItem } from "../cart-item/cart-item.component";

import { CustomButton } from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems }) => {
	return (
		<div className='cart-dropdown'>
			<div className='cart-items'>
				{cartItems.map((cartItem) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))}
			</div>
			<CustomButton inverted>Go to checkout</CustomButton>
		</div>
	);
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
	cartItems: cartItems,
});

// const mapDispatchToProps = {};

export default connect(mapStateToProps)(CartDropdown);
