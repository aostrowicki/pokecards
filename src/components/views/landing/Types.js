import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { H2, Container } from '../../styled'
import { useSelector } from 'react-redux'


const List = styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(290px,1fr));
    
    @media screen and (max-width: 900px){
        grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
    }

    @media screen and (max-width: 600px){
        grid-template-columns: repeat(auto-fit,minmax(150px,1fr));
    }
`

const ListItem = styled.span`
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: 400;
    list-style:none;
    margin: 8px 0;
    text-transform:capitalize;  
`

const StyledLink = styled(Link)`
    text-decoration:none;
    color:unset;

    &:hover{
        text-decoration:underline;
    }
`

export default function Types() {

    const types = useSelector(state => state.types);
    const sortedTypes = types.sort((a, b) => a.name.localeCompare(b.name));

    return (
        <Container bottom={120}>
            <H2 style={{ paddingBottom: '25px' }}>Search by type</H2>
            <List>
                {sortedTypes.map(type => <ListItem key={type.name}><StyledLink to={`/type/${type.name}`}>{type.name}</StyledLink></ListItem>)}
            </List>
        </Container>
    )
}
