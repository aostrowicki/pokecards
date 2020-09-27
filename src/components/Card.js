import React from 'react'
import styled from 'styled-components'
import { colors } from './styled/colors'
import Type from './Type'
import { Center } from './styled'
import { Link } from 'react-router-dom'


const Pokecard = styled.article`
    min-width:250px;
    max-width:280px;
    border-radius:6px;
    background-color:white;
    border: solid 1px ${colors.border};
    height:330px;
    padding: 15px 20px 20px;
    position:relative;
    display:flex;
    flex-direction:column;

    .info{
        text-align:center;

        img{
            max-width:100px;
        }

        h1{
            font-family: Roboto Mono;
            font-weight: 400;
            font-size: 22px;
            margin:0;
            text-transform: capitalize;
        }
    }

    .link::before{
        position:absolute;
        width:100%;
        height:100%;
        top:0;
        left:0;
        z-index:0;
        content:'';
    }

    .type{
        z-index:5;
        justify-self:flex-end;
    }
    
`

const Stats = styled.div`
    display:flex;
    justify-content: space-between;
    font-family: Roboto Mono;
    font-weight: 500;
    font-size: 16px;
    pointer-events:none;

    & span{
        position:relative;
    }

    & span:first-child::after{
        content:'HP';
        position:absolute;
        left:120%;
        bottom:1px;
        font-size: 11px;
    }

    & span:last-child::before{
        content:'ATK';
        position:absolute;
        right:120%;
        bottom:1px;
        font-size: 11px;
    }
`

const Divider = styled.div`
    height:1px;
    background:${colors.border};
`


export default function Card({ pokemon, loading }) {

    if (loading) return (
        <Pokecard>

        </Pokecard>
    )

    return (
        <Pokecard>
            <Link className='link' to={`/pokemon/${pokemon.name}`}></Link>
            <Stats>
                <span>{pokemon.stats[0].base_stat}</span>
                <span>{pokemon.stats[1].base_stat}</span>
            </Stats>

            <div className="info">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />

                <h1>{pokemon.name}</h1>
            </div>

            <div className="abilities">
                <span>xxx</span>
                <Divider />
                <span>xxx</span>
            </div>


            <Center style={{ marginTop: 'auto' }}>
                {pokemon.types.map(type =>
                    <Type key={type.type.name} name={type.type.name} />
                )}
            </Center>
        </Pokecard>
    )
}
