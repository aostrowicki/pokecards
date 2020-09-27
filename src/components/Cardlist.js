import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Grid } from './styled'
import Card from './Card'

export default function Cardlist({ limit = 5, search = '', sort, type }) {

    const pokemons = useSelector(state => state.pokemons);
    const [pokemonsExpanded, setPokemonsExpanded] = useState();
    const [pokemonsFiltered, setPokemonsFiltered] = useState();
    const [dataFetched, setDataFetched] = useState(false);

    const fetchData = async () => {
        const results = await Promise.all(pokemons.map(async (pokemon) => {
            const data = await fetch(`${pokemon.url}`)
                .then(response => response.json())
                .then(data => data);
            return data;
        }));
        return results;
    }

    useEffect(() => {
        // pokemons.length && setPokemonsExpanded(pokemons);
    }, [pokemons])

    useEffect(() => {
        if (pokemonsExpanded) {
            setPokemonsFiltered(pokemonsExpanded.filter(pokemon => !type || pokemon.types.some(item => item.type.name === type.toLowerCase()))
                .filter(pokemon => pokemon.name.includes(search))
                .slice(0, limit));
        }
    }, [pokemonsExpanded, search, type, limit])


    const cardsLoading = [];
    for (let i = 0; i < limit; i++) {
        cardsLoading.push(<Card key={i} loading />)
    }

    if (dataFetched && !pokemonsFiltered.length)
        return (
            <div>noresult</div>
        )

    if (!pokemonsFiltered || !pokemonsFiltered.length)
        return (
            <Grid>
                {cardsLoading}
            </Grid>
        )

    return (
        <Grid>
            {pokemonsFiltered.map(pokemon => {
                return <Card pokemon={pokemon} key={pokemon.name} />
            })}
        </Grid>
    )
}