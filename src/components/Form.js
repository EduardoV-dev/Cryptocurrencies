import React from 'react';
import InputComponent from './InputComponent';
import { ControlSC, SubmitSC } from '../styled_components/FormSC';
import PropTypes from 'prop-types';

const Form = ({ currencies, setCrypto, setCurrency, apiCrypto, consultInfo }) => (
  <form
    onSubmit={consultInfo}
  >

    <InputComponent
      values={currencies}
      inputCatcher={setCurrency}
      type={0}
      labelText='Elige tu moneda'
    />

    <InputComponent
      values={apiCrypto}
      inputCatcher={setCrypto}
      type={1}
      labelText='Elige tu criptomoneda'
    />

    <ControlSC>
      <SubmitSC
        type="submit"
      >Calcular</SubmitSC>
    </ControlSC>
  </form>
);

Form.propTypes = {
  currencies: PropTypes.array.isRequired,
  setCrypto: PropTypes.func.isRequired,
  setCurrency: PropTypes.func.isRequired,
  apiCrypto: PropTypes.array.isRequired,
  consultInfo: PropTypes.func.isRequired
}

export default Form;