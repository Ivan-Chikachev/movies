import {useContext, useEffect, useState} from "react";
import {PageContext} from "../context/Page/PageContext";
import Pagination from "./Pagination";
import {NavLink} from "react-router-dom";

export default () => {

    const {state, getFilms, createPages} = useContext(PageContext);
    const [currentPage, setCurrentPage] = useState(1)

    const pageCount = Math.ceil(state.totalCountFilms / 16)
    const pages = []

    useEffect(() => {
        getFilms(currentPage)
    }, [currentPage])

    createPages(pages, pageCount, currentPage)

    return (
        <div className="container">
            <div className="films-list">
                {state.films.map(item =>
                    <div className="film-item" key={item.id}>
                        <div>
                            <img className={'film-item__img'} src={item.medium_cover_image} alt=""/>
                        </div>
                        <div className={'film-item__about'}>
                            <NavLink className={'film-item__title'} to={{
                                pathname:'/film',
                                state: {item}
                            }}>
                                {item.title}
                            </NavLink>
                            <p className={'film-item__year'}>
                                {item.year}
                            </p>
                            <p className="film-item__rating">
                                {item.rating}
                            </p>
                            <p className="film-item__runtime">
                                {item.runtime} min
                            </p>
                            <p className="film-item__description">
                                {item.description_full.length < 300
                                    ?
                                    item.description_full
                                    :
                                    item.description_full.slice(0,300) + '...'
                                }
                            </p>
                        </div>
                    </div>
                )}
            </div>
            <Pagination currentPage={currentPage} pages={pages} setCurrentPage={setCurrentPage}/>
        </div>
    );
};