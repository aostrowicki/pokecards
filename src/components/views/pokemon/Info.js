import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../actions/cartActions'
import { colors } from '../../styled/colors'
import { H4, CenterAlign, Button, Price } from '../../styled'


const Paper = styled.div`
    background:white;
    height:100%;
    width:100%;
    align-self:start;
    border-radius:6px;
    border:solid 1px ${colors.border};
    margin-left: 50px;
    padding: 35px 55px;
`

export const Description = styled.p`
    margin:0;
    font-family: Roboto;
    font-size: 15px;
    color:${colors.text};
    font-weight:400;
    padding: 25px 0 40px;
`

export default function Info({ pokemon }) {

    const dispatch = useDispatch();


    return (
        <Paper>
            <H4>
                {pokemon.name}
            </H4>

            <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio laboriosam, assumenda cumque minima aliquid itaque nemo ratione labore ea repudiandae qui sint ad consequuntur saepe ut! Enim eveniet ipsam ipsum.
            </Description>

            <CenterAlign>
                <Price>${pokemon.price}</Price>
                <Button primary onClick={() => dispatch(addToCart(pokemon))}>Add To Cart</Button>
            </CenterAlign>

            <Description />
        </Paper>
    )
}
