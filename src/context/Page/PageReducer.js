import {GET_FILMS, SET_TOTAL_FILMS} from "../types";

export const PageReducer = (state, action) => {
    switch (action.type) {
        case GET_FILMS:
            return {...state,films: action.films};
        case SET_TOTAL_FILMS:
            return {...state,totalCountFilms: action.count};
        default:
            return state;
    }
}