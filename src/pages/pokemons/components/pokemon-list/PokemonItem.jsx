import React from 'react';

const PokemonItem = (props) => {
    const { name, image } = props;
    return (
        <li>
            <img src={image} />
            <p>{name}</p>
        </li>
    );
}

export default PokemonItem;