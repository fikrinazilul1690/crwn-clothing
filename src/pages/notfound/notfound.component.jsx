import React from "react";
import { Link } from "react-router-dom";
import "./notfound.styles.scss";

const NotFoundPage = () => {
	return (
		<div className='notfound'>
			<h1 className='notfound-404'>404</h1>
			<h2 className='title'>Oops! This Page Could Not Be Found</h2>
			<p className='description'>
				Sorry but the page you are looking for does not exist, have been
				removed. name changed or is temporarily unavailable
			</p>
			<Link className='link' to={"/"}>
				Go to Homepage
			</Link>
		</div>
	);
};

export default NotFoundPage;
