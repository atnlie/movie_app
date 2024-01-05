import React from 'react';
import {IMovie} from "../../types/Types.api";

const Details: React.FC<{movie: IMovie, onPress: () => void}> = ({movie, onPress}) => {
    return (
        <div className="bg-white w-96 h-96 rounded-lg rounded-2xl">
            <div className="flex p-2 gap-1 shadow-xl">
                <div className="">
                    <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
                </div>
                <div className="circle">
                    <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
                </div>
                <div className="circle">
                    <span className="bg-pink-500 inline-block center w-3 h-3 rounded-full"></span>
                </div>
            </div>
            <div className="p-5">
                <div className="rounded-2xl text-blue-600">
                    <img src={movie?.primaryImage?.url ?? 'sampleMovies.jpg'} alt={movie?.titleText?.text} width={120} height={500}/>
                    <p>Title: {movie.titleText?.text ?? 'Title'}</p>
                    <p>Released: {movie.releaseYear?.year}</p>
                    <p>Release Date: {
                        movie.releaseDate?.day &&
                        (movie.releaseDate?.day + "-" +
                            movie.releaseDate?.month + "-" +
                            movie.releaseDate?.year)
                    }</p>
                    <button className="bg-red-900 p-3 mt-5 text-white rounded-xl" onClick={onPress}>Close</button>
                </div>
            </div>
        </div>
    );
}

export default Details;
