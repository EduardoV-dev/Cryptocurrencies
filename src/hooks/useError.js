import {useState} from 'react';

const useError = (initialState) => {
  const [error, setError] = useState(initialState);

  const updateErrorState = (value) => setError(value);

  return [error, updateErrorState];
}

export default useError;