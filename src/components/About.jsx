import {useContext, useState} from "react";
import {AboutContext} from "../context/Comments/AboutContext";

export default (props) => {
    const [value, setValue] = useState('')

    const {state, deleteComment} = useContext(AboutContext);
    const comments = state.comments

    const item = props.location?.state?.item
    const idFilm = item.id
    const submitHandler = e => {
        e.preventDefault()
        if (!comments[idFilm]) comments[idFilm] = []
        if (value) comments[idFilm].push(value)
        setValue('')
    }

    return (
        <div className="container">
            <div className='film'>
                <div className="film__img-wrap">
                    <img className="film__img" src={item.medium_cover_image} alt=""/>
                </div>
                <div className="film__about">
                    <h2 className={'film__title'}>
                        {item.title}
                    </h2>
                    <p className={'film__year'}>
                        {item.year}
                    </p>
                    <p className={'film__runtime'}>
                        <span className="film__subtitle">Runtime: </span>
                        {item.runtime} min
                    </p>
                    <p className={'film__rating'}>
                        <span className="film__subtitle">Rating: </span>
                        {item.rating}
                    </p>
                    <p className={'film__genres'}>
                        <span
                            className="film__subtitle">
                            Genres:</span> {item.genres.join(', ')}
                    </p>
                    <p className={'film__description'}>
                        {item.description_full}
                    </p>
                </div>

            </div>
            <div className={'comments'}>
                <form className={'comments__form'} onSubmit={submitHandler}>
                            <textarea className={'comments__input'}
                                      placeholder={'Введите комментарий'}
                                      value={value}
                                      onChange={e => setValue(e.target.value)}
                            />
                    <input className={'btn comments__btn comments__btn--add'} type="submit" value='Add'/>
                </form>
                <div>
                    {comments[idFilm]?.map((c, index) =>
                        <div key={index} className={'comments__item'}>
                            <p className={'comments__text'}>{c}</p>
                            <button className={'btn comments__btn comments__btn--del'}
                                    onClick={() => deleteComment(c, idFilm)}>
                                Delete
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}