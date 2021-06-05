import React, {useReducer} from 'react';
import {PageReducer} from "./PageReducer";
import {GET_FILMS,  SET_TOTAL_FILMS} from "../types";
import {filmsAPI} from "../../api/api";
import {PageContext} from "./PageContext";

export const PageState = (props) => {
    let initialState = {
        films: [],
        totalCountFilms: 0
    };
    const [state, dispatch] = useReducer(PageReducer, initialState)
    const setFilms = (films) => ({
        type: GET_FILMS,
        films
    })
    const setTotalFilms = (count) => ({
        type: SET_TOTAL_FILMS,
        count
    })

    const getFilms = (currentPage) => {
        filmsAPI.getfilms(currentPage).then(response => {
            dispatch(setFilms(response.data.data.movies))
            dispatch(setTotalFilms(response.data.data.movie_count))
        })
    }
    function createPages(pages, pagesCount, currentPage) {
        if (pagesCount > 11) {
            if (currentPage > 5) {
                for (let i = currentPage - 5; i <= currentPage + 5; i++) {
                    pages.push(i)
                    if (i === pagesCount) break
                }
            } else {
                for (let i = 1; i <= 11; i++) {
                    pages.push(i)
                    if (i === pagesCount) break
                }
            }
        } else {
            for (let i = 1; i <= pagesCount; i++) {
                pages.push(i)
            }
        }
    }
    return (
        <PageContext.Provider value={{
            state, getFilms, createPages
        }}>
            {props.children}
        </PageContext.Provider>
    )
}