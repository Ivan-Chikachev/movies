import React, {useReducer} from 'react';
import {AboutContext} from "./AboutContext";
import {AboutReducer} from "./AboutReducer";
import {DELETE_COMMENT, GET_FILMS} from "../types";

export const AboutState = (props) => {
    const initialState = {
        comments: {},
    }
    const [state, dispatch] = useReducer(AboutReducer, initialState)


    const deleteComOfId = (c, id) =>({
        type: DELETE_COMMENT,
        c,
        id,
    })

    const deleteComment = (c, id) => {
        dispatch(deleteComOfId(c, id))
    }

    return (
        <AboutContext.Provider value={{
            state, deleteComment
        }}>
            {props.children}
        </AboutContext.Provider>
    )
}