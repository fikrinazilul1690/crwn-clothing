import React from 'react';
import { connect } from 'react-redux';

import { cartHidden, cartShow } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import {
	selectCartItemsCount,
	selectCartShow,
} from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { useNavigate } from 'react-router-dom';

const CartIcon = ({ cartHidden, cartShow, itemCount, show }) => {
	const navigate = useNavigate();
	return (
		<div
			className='cart-icon'
			onMouseEnter={cartShow}
			onMouseLeave={cartHidden}
		>
			<ShoppingIcon
				className='shopping-icon'
				onClick={() => navigate('/checkout')}
			/>
			<span className='item-count'>{itemCount}</span>
			{show ? <CartDropdown /> : null}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount,
	show: selectCartShow,
});

const mapDispatchToProps = (dispatch) => ({
	cartHidden: () => dispatch(cartHidden()),
	cartShow: () => dispatch(cartShow()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
