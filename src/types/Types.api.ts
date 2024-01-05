export interface IMovie {
    id: string;
    primaryImage:  {
        id: string;
        width: number;
        height: number;
        url: string;
        caption: {
            plainText: string;
        };
    };
    titleType: {
        displayableProperty: {
            value: {
                plainText: string;
            };
        };
        text: string;
        id: string;
        isSeries: boolean;
        isEpisode: boolean;
        categories:[
            {
                value: string;
            }
        ];
        canHaveEpisodes: boolean;
    };
    titleText: {
        text: string;
    };
    originalTitleText: {
        text: string;
    };
    releaseYear: {
        year: number;
        endYear?: string;
    };
    releaseDate: {
        day: number;
        month: number;
        year: number;
    }
}

export interface IGenre {
    id: number;
    name: string;
}

export interface IParams {
    page?: string;
    limit?: string;
    genre?: string;
    titleType?: string;
    startYear?: string;
}

export  interface InitState {
    MyMovies: IMovie[];
}

export  interface InitSearchState {
    SearchMovies: IMovie[];
    Keyword: string;
}
