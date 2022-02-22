import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { cartShow } from '../../redux/cart/cart.actions';

import { useNavigate } from 'react-router-dom';

const CartIcon = ({ itemCount, dispatch }) => {
	const navigate = useNavigate();
	return (
		<div
			className='cart-icon'
			onMouseEnter={() => {
				dispatch(cartShow());
			}}
		>
			<ShoppingIcon
				className='shopping-icon'
				onClick={() => navigate('/checkout')}
			/>
			<span className='item-count'>{itemCount}</span>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartIcon);
