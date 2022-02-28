import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const withRouter =
	(Component) =>
	({
		location = useLocation(),
		navigate = useNavigate(),
		params = useParams(),
		...props
	}) => {
		return <Component {...props} match={{ location, navigate, params }} />;
	};

export default withRouter;
