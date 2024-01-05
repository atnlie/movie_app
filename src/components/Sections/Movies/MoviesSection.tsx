import React, {useState} from 'react';
import { useModal } from 'react-hooks-use-modal';

import {IMovie} from "../../../types/Types.api";
import Details from "../../Details/Details";
import {useAppDispatch, useAppSelector} from "../../../hooks/Hooks";
import { removeMovieList, addMovieList } from '../../../redux/WatchList/WatchListSlice';
import { addMessage } from '../../../redux/Toast/ToastSlice';
import {FindArrImovieById} from "../../../helpers/Array";
import DetailsMovie from "../../Details/DetailsMovie";


const MoviesSection: React.FC<{
    title: string, movies: IMovie[], isFav?: boolean
}> = ({ title,  movies, isFav}) => {
    const [Modal, open, close] = useModal('root', {
        preventScroll: true
    });
    const [mdlMovie, setMdlMovie] = useState({} as IMovie);
    const [idx, setIdx] = useState(0);
    const dispatch = useAppDispatch();
    const MyList = useAppSelector((state) => state.watchList.MyMovies);


    const _close = () => {
        close();
    }

    const _open = (movie: IMovie, idx: number) => {
        setMdlMovie(movie);
        setIdx(idx);
        open();
    }

    const _addMovieToList = (movie: IMovie) => {
        if (FindArrImovieById(MyList, movie.id) !== undefined) {
            dispatch(addMessage({
                message: `This movie '${movie?.titleText?.text}' already exist.`,
                type: 'warning',
            }));
        } else {
            dispatch(addMovieList(movie));
            dispatch(addMessage({
                message: `This movie '${movie?.titleText?.text}' added to your list.`,
                type: 'success',
            }));
        }

    }

    const _removeMovieToList = () => {
        dispatch(removeMovieList(idx));
        dispatch(addMessage({
            message: `Your movie list '${mdlMovie?.titleText?.text}' has been removed.`,
            type: 'warning',
        }))
        close();
    }

    return (
        <>
            <div className="bg-gray-500 bg-opacity-75">
                <Modal>
                    <DetailsMovie movie={mdlMovie} onPress={_close} addToList={() => _addMovieToList(mdlMovie)} removeList={_removeMovieToList} isFav={isFav} />
                </Modal>
            </div>

            <h1 id={title ?? 'Favorites'} className="text-2xl font-bold pb-5 grid-cols-5">{title ?? 'Favorites'}</h1>
            <div className="box">
                {movies.map((movie, index) => {
                    return (
                        <>
                            <img className="hover:cursor-pointer hover:scale-125"
                                src={movie?.primaryImage?.url ?? './sampleMovies.jpg'}
                                 alt={movie.titleText?.text}
                                 key={index}
                                 onClick={() => _open(movie, index)}
                            />
                        </>
                    );
                    }
                )}
            </div>
        </>
    );
};

export default MoviesSection;
