import React from 'react'
import styled from 'styled-components'
import { colors } from '../../styled/colors'


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

export default function Info({ pokemon }) {
    return (
        <Paper>
            {pokemon.name}
        </Paper>
    )
}
