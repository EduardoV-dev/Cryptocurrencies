import { useState } from 'react';

// A list of currencies to add in the currencies' select component
export const currencies = [
  { code: 'USD', name: 'Dolar Estado Unidense' },
  { code: 'MXN', name: 'Peso Mexicano' },
  { code: 'EUR', name: 'Euro' }
];

// State used for reading select values
const useCurrency = (initialState) => {
  const [value, setValue] = useState(initialState);

  const updateValue = e => setValue(e.target.value);

  return [value, updateValue];
}

export default useCurrency;