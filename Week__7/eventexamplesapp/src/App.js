import React from 'react';
import Counter from './components/Counter';
import WelcomeButton from './components/WelcomeButton';
import SyntheticEventDemo from './components/SyntheticEventDemo';
import CurrencyConvertor from './components/CurrencyConvertor';

function App() {
  return (
    <div className="App">
      <Counter />
      <WelcomeButton />
      <SyntheticEventDemo />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
