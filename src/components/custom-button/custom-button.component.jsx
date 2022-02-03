import React from "react";

import "./custom-button.styles.scss";

export const CustomButton = ({ children, isGoogleSignIn, ...props }) => {
	return (
		<button
			className={`${isGoogleSignIn ? "google-sign-in" : ""} custom-button`}
			{...props}
		>
			{children}
		</button>
	);
};
