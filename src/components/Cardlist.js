import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Grid, Center, Par } from './styled'
import Card from './Card'

export default function Cardlist({ limit = 5, search = '', sort, type }) {

    const pokemons = useSelector(state => state.pokemons);
    const [pokemonsFiltered, setPokemonsFiltered] = useState([]);
    const [filtered, setFiltered] = useState(false);

    useEffect(() => {
        if (pokemons) {
            setPokemonsFiltered(pokemons.filter(pokemon => !type || pokemon.types.some(item => item.type.name === type.toLowerCase()))
                .filter(pokemon => pokemon.name.includes(search))
                .sort((a, b) => {
                    if (sort === 'Lowest Price') return a.price - b.price;
                    if (sort === 'Highest Price') return b.price - a.price;
                    if (sort === 'HP') return b.stats[0].base_stat - a.stats[0].base_stat;
                    if (sort === 'ATK') return b.stats[1].base_stat - a.stats[1].base_stat;
                    if (sort === 'DEF') return b.stats[2].base_stat - a.stats[2].base_stat;
                    if (sort === 'SPD') return b.stats[5].base_stat - a.stats[5].base_stat;
                    return 0;
                })
                .slice(0, limit));
            setFiltered(true);
        }
    }, [pokemons, search, type, limit, sort])


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
        return <Center><Par>No results.</Par></Center>


    return (
        <Grid>
            {pokemonsFiltered.map(pokemon => {
                return <Card pokemon={pokemon} key={pokemon.name} cart />
            })}
        </Grid>
    )
}