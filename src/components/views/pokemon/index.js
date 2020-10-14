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
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`).then(results => results.json()).then(data => setPokemon(data));
    }, [])

    if (!pokemon)
        return <div></div>

    return (
        <Container small style={{ padding: '80px 0 140px' }}>
            <SpaceBetween>
                <Column>
                    <Card pokemon={pokemon} />
                    <Stats stats={pokemon.stats} />
                </Column>
                <Info pokemon={pokemon} />
            </SpaceBetween>
        </Container>
    )
}