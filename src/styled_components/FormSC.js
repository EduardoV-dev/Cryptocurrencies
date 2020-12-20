import styled from '@emotion/styled';

export const ControlSC = styled.div`
  width: 100%;
  height: auto;
  margin: 2em auto;

  &:first-of-type {
    margin-top: 0;
  }
`;

export const LabelSC = styled.label`
  display: block;
  width: 100%;
  font-size: 2em;
  margin-bottom: 0.1em;
`;

export const SelectSC = styled.select`
  width: 100%;
  appearance: none;
  padding: 1rem;
  border-radius: 10px;
  font-size: 0.9em;
`;

export const SubmitSC = styled.button`
  width: 100%;
  padding: 1rem 0;
  border: none;
  outline: none;
  background-color: rgb(102, 162, 254);
  color: #fff;
  border-radius: 10px;
  font-size: 1.3em;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease-out;

  &:hover {
    background-color: rgb(50, 106, 192);
  }
`;