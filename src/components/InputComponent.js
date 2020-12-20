import React from 'react';
import { SelectSC, ControlSC, LabelSC } from '../styled_components/FormSC';
import PropTypes from 'prop-types';

// type defines the type of Select is needed
// 0 for currencies
// 1 for Cryptocurrencies
const InputComponent = ({ inputCatcher, values, type, labelText }) => {
  let optionDefault = 'Seleccionar';
  let valuesAreEmpty = JSON.stringify(values) === '[]';
  if (valuesAreEmpty) optionDefault = 'Cargando...';

  return (
    <ControlSC>
      <LabelSC>{labelText}</LabelSC>
      <SelectSC
        onChange={inputCatcher}
      >
        <option value="">{optionDefault}</option>
        {valuesAreEmpty
          ? null
          : values.map(value => (
            type === 0
              ? (<option
                key={value.code}
                value={value.code}
              >{value.name}</option>)
              : (<option
                key={value.CoinInfo.Id}
                value={value.CoinInfo.Name}
              >{value.CoinInfo.FullName}</option>)
          ))
        }
      </SelectSC>
    </ControlSC>
  );
}

InputComponent.propTypes = {
  inputCatcher: PropTypes.func.isRequired,
  values: PropTypes.array.isRequired,
  type: PropTypes.number.isRequired
}

export default InputComponent;