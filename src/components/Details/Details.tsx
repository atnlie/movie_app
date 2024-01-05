import React from 'react';
import {IMovie} from "../../types/Types.api";

const Details: React.FC<{movie: IMovie, onPress: () => void}> = ({movie, onPress}) => {
    return (
        <div className="bg-gray-300 rounded-2xl text-blue-600 p-10">
            <h1>{movie.titleText?.text ?? 'Title'}</h1>
            <p>Release date: {movie.releaseDate?.day + "-" + movie.releaseDate?.month + "-" + movie.releaseDate?.year}</p>
            <button className="bg-red-900 p-3 mt-5 text-white rounded-xl" onClick={onPress}>Close</button>
        </div>
    );
}

export default Details;
