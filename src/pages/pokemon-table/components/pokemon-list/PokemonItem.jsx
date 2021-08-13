import React from 'react';

const PokemonItem = (props) => {
    const { name } = props;
    return (
        <li>{name}</li>
    );
}

export default PokemonItem;