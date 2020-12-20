import React from 'react';
import Cripto from './assets/cryptomonedas.png';
import { AppContainerSC, LeftFigureSC } from './styled_components/AppSC';
import Main from './components/Main';

function App() {
  return (
    <AppContainerSC>
      <div>
        <LeftFigureSC>
          <img
            src={Cripto}
            alt='Criptomonedas'
          />
        </LeftFigureSC>
      </div>
      <div>
        <Main />
      </div>
    </AppContainerSC>
  );
}

export default App;
