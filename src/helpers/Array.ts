import {IMovie} from "../types/Types.api";

export const FindArrImovieById = (array:IMovie[], id: string) => {
    return array.find((element) => {
        return element.id === id;
    })
}
