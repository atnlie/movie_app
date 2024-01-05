import React, {useState} from 'react';
import { useModal } from 'react-hooks-use-modal';

import {IMovie} from "../../../types/Types.api";
import Details from "../../Details/Details";

const MoviesSection: React.FC<{
    title: string, movies: IMovie[]
}> = ({ title,  movies}) => {
    const [Modal, open, close] = useModal('root', {
        preventScroll: true
    });
    const [mdlTitle, setMdlTitle] = useState('');
    const [mdlMovie, setMdlMovie] = useState({} as IMovie);

    const _close = () => {
        close();
    }

    const _open = (movie: IMovie) => {
        setMdlTitle(movie.titleText?.text);
        setMdlMovie(movie);
        open();
    }

    return (
        <>
            <div className="bg-gray-500 bg-opacity-75">
                <Modal>
                    <Details movie={mdlMovie} onPress={_close} />
                </Modal>
            </div>

            <h1 id={title ?? 'Favorites'} className="text-2xl font-bold pb-5 grid-cols-5">{title ?? 'Favorites'}</h1>
            <div className="box">
                {movies.map((movie, index) => {
                    return (
                        <>
                            <img src={movie?.primaryImage?.url ?? './sampleMovies.jpg'}
                                 alt={movie.titleText?.text}
                                 key={index}
                                 onClick={() => _open(movie)}
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
