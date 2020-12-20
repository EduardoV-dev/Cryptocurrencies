import styled from "@emotion/styled";

export const AppContainerSC = styled.main`
  max-width: 1000px;
  margin: 3em auto;
  color: #fff;
  font-family: "Bebas Neue", cursive;

  @media screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2em;
  }
`;

export const LeftFigureSC = styled.figure`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;

  img {
    width: 100%;
    object-fit: cover;
  }
`;
