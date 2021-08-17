import React from 'react';
import PokemonItem from './PokemonItem';
import { uuidv4 } from 'helpers/guid-generator';
import { useDispatch, useSelector } from 'react-redux'
import * as actionCreators from 'pages/pokemon-table/actions';

const PokemonList = (props) => {
    const dispatch = useDispatch()

    const { pokemons, loading } = useSelector(
        state => ({          
            pokemons: state.pokemonListReducer.pokemonTableReducer.pokemons,
            loading: state.pokemonListReducer.pokemonTableReducer.loading
        })
      );

    React.useEffect(() => {
        dispatch(actionCreators.getPokemonListRequest())
      // Safe to add dispatch to the dependencies array
    }, [dispatch])

    console.log(pokemons);

    if (loading) { 
        return <div>Loading...</div>; 
    }

    return (
        pokemons && pokemons.length !== 0
            ? <ul> {
                pokemons.map((item) => {
                    return (
                        <PokemonItem
                            key={uuidv4()}
                            name={item.name}
                            image={item.sprites.front_default} />
                    );
                })
            } </ul>
            : <div>Pokemons not found</div>
    );
}

export default PokemonList;