import React, { Component } from "react";

import SHOP_DATA from "./shop.date";

import { CollectionPreview } from "../../components/preview-collection/preview-collection.component";

class ShopPage extends Component {
	constructor() {
		super();
		this.state = {
			collections: SHOP_DATA,
		};
	}

	render() {
		const { collections } = this.state;
		return (
			<div className='shop-page'>
				{collections.map(({ id, ...props }) => (
					<CollectionPreview key={id} {...props} />
				))}
			</div>
		);
	}
}

export default ShopPage;
