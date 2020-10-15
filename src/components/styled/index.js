import styled, { css } from 'styled-components'
import { colors } from './colors'

export const SpaceBetween = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
`

export const Center = styled.div`
    display:flex;
    justify-content:center;
`

export const CenterAlign = styled.div`
    display:flex;
    align-items:center;
`

export const Divider = styled.div`
    height:1px;
    background:${props => !props.dark ? colors.border : '#303030'};
    margin-bottom:${props => props.bottom ? `${props.bottom}px` : 0};
`

export const Column = styled.div`
    display:flex;
    flex-direction:column;
`

export const Container = styled.div`
    max-width:${props => props.small ? '950px' : '1440px'};
    margin:auto;
`

export const Grid = styled.div`
    display:grid;
    grid-gap:40px;
    grid-template-columns: repeat(auto-fit,minmax(250px,256px));
`

export const H1 = styled.h1`
    margin:0;
    font-family: Roboto Mono;
    font-weight: bold;
    font-size: 48px;
    color:white;
`

export const H2 = styled.h1`
    margin:0;
    font-family: Roboto Mono;
    font-weight: bold;
    font-size: 36px;
    color:${colors.text};
    vertical-align:middle;
`

export const H4 = styled.h1`
    margin:0;
    font-family: Roboto Mono;
    font-weight: bold;
    font-size: 28px;
    color:${colors.text};
    vertical-align:middle;
    text-transform:capitalize;
`

export const Price = styled.p`
    margin:0;
    font-family: 'Roboto Mono';
    font-size: 16px;
    color:${colors.text};
    font-weight:bold;
    margin-right:20px;
`

export const SH = styled.p`
    margin:0;
    font-family: Roboto;
    font-size: 16px;
    color:white;
    font-weight:400;
`

export const Par = styled.span`
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
    list-style:none;
    margin: 8px 0;
`

export const Button = styled.button`
    font-family: Roboto;
    font-weight: 500;
    font-size: 14px;
    padding: 6px 20px;
    background-color:${colors.light};
    color:${colors.text};
    border-radius: 6px;
    border: 1px solid ${colors.border};
    cursor:pointer;
    transition: background-color 0.15s ease-out;
    box-shadow: 0 1px 0 rgba(27,31,35,.08);

    &:focus{
        outline:none;
    }

    &:hover{
        background-color:${colors.light2}
    }

    ${props => props.primary && css`
        border: 1px solid rgba(30,30,30,.5);
        background:${colors.dark};  
        color:white;

        &:hover{
            background-color:${colors.dark2}
        }
        `
    }

    ${props => props.big && css`
        font-size: 16px;
        border: 1px solid rgba(30,30,30,0.7);
        padding: 9px 33px;

        &:hover{
            background-color:${colors.dark2};
            color:white;
        }
        `
    }
`

export const Search = styled.div`
    position: relative;

    input{
        font-family: Roboto;
        font-weight: 500;
        color:${colors.text};
        font-size: 14px;
        line-height: 16px;
        padding: 7px 20px 6px;
        border-radius:6px;
        border:solid 1px ${colors.border};
        background-color:white;
        width:220px;
        outline:none;

        &::placeholder{
            font-weight:400;
        }

        &:focus{
            border:solid 1px ${colors.dark};
        }
    }
`