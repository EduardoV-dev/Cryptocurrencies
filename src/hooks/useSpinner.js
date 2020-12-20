import { useState } from 'react';

const useSpinner = initialState => {
  const [spinner, setSpinner] = useState(initialState);

  const updateSpinnerState = value => setSpinner(value);

  return [spinner, updateSpinnerState];
}

export default useSpinner;