export const fetchData = () => {
    return dispatch => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=890/')
            .then(response => response.json())
            .then(data => dispatch(getDetails(data.results)))
    }
}

const getDetails = (data) => {
    return dispatch => {
        Promise.all(data.flatMap(async (pokemon) => {
            const fetchedData = await fetch(`${pokemon.url}`)
                .then(response => response.json())
                .then(data => data.stats.length ? data : null);
            return fetchedData ? { ...fetchedData, price: Math.floor(fetchedData.stats.reduce((acc, item) => acc + item.base_stat ** 2, 0) / 1000) } : [];
        })).then(data => dispatch(setData((data.flat()))));
    }
}

const setData = (data) => {
    return {
        type: 'FETCH_DATA',
        payload: data,
    }
}