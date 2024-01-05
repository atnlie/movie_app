import React from 'react';
import { Button } from "@material-tailwind/react";
import {IMovie} from "../../types/Types.api";

const Details: React.FC<{movie: IMovie, onPress: () => void, addToList: () => void, removeList?: () => void, isFav?: boolean}> = ({movie, onPress, addToList, removeList, isFav}) => {
    const _buttonMyList = () => {
        if (isFav) {
            return (
                <Button
                    placeholder={''}
                    variant="gradient"
                    color="yellow"
                    className="group relative flex items-center gap-3 overflow-hidden pr-[64px]"
                    onClick={removeList}
                >
                    Remove
                    <span className="absolute right-0 grid h-full w-12 place-items-center bg-yellow-700 transition-colors group-hover:bg-light-blue-700">
                              <img src="./remove.svg" alt="metamask" className="h-6 w-6" />
                            </span>
                </Button>
            );
        } else {
            return (
                <Button
                    placeholder={''}
                    variant="gradient"
                    color="light-blue"
                    className="group relative flex items-center gap-3 overflow-hidden pr-[64px]"
                    onClick={addToList}
                >
                    Add To List
                    <span className="absolute right-0 grid h-full w-12 place-items-center bg-light-blue-600 transition-colors group-hover:bg-light-blue-700">
                          <img src="./check.svg" alt="metamask" className="h-6 w-6" />
                        </span>
                </Button>
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
                    <div className={"flex"}>
                        <Button color={"red"} onClick={onPress} placeholder={'Close'} className={"mr-2"}>
                            Close
                        </Button>
                        <_buttonMyList />
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Details;
