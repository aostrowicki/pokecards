import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Card from '../../Card'
import { H1, SH, Button } from '../../styled'
import { Link } from 'react-router-dom'
import bg from '../../../assets/bg.png'


const Header = styled.header`
    background-color:#2D2D2D;
    padding:70px 0 90px;
    display:flex;
    justify-content:center;
    position:relative;

    &::before,&::after{
        opacity:0.5;
        content:'';
        position:absolute;
        top:0;
        height:100%;
        width:100%;
        background-image: url(${bg});
        background-repeat: repeat-y;
        background-position:right top;
    }

    &::after{
        transform:scaleX(-1);
        
    }

    .container{
        z-index:1;
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

    a:not(:last-child){
        margin-right:25px;
    }

    @media screen and (max-width: 900px){

        .container{
            flex-direction:column-reverse;
            text-align:center;
        }

        p{
            margin-bottom: 30px;
            width:100%;
            padding:10px;
        }

        h1{
            margin:60px 0 0;
        }

    }
`

export default function Hero() {

    useEffect(() => {
        let url = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 890) + 1}/`
        fetch(url).then(response => response.json()).then(data => data && setPokemon(data));


        setInterval(function () {
            url = `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 890) + 1}/`
            fetch(url).then(response => response.json()).then(data => setPokemon(data));
        }, 5000)
    }, [])

    const [pokemon, setPokemon] = useState();

    return (
        <Header>
            <div className="container">
                <div>
                    <H1>Pokecards</H1>
                    <SH>Collect your favourite Pokemons! There's more than 900 Pokecards available. </SH>
                    <div>
                        <Link to='/pokemon'><Button big>See All Cards</Button></Link>
                        <Link to={`/pokemon/${Math.floor(Math.random() * 890) + 1}`}><Button big primary>Random Card</Button></Link>
                    </div>
                </div>

                {pokemon ? <Card pokemon={pokemon} /> : <Card loading>loading2</Card>}
            </div>
        </Header>
    )
}
