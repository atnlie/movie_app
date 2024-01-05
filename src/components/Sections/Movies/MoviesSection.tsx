import React, {useState} from 'react';
import { useModal } from 'react-hooks-use-modal';

import {IMovie} from "../../../types/Types.api";
import Details from "../../Details/Details";
import {useAppDispatch} from "../../../hooks/Hooks";
import { removeMovieList, addMovieList } from '../../../redux/WatchList/WatchListSlice';


const MoviesSection: React.FC<{
    title: string, movies: IMovie[], isFav?: boolean
}> = ({ title,  movies, isFav}) => {
    const [Modal, open, close] = useModal('root', {
        preventScroll: true
    });
    const [mdlMovie, setMdlMovie] = useState({} as IMovie);
    const [idx, setIdx] = useState(0);
    const dispatch = useAppDispatch();

    const _close = () => {
        close();
    }

    const _open = (movie: IMovie, idx: number) => {
        setMdlMovie(movie);
        setIdx(idx);
        open();
    }

    const _addMovieToList = (movie: IMovie) => {
        dispatch(addMovieList(movie));
        console.log('Sudah berhasil dimasukan');
    }

    const _removeMovieToList = (index: number) => {
        dispatch(removeMovieList(idx));
        close();
        console.log('Sudah berhasil dihapus');
    }

    return (
        <>
            <div className="bg-gray-500 bg-opacity-75">
                <Modal>
                    <Details movie={mdlMovie} onPress={_close} addToList={() => _addMovieToList(mdlMovie)} removeList={() => _removeMovieToList(idx)} isFav={isFav} />
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
