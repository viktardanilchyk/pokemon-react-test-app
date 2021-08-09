import React from 'react';
import Header from './components/shared/Header';
import API from './api';
import PokemonList from './components/pokemon-list/PokemonList';

function App() {
  const [pokemons, setPokemons] = React.useState([]);

  React.useEffect(() => {
    const loadData = async () => {
      await API.get("/pokemon")
        .then((response) => response.data.results)
        .then((data) => setPokemons(data))
        .catch((error) => console.log(error));
    }

    loadData();
  }, [])
  
  return (
    <React.Fragment>
      <Header />
      <PokemonList pokemons={pokemons} />
    </React.Fragment>
  );
}

export default App;
