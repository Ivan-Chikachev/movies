import {DELETE_COMMENT} from "../types";


export const AboutReducer = (state, action) => {
    switch (action.type) {
        case DELETE_COMMENT:
            return {
                ...state,
                comments: {...state.comments,[action.id]: state.comments[action.id].filter(c=>  c !== action.c)}
            };
        default:
            return state
    }
}