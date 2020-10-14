import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { typesColors } from './styled/colors'

const StyledLink = styled(Link)`
    text-decoration:none;
    color:white;
    text-transform: capitalize;
    font-family: Roboto;
    font-weight: 500;
    font-size: 11px;
    padding:2px 8px 2px 9px;
    border-radius:50px;
    margin-right:5px!important;
    background-color: ${props =>
        typesColors.find(type => type.type === props.type).color
    }
`


export default function Type({ name }) {
    return (
        <div className='type'>
            <StyledLink to={`/type/${name}`} type={name}>
                {name}
            </StyledLink>
        </div>
    )
}
