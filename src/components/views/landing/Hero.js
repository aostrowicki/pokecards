import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../../Card'
import { H1, SH, Button } from '../../styled'
import { Link } from 'react-router-dom'


const Header = styled.header`
    background-color:#2D2D2D;
    padding:70px 0 90px;
    display:flex;
    justify-content:center;

    .container{
        max-width:750px;
        display:flex;
        align-items:center;
    }

    h1{
        margin-bottom:10px;
    }

    p{
        margin-bottom: 60px;
        width:85%;
    }

    button{
        margin-right:25px;
    }
`

export default function Hero() {

    useEffect(() => {
        let url = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 890) + 1}/`
        fetch(url).then(response => response.json()).then(data => data && setPokemon(data));


        // setInterval(function () {
        //     url = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 890) + 1}/`
        //     fetch(url).then(response => response.json()).then(data => setPokemon(data));
        // }, 4000)
    }, [])

    const [pokemon, setPokemon] = useState();

    return (
        <Header>
            <div className="container">
                <div>
                    <H1>Pokecards</H1>
                    <SH>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, nisl porttitor vitae.</SH>
                    <Link to='/pokemon'><Button big>See All Cards</Button></Link>
                    <Link to={`/pokemon/${Math.floor(Math.random() * 890) + 1}`}><Button big primary>Random Card</Button></Link>
                </div>

                {pokemon ? <Card pokemon={pokemon} /> : <Card loading>loading2</Card>}
            </div>
        </Header>
    )
}
