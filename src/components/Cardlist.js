import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Grid } from './styled'
import Card from './Card'

export default function Cardlist({ limit = 5, search = '', sort, type }) {

    const pokemons = useSelector(state => state.pokemons);
    const [pokemonsFiltered, setPokemonsFiltered] = useState([]);
    const [filtered, setFiltered] = useState(false);

    useEffect(() => {
        if (pokemons) {
            setPokemonsFiltered(pokemons.filter(pokemon => !type || pokemon.types.some(item => item.type.name === type.toLowerCase()))
                .filter(pokemon => pokemon.name.includes(search))
                .slice(0, limit));
            setFiltered(true);
        }
    }, [pokemons, search, type, limit])


    const cardsLoading = [];
    for (let i = 0; i < limit; i++) {
        cardsLoading.push(<Card key={i} loading />)
    }


    if (!filtered && !pokemonsFiltered.length)
        return (
            <Grid>
                {cardsLoading}
            </Grid>
        )

    if (!pokemonsFiltered.length)
        return <div>No results</div>


    return (
        <Grid>
            {pokemonsFiltered.map(pokemon => {
                return <Card pokemon={pokemon} key={pokemon.name} cart />
            })}
        </Grid>
    )
}