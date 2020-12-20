import styled from '@emotion/styled';

export const HeaderSC = styled.header`
  width: 100%;
  font-size: 1.5em;
  text-align: left;
  position: relative;
  font-weight: bold;

  h1{
    padding-bottom: 0.2em;
    
    @media screen and (max-width: 900px) {
      text-align: center;
    }
  }

  h1::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 120px;
    height: 7px;
    background-color: rgb(102, 162, 254);
    border-radius: 0 10px 10px 0;

    @media screen and (max-width: 900px) {
      left: 50%;
      transform: translate(-50%);
    }
  }
`;