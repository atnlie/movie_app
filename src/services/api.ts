import axios from "axios";
import axiosClient, {headers} from "./Axios/Axios";
import {IMovie, IParams} from "../types/Types.api";

const httpRequest = <T>(req: {
    headers: {"X-RapidAPI-Host": string | undefined; "X-RapidAPI-Key": string | undefined;};
    method: string;
    url: string;
    params?: IParams;
}): Promise<T> => {
    return new Promise(async (resolve, reject) => {
        try {
            const request = await axiosClient(req);
            resolve(request.data);
        } catch (e: any) {
            reject(e?.response?.data || { status_code: 500 });
        }
    });
}

const options = {
    method: 'GET',
    baseURL: process.env.REACT_APP_BASE_URL_API,
    headers
};

export const GetGenres = () => httpRequest<{ results: string[] }>({
    ...options,
    url: '/titles/utils/genres',
});


export const GetUpcoming = () => httpRequest<{results: IMovie[]}>({
    ...options,
    url: '/titles/x/upcoming',
    params: {page: '1', limit: '12'},
});

export const GetMovies = (mGenre?: string) => httpRequest<{results: IMovie[]}>({
    ...options,
    url: '/titles',
    params: {limit: '12', genre: mGenre ?? ''},
});

export const GetTypeMovie = (moviesType?: string) => httpRequest<{results: IMovie[]}>({
    ...options,
    url: '/titles',
    params: {limit: '36', titleType: moviesType ?? 'movie', page: '3'},
});

export const GetNewMovies = () => httpRequest<{results: IMovie[]}>({
    ...options,
    url: '/titles',
    params: {limit: '48', startYear: '2020', titleType: 'movie', page: '3'},
});

export const GetSearchMovies = (keyword: string) => httpRequest<{results: IMovie[]}>({
    ...options,
    url: `/titles/search/keyword/${keyword}`,
    params: {limit: '48'},
});

/* direct approach */
export const GetGen = async () => {
    try {
        const response = await axios.request({
            ...options,
            url: '/titles/utils/genres',
        });

        return response.data.results;
    } catch (e) {
        console.log(e);
        return {};
    }
}


