import React from 'react';
import Header from './pages/shared/Header';
import PokemonList from './pages/pokemon-table/components/pokemon-list/PokemonList';

function App() {  
  return (
    <React.Fragment>
      <Header />
      <PokemonList />
    </React.Fragment>
  );
}

export default App;
