import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

import {IMovie} from "../../types/Types.api";

const DetailsMovie: React.FC<{movie: IMovie, onPress: () => void, addToList: () => void, removeList?: () => void, isFav?: boolean}> = ({movie, onPress, addToList, removeList, isFav}) => {
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
        <Card className="w-full max-w-[60rem] flex-row" placeholder={''}>
            <CardHeader
                placeholder={''}
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
            >
                <img
                    src={movie?.primaryImage?.url ?? './sampleMovies.jpg'}
                    alt="card-image"
                    className="h-full w-full object-cover"
                />
            </CardHeader>
            <CardBody placeholder={''} className={'flex-grow'}>
                <Typography placeholder={''} variant="h6" color="gray" className="mb-4 uppercase">
                    {movie.titleText?.text ?? 'Title'}
                </Typography>
                <Typography placeholder={''} variant="h4" color="blue-gray" className="mb-2">
                    {movie?.primaryImage?.caption?.plainText}
                </Typography>
                <Typography placeholder={''} color="gray" className="mb-8 font-normal">
                    <p>Released: <span className="font-bold">{movie.releaseYear?.year}</span></p>
                    <p>Release Date: <span className="font-bold">{
                        movie.releaseDate?.day &&
                        (movie.releaseDate?.day + "-" +
                            movie.releaseDate?.month + "-" +
                            movie.releaseDate?.year)
                    }</span>
                    </p>
                    <p>Type: <span className="font-bold">{movie?.titleType?.text}</span></p>
                </Typography>

                <div className={"flex flex-row items-end mt-72"}>
                    <Button color={"red"} onClick={onPress} placeholder={'Close'} className={"mr-2"}>
                        Close
                    </Button>
                    <_buttonMyList/>
                </div>
            </CardBody>
        </Card>
    );
}

export default DetailsMovie;
