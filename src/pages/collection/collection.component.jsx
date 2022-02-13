import "./collection.styles.scss";

import React from "react";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { useParams } from "react-router-dom";

import CollectionItem from "../../components/collection-item/collection-item.component";
import NotFoundPage from "../notfound/notfound.component";

const CollectionPage = () => {
	const params = useParams();
	const collection = useSelector(selectCollection(params.collectionId));
	console.log(collection);
	if (!collection) return <NotFoundPage />;
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

export default CollectionPage;
