import React from 'react';
import { CustomButtonContainer } from './custom-button.style';

export const CustomButton = ({ children, ...props }) => {
	return (
		<CustomButtonContainer className='custom-button' {...props}>
			{children}
		</CustomButtonContainer>
	);
};
