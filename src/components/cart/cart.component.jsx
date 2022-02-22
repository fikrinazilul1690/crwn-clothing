import React from 'react';
import { connect } from 'react-redux';

import { cartHidden, cartShow } from '../../redux/cart/cart.actions';

import './cart.styles.scss';
import { selectCartShow } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';

const Cart = ({ cartHidden, cartShow, show }) => {
	const mode = show ? 'active ' : '';
	return (
		<div className={`${mode}cart-icon-dropdown`} onMouseLeave={cartHidden}>
			<CartIcon onMouseEnter={cartShow} />
			{show && <CartDropdown />}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	show: selectCartShow,
});

const mapDispatchToProps = (dispatch) => ({
	cartHidden: () => dispatch(cartHidden()),
	cartShow: () => dispatch(cartShow()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
