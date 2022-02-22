import styled, { css } from 'styled-components';

const buttonStyles = css`
	background-color: black;
	color: #fff;
	border: none;

	&:hover {
		background-color: #fff;
		color: black;
		border: 1px solid black;
	}
`;

const invertedButtonStyles = css`
	background-color: #fff;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: #fff;
		border: none;
	}
`;

const googleSignInStyles = css`
	background-color: #4285f4;
	color: #fff;
	border: none;
	&:hover {
		background-color: #357ae8;
		border: none;
	}
`;

const getButtonStyles = (props) => {
	if (props.isGoogleSignIn) {
		return googleSignInStyles;
	} else {
		return props.inverted ? invertedButtonStyles : buttonStyles;
	}
};

export const CustomButtonContainer = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	padding: 0 35px 0 35px;
	font-size: 15px;
	text-transform: uppercase;
	font-family: 'Open Sans Condensed', sans-serif;
	font-weight: bold;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;

	${getButtonStyles}
`;
