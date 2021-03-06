import React, { useState } from 'react'
import { H2, Button, SpaceBetween, Container, Search } from '../../styled'
import Cardlist from '../../Cardlist'
import { Link } from 'react-router-dom'


export default function Featured() {
    const cardsPerPage = 5;
    const [search, setSearch] = useState('');
    const [limit, setLimit] = useState(cardsPerPage);

    return (
        <Container top={100} bottom={100}>
            <SpaceBetween bottom={45} wrapp>
                <H2>Quick search</H2>
                <SpaceBetween>
                    <Link to='/pokemon' style={{ marginRight: '15px' }}><Button>All Cards</Button></Link>
                    <Search><input placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} /></Search>
                </SpaceBetween>
            </SpaceBetween>

            <Cardlist search={search} limit={limit} />

            <center>
                <Button type="button" primary onClick={() => setLimit(limit + cardsPerPage)} style={{ marginTop: '40px' }}>Load More</Button>
            </center>
        </Container>
    )
}
