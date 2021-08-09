import React from 'react';
import PokemonItem from './PokemonItem';
import { uuidv4 } from '../../helpers/guid-generator';

const PokemonList = (props) => {
    const { pokemons } = props
    return (
        pokemons.length !== 0
            ? <ul> {
                pokemons.map((item) => {
                    return (
                        <PokemonItem
                            key={uuidv4()}
                            name={item.name} />
                    );
                })
            } </ul>
            : <div>Pokemons not found</div>
    );
}

export default PokemonList;