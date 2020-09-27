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
            return data;
        })).then(dispatch(setData(data)));
    }
}

const setData = (data) => {
    return {
        type: 'FETCH_DATA',
        payload: data,
    }
}