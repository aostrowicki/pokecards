import React from 'react'
import styled from 'styled-components'
import { colors } from './styled/colors'
import Type from './Type'
import { Center, Button, Divider } from './styled'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../actions/cartActions'
import cartImage from '../assets/cart.svg'


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
    font-family:'Roboto Mono';

    .info{
        text-align:center;

        img{
            min-height:96px;
            max-height:100px;
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

    button{
        position:absolute;
        top:0;
        left:50%;
        transform:translate(-50%,-50%);
        padding-light: 40px;
        font-family: Roboto Mono;
        font-size: 16px;
        color:#11C901;
        border-color:${colors.border};
        z-index:5;

        &::before{
            transition: opacity 0.1s ease-in-out;
            opacity:0;
            content:'';
            background-color:${colors.light};
            background-image:url(${cartImage});
            background-repeat: no-repeat;
            background-position:center center;
            width:100%;
            height:100%;
            position:absolute;
            display:flex;
            top:-1px;
            left:-1px;
            font-size: 12px;
            color:white;
            border-radius:6px;
            line-height:14px;
            border: 1px solid #11C901;
        }

        &:hover{

            &::before{
                opacity:1;
            }
        }
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

const Abilities = styled.div`
    font-family:'Roboto Mono';
    font-size:14px;

    div{
        margin: 10px 0;
    }

    span{
        margin:6px 0;
        text-align:center;
        display:block;
        text-transform:capitalize;
        opacity:0.8;
        pointer-events:none;
    }
`


export default function Card({ pokemon, loading, cart }) {

    const dispatch = useDispatch();


    if (loading) return (
        <Pokecard>

        </Pokecard>
    )

    return (
        <Pokecard>
            {cart && <Button onClick={() => dispatch(addToCart(pokemon))}>${pokemon.price}</Button>}
            <Link className='link' to={`/pokemon/${pokemon.name}`}></Link>
            <Stats>
                <span>{pokemon.stats.length ? pokemon.stats[0].base_stat : '?'}</span>
                <span>{pokemon.stats.length ? pokemon.stats[1].base_stat : '?'}</span>
            </Stats>

            <div className="info">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />

                <h1>{pokemon.name}</h1>
            </div>

            <Abilities>
                <Divider />
                {pokemon.abilities.map(ability => <span key={ability.slot}>{ability.ability.name}</span>)}
            </Abilities>


            <Center style={{ marginTop: 'auto' }}>
                {pokemon.types.map(type =>
                    <Type key={type.type.name} name={type.type.name} />
                )}
            </Center>
        </Pokecard >
    )
}
