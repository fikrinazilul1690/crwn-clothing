import './collection.styles.scss';

import React from 'react';

import { connect } from 'react-redux';
// import { useSelector } from "react-redux";
import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';
import NotFoundPage from '../notfound/notfound.component';

import withRouter from '../../withRouter';

const CollectionPage = ({ collection, isLoading, match }) => {
	// const params = useParams();
	// const collection = useSelector(selectCollection(params.collectionId));
	console.log(match.params);
	if (!collection && !isLoading) return <NotFoundPage />;
	const { title, items } = collection;
	return (
		<div className='collection-page'>
			<h2 className='title'>{title}</h2>
			<div className='items'>
				{items.map((item) => (
					<CollectionItem key={item.id} item={item} />
				))}
			</div>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default withRouter(connect(mapStateToProps)(CollectionPage));
