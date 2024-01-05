import React from 'react';
import {IMovie} from "../../types/Types.api";

const Details: React.FC<{movie: IMovie, onPress: () => void, addToList: () => void, removeList?: () => void, isFav?: boolean}> = ({movie, onPress, addToList, removeList, isFav}) => {
    const _buttonMyList = () => {
        if (isFav) {
            return (
                <button data-ripple-light="true" type="button"
                        onClick={removeList}
                        className="select-none rounded-lg bg-yellow-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none inline-flex gap-2 items-center">
                <span><img src='./remove.svg' width={24} height={24}/> </span> Remove
                </button>
            );
        } else {
            return (
                <button data-ripple-light="true" type="button"
                        onClick={addToList}
                        className="mr-3 select-none rounded-lg bg-blue-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none inline-flex gap-2 items-center">
                    <span><img src='./check.svg' width={24} height={24}/> </span> Add To List
                </button>
            );
        }
    }

    return (
        <div className="bg-white w-full h-full rounded-lg rounded-2xl max-w-max">
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
            <div className="p-5 grid-cols-2">
                <div className="rounded-2xl text-blue-600">
                    <div className="flex p-2 gap-2 mb-5">
                        <img src={movie?.primaryImage?.url ?? 'sampleMovies.jpg'} alt={movie?.titleText?.text}
                             width={400}
                             height={500}/>
                        <div className="pl-5 pr-5">
                            <p>Title: <span className="font-bold">{movie.titleText?.text ?? 'Title'}</span></p>
                            <p>More info: <span className="font-bold">{movie?.primaryImage?.caption?.plainText}</span>
                            </p>
                            <p>Released: <span className="font-bold">{movie.releaseYear?.year}</span></p>
                            <p>Release Date: <span className="font-bold">{
                                movie.releaseDate?.day &&
                                (movie.releaseDate?.day + "-" +
                                    movie.releaseDate?.month + "-" +
                                    movie.releaseDate?.year)
                            }</span>
                            </p>
                            <p>Type :<span className="font-bold">{movie?.titleType?.text}</span></p>
                        </div>
                    </div>

                    <button data-ripple-light="true" type="button"
                            onClick={onPress}
                            className="mr-3 select-none rounded-lg bg-red-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                        Close
                    </button>
                    <_buttonMyList />
                </div>

            </div>
        </div>
    );
}

export default Details;
