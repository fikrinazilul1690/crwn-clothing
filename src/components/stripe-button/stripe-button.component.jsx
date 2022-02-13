import StripeCheckout from "react-stripe-checkout";
import React from "react";

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51KRtWiJ7djyPajeHOj2GCTzVw6A9CaJ0x2KqKvmWdAOgR9LHjyNPd6PVnlQzznWvL2edxGALowd2VhMrZtqfFAOH0075AAnLWs";

	const onToken = (token) => {
		console.log(token);
		alert("Payment Successfull");
	};
	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing Ltd'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
