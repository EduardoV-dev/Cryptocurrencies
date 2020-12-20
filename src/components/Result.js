import React from 'react';
import { ResultContainerSC, ResultSC } from '../styled_components/ResultSC';
import PropTypes from 'prop-types';

const Result = ({ result }) => {
  const { value, currency } = result;
  if (value === 0) return null;

  const val = new Intl.NumberFormat('en-US', {style: 'currency', currency: currency}).format(value);

  return (
    <ResultContainerSC>
      <ResultSC>El precio es: <span>{val}</span></ResultSC>
    </ResultContainerSC>
  );
}

Result.propTypes = {
  result: PropTypes.object.isRequired
}

export default Result;