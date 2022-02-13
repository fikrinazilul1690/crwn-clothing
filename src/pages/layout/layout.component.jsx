import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/header.component";

export const Layout = () => {
	return (
		<div className='container'>
			<header>
				<Header />
			</header>
			<Outlet />
		</div>
	);
};
