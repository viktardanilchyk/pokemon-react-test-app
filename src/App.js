import React from 'react';
import Header from 'pages/shared/Header';
import Container from '@material-ui/core/Container';
import PokemonTable from 'pages/pokemons/components/pokemon-table/PokemonTable';

function App() {  
  return (
    <React.Fragment>
      <Header />
      <Container maxWidth="lg">
        <PokemonTable />
      </Container>      
    </React.Fragment>
  );
}

export default App;
