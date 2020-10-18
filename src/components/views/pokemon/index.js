import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../Card'
import Stats from './Stats'
import Info from './Info'
import { Column, Container, SpaceBetween } from '../../styled'

export default function Index() {

    const params = useParams();
    const [pokemon, setPokemon] = useState();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
            .then(results => results.json())
            .then(data => setPokemon({ ...data, price: Math.floor(data.stats.reduce((acc, item) => acc + item.base_stat ** 2, 0) / 1000) }));
    }, [])

    if (!pokemon)
        return <div></div>

    return (
        <Container small bottom={140} top={80}>
            <SpaceBetween wrapp>
                <Column>
                    <Card pokemon={pokemon} />
                    <Stats stats={pokemon.stats} />
                </Column>
                <Info pokemon={pokemon} />
            </SpaceBetween>
        </Container>
    )
}