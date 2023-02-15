import axios from 'axios';

export const GET_GAMES = "GET_GAMES";
export const GET_GAME = "GET_GAME";
export const GET_GENRE = "GET_GENRE"; 
export const GAMES_FILTERED_BY_GENRES = 'GAMES_FILTERED_BY_GENRES';
export const GAMES_FILTERED_BY_CREATION = 'GAMES_FILTERED_BY_CREATION';
export const NAME_BY_ORDER = "NAME_BY_ORDER";
export const RATING_BY_ORDER = "RATING_BY_ORDER";
export const ORDER_GAME = "ORDER_GAME";
export const GET_GAME_NAME = "GET_GAME_NAME";
export const GAME_POST = 'GAME_POST';

export const getGames = () => {
    return async function(dispatch) {
        try {
            const games = await axios.get("http://localhost:3001/games");
            return dispatch({
                type: GET_GAMES,
                payload: games.data
            });
        } catch (error) {
            //console.log(error);
        };
    };
};

export const getGameDetails = (id) => {
    return async function(dispatch) {
        try {
            const { data } = await axios.get(`http://localhost:3001/games/${id}`);
            return dispatch({
                type: GET_GAME,
                payload: data
            });
        } catch (error) {
            //console.log(error)
            return dispatch ({
                type: GET_GAME,
                payload: []
            })
        };
    };
};


export const getGameGenre = () => {
    return async function(dispatch) {
        try {
            const genres = await axios.get("http://localhost:3001/genres");
            return dispatch({
                type: GET_GENRE,
                payload: genres.data
            });
        } catch (error) {
            //console.log(error)
        };
    };
};


export const getGameName = (name) => {
    return async function (dispatch) {
        try {
            const { data } = await axios.get(`http://localhost:3001/games?name=${name}`);
            return dispatch({
                type: GET_GAME_NAME,
                payload: data
            })
        } catch (error) {
           // console.log(error)
            return dispatch ({
                type: GET_GAME_NAME,
                payload: []
            })
        }
    }
};


export const postGame = (payload) => {
    return async function() {
        const data = await axios.post("http://localhost:3001/games", payload);
        return data;
    }
}

export const gamesFiteredByGenres = (payload) => {
    return {
        type: GAMES_FILTERED_BY_GENRES,
        payload
    };
};

export const gamesFilteredByCreation = (payload) => {
    return {
        type: GAMES_FILTERED_BY_CREATION,
        payload
    };
};

export const orderGame = (payload) => {
    return {
        type: ORDER_GAME,
        payload
    };
}

export const nameByOrder = (payload) => {
    return {
        type: NAME_BY_ORDER,
        payload
    };
};

export const nameByRating = (payload) => {
    return {
        type: RATING_BY_ORDER,
        payload
    };
};