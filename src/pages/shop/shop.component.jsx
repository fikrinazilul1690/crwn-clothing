import React from "react";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
const ShopPage = () => {
	return (
		<div className='shop-page'>
			{/* <Routes>
				<Route path='/'>
					<Route index element={<CollectionsOverview />} />
					<Route path=':collectionId' element={<CollectionPage />} />
				</Route>
			</Routes> */}
			<CollectionsOverview />
		</div>
	);
};

export default ShopPage;
