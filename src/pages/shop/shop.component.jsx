import React from 'react';
import {
	convertCollectionsSnapshotToMap,
	firestore,
} from '../../.firebase/firebase.utils';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { Route, Routes } from 'react-router-dom';
import CollectionPage from '../../pages/collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
	state = {
		loading: true,
	};

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const { updateCollections } = this.props;
		const collectionRef = firestore.collection('collections');

		// fetch(
		// 	'https://firestore.googleapis.com/v1/projects/crwn-clothing-db-db6c4/databases/(default)/documents/collections'
		// )
		// 	.then((response) => response.json())
		// 	.then((collections) => console.log(collections));

		collectionRef.get().then((snapshot) => {
			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
			updateCollections(collectionsMap);
			this.setState({ loading: false });
		});
	}

	render() {
		const { loading } = this.state;
		return (
			<div className='shop-page'>
				<Routes>
					<Route
						path='/'
						element={<CollectionsOverviewWithSpinner isLoading={loading} />}
					/>
					<Route
						path=':collectionId'
						element={<CollectionPageWithSpinner isLoading={loading} />}
					/>
				</Routes>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	updateCollections: (collectionsMap) =>
		dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
