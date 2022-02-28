import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

import React from 'react';
import { useLocation, useMatch, useNavigate } from 'react-router-dom';

export const CollectionPreview = ({ title, items, routeName }) => {
	let navigate = useNavigate();
	let location = useLocation();
	let match = useMatch(location.pathname);
	return (
		<div className='collection-preview'>
			<h1
				className='title'
				onClick={() => {
					navigate(`${match.pathname}/${routeName}`);
				}}
			>
				{title.toUpperCase()}
			</h1>
			<div className='preview'>
				{items
					.filter((item, idx) => idx < 4)
					.map((item) => (
						<CollectionItem key={item.id} item={item} />
					))}
			</div>
		</div>
	);
};
