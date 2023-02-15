import {    
    GET_GAME, 
    GET_GAMES, 
    GET_GENRE, 
    GAMES_FILTERED_BY_GENRES,
    GAMES_FILTERED_BY_CREATION,
    ORDER_GAME,
    GET_GAME_NAME,
    GAME_POST
} from "../actions";

const initialState = {
    games: [],
    allGames: [],
    game: [],
    genres: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_GAMES:
            return {
                ...state,
                games: action.payload,
                allGames: action.payload
            };
        case GET_GAME:
            return {
                ...state,
                game: action.payload
            }
        case GET_GENRE:
            return {
                ...state,
                genres: action.payload
            }
        case GET_GAME_NAME:
            return {
                ...state,
                games: action.payload
            }
        case GAMES_FILTERED_BY_GENRES:
            let allVideoGames = [];
            if(action.payload) {
                allVideoGames = state.games.filter(games => {
                    if(games.genres.length === 0){
                        return games.genres
                    }
                    else if(games.genres.some(gen => gen.name === action.payload)) {
                        return games.genres.map(genre => genre.name)
                    } else {
                        return games.genres.includes(action.payload)
                    }
                })
            } else {
                allVideoGames = state.games
            }

            return {
                ...state,
                games: action.payload === 'Todos' ? state.allGames : allVideoGames,
            }
        case GAMES_FILTERED_BY_CREATION:
            const allVideogamesFilter = state.allGames;
            let filterCreated;
            if(action.payload === 'Creados'){
               filterCreated = allVideogamesFilter.filter(g => g.createdInDb) 
            } else if (action.payload === 'API'){
                filterCreated = allVideogamesFilter.filter(g => !g.createdInDb);
            } else {
                filterCreated = allVideogamesFilter;
            }
            
            return {
                ...state,
                games: filterCreated
            }
        case ORDER_GAME : {
            let allGamesOrder = [...state.allGames];
            let allOrder;

            switch(action.payload) {
                case 'Todos': 
                    allOrder = [...state.allGames];
                    break;
                case "Asc":
                    allOrder = allGamesOrder.sort((a,b) => {
                        if(a.name.toLowerCase() > b.name.toLowerCase()){
                            return 1;
                        }
                        if(a.name.toLowerCase() < b.name.toLowerCase()){
                            return -1;
                        }
                        return 0;
                    });
                    break;
                case "Des":
                    allOrder = allGamesOrder.sort((a,b) => {
                        if(a.name.toLowerCase() < b.name.toLowerCase()){
                            return 1;
                        }
                        if(a.name.toLowerCase() > b.name.toLowerCase()){
                            return -1;
                        }
                        return 0;
                    });
                    break;
                case "Peor":
                    allOrder = allGamesOrder.sort((a, b) => {
                        return a.rating - b.rating;
                    });
                    break;
                case "Mejor":
                    allOrder = allGamesOrder.sort((a, b) => {
                        return b.rating - a.rating;
                    });
                    break;
                default:
                    allOrder = allGamesOrder
                    break;
            }
            return {
                ...state,
                allGames: allOrder,
                games: allOrder
            }
        }
        case GAME_POST:
            return {
                ...state,
            }
        default:
            return {
                ...state,
            } ;
    }
}

export default rootReducer;