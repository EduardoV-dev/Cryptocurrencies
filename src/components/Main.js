import React, { Fragment } from "react";
import Header from "./Header";
import Form from "./Form";
import Error from "./Error";
import Result from "./Result";
import Spinner from "./Spinner";
import useCurrency, { currencies } from '../hooks/useCurrency';
import useError from '../hooks/useError';
import useCryptocurrencies from '../hooks/useCryptocurrencies';
import useResult from '../hooks/useResult';
import useSpinner from '../hooks/useSpinner';

const Main = () => {
	// use the currencies state for the currency and cryptocurrency
	const [currency, setCurrency] = useCurrency('');
	const [crypto, setCrypto] = useCurrency('');

	// use the hook for getting the cryptocurrencies from the API in order to load them into the select component
	const [apiCrypto] = useCryptocurrencies([]);

	// use the errors hook in order to establish its state and read it
	const [error, setError] = useError(false);

	// hook that controls the info fetched from the api in order to show the information and update it
	const [result, setResult] = useResult({
		value: 0,
		currency: ''
	});

	// Hook to control the state of the spinner and handle when to show it
	const [spinner, setSpinner] = useSpinner(false);

	// Function executed when the form is submitted and trying consult the API info
	const consultInfo = e => {
		e.preventDefault();

		// checking currency and cryptocurrency is not empty
		if (currency.trim() === '' || crypto.trim() === '') {
			setError(true);
			return;
		}

		setError(false);
		setSpinner(true);
		setResult(currency, crypto, setSpinner);
	}

	let errorComponent = error ? <Error message='Todos los campos son obligatorios' /> : null;
	let spinnerComponent = spinner ? <Spinner /> : <Result result={result} />

	return (
		<Fragment>
			<Header
				title='Cotiza Criptomonedas al Instante'
			/>

			{errorComponent}

			<Form
				currencies={currencies}
				setCurrency={setCurrency}
				setCrypto={setCrypto}
				apiCrypto={apiCrypto}
				consultInfo={consultInfo}
			/>

			{spinnerComponent}
		</Fragment>
	);
}

export default Main;