import { useState } from 'react';
import axios from 'axios';

const useResult = (initialState) => {
  const [result, setResult] = useState(initialState);

  const getAPIResult = async (currency, crypto, setSpinner) => {
    if (currency.trim() === '' || crypto.trim() === '') return;

    const apiKey = `b7010f356a0826e79ac785018918abe2ee1cbf9a816c95a4d94125ea37e501e4`;

    // URL for getting the data
    const URL = 'https://min-api.cryptocompare.com/data/price';

    const res = await axios.get(URL, {
      params: {
        api_key: apiKey,
        fsym: crypto,
        tsyms: currency
      }
    });

    setSpinner(false);
    setResult({ value: res.data[currency], currency });
  }

  return [result, getAPIResult];
}

export default useResult;