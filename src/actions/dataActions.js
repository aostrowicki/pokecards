export const fetchData = () => {
    return dispatch => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=890/')
            .then(response => response.json())
            .then(data => dispatch(getDetails(data.results)))
    }
}

const getDetails = (data) => {
    return dispatch => {
        Promise.all(data.map(async (pokemon) => {
            const data = await fetch(`${pokemon.url}`)
                .then(response => response.json())
                .then(data => data);
            return { ...data, price: Math.floor(data.stats.reduce((acc, item) => acc + item.base_stat ** 2, 0) / 1000) };
        })).then(data => dispatch(setData(data)));
    }
}

const setData = (data) => {
    return {
        type: 'FETCH_DATA',
        payload: data,
    }
}