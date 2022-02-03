import React from "react";

import "./form-input.styles.scss";

export const FormInput = ({ handleChange, label, ...props }) => {
	return (
		<div className='group'>
			<input className='form-input' onChange={handleChange} {...props} />
			{label ? (
				<label
					className={`${props.value.length ? "shrink" : ""} form-input-label`}
				>
					{label}
				</label>
			) : null}
		</div>
	);
};
