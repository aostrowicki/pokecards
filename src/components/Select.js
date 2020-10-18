import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { colors } from './styled/colors'

const StyledSelect = styled.div`

    button{
        cursor:pointer;
        appearance:none;
        font-family: Roboto;
        font-weight: 500;
        color:${colors.text};
        font-size: 14px;
        line-height: 16px;
        padding: 7px 15px 6px;
        border-radius:6px;
        border:solid 1px ${colors.border};
        background-color:${colors.light};
        outline:none;
        position:relative;
        transition:${colors.transition};
        text-transform:capitalize;
        box-shadow: 0 1px 0 rgba(27,31,35,.08);

        &:hover{
            background-color:${colors.light2}
        }

        span{
            color:#82888D;
            margin-right:10px;
        }
    }
`

const List = styled.ul`
    list-style:none;
    padding: 10px 0;
    border-radius:6px;
    border: solid 1px ${colors.border};
    background-color:${colors.light};
    position:absolute;
    top:calc(100% + 5px);
    left:0;
    z-index:10;
    
    ${props => props.grid && css`
        display:grid;
        grid-template-columns: repeat(3,1fr);

        @media screen and (max-width:650px){
            grid-template-columns: repeat(2,1fr);
        }
    `}

    li{
        min-width:180px;
        text-align:left;
        padding: 5px 20px;
        background-color:${colors.light};
        cursor:pointer;
        font-family: Roboto;
        font-size: 14px;
        font-weight:500;
        color:${colors.text};
        border-radius:6px;
        transition:${colors.transition};
        text-transform:capitalize;

        &:hover{
            background-color:${colors.light2};
        }

        @media screen and (max-width:440px){
            min-width:160px;
        }
    }
`

export default function Select({ name, options = [], currentState = 'All', setState, grid }) {

    const [showSelect, setShowSelect] = useState(false);

    return (
        <StyledSelect>
            <button onClick={() => setShowSelect(!showSelect)} onBlur={() => setShowSelect(false)}>
                <span>{name}:</span>
                {currentState}
                {showSelect ?
                    <List onClick={() => { setShowSelect(!showSelect) }} grid={grid}>
                        {options.map(option => <li onClick={setState} key={option.name}>{option.name}</li>)}
                    </List> : ''}
            </button>
        </StyledSelect>
    )
}
