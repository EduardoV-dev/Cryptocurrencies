import { useState, useEffect } from 'react';
import axios from 'axios';

const useCryptocurrencies = (initialState) => {
  // State for the Criptocurrencies in the API
  const [apiCrypto, setApiCrypto] = useState(initialState);

  // Get the data of the Cryptocurrencies from the API
  const getCryptoCurrencies = async () => {
    const apiKey = `b7010f356a0826e79ac785018918abe2ee1cbf9a816c95a4d94125ea37e501e4`;
    // URL for getting the top 10 cryptocurrencies
    const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull';
    const res = await axios.get(URL, {
      params: {
        api_key: apiKey, 
        limit: 10,
        tsym: 'USD'
      }
    });
    
    setApiCrypto(res.data.Data);
  }

  useEffect(() => {
    getCryptoCurrencies();
  }, []);

  return [apiCrypto, setApiCrypto];
}

export default useCryptocurrencies;