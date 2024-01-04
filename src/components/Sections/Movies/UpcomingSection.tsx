import React from 'react';
import {IUpcoming} from '../../../types/Types.api';
const UpcomingSection: React.FC<{ title: string, movies: IUpcoming[] }> = ({ title,  movies}) => {
    return (
        <>
            <h1 id={title ?? 'Favorites'} className="text-2xl font-bold pb-5 grid-cols-5">{title ?? 'Favorites'}</h1>
            <div className="box">
                {movies.map((movie, index) =>
                    <img src={movie?.primaryImage?.url ?? './sampleMovies.jpg' }
                         alt={movie.titleText.text}
                         key={index}
                    />)}
            </div>
        </>
    );
};

export default UpcomingSection;
