import React, { useState, useEffect } from 'react'
import { SpaceBetween, Button, Container, Search } from '../../styled'
import Cardlist from '../../Cardlist'
import Select from '../../Select'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'


export default function Index() {
    const sortList = [
        { name: 'Lowest Price' },
        { name: 'Highest Price' },
        { name: 'HP' },
        { name: 'ATK' },
        { name: 'DEF' },
        { name: 'SPD' },
    ]

    const cardsPerPage = 15;
    const params = useParams();
    const [search, setSearch] = useState('');
    const [type, setType] = useState(params.type);
    const [sortBy, setSortBy] = useState();
    const [limit, setLimit] = useState(cardsPerPage);
    const types = useSelector(props => props.types);
    const sortedTypes = types.sort((a, b) => a.name.localeCompare(b.name));

    useEffect(() => {
        setType(params.type);
    }, [params])

    return (
        <Container bottom={140} top={80}>
            <SpaceBetween bottom={45} wrapp>
                <SpaceBetween>
                    <Select name="Type" options={sortedTypes} currentState={type} setState={(e) => setType(e.target.innerText)} grid />
                    <div style={{ width: '15px' }} />
                    <Select name="Sort by" options={sortList} currentState={sortBy} setState={(e) => setSortBy(e.target.innerText)} />
                </SpaceBetween>
                <Search><input placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} /></Search>
            </SpaceBetween>

            <Cardlist search={search} sort={sortBy} type={type} limit={limit} />

            <center>
                <Button type="button" primary onClick={() => setLimit(limit + cardsPerPage)} style={{ marginTop: '35px' }}>Load More</Button>
            </center>
        </Container>
    )
}
