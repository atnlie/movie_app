import { useAppDispatch, useAppSelector } from '../../hooks/Hooks';
import { removeMovieList, addMovieList } from '../../redux/WatchList/WatchListSlice';
import Container from '../../components/Container/Container';
import PageNotFound from "../NotFound/NotFound";
import MoviesSection from "../../components/Sections/Movies/MoviesSection";

const MyList = () => {
    const watchList = useAppSelector((state) => state.watchList);
    const dispatch = useAppDispatch();
    const addToList = () => {
        dispatch(addMovieList({
            id: '123',
            titleText: {
                text: '123'
            },
            primaryImage:  {
                id: '123',
                width: 123,
                height: 123,
                url: '123',
                caption: {
                    plainText: '123'
                },
            },
            titleType: {
                displayableProperty: {
                    value: {
                        plainText: '123',
                    },
                },
                text: '123',
                id: '123',
                isSeries: false,
                isEpisode: false,
                categories:[
                    {
                        value: '123',
                    }
                ],
                canHaveEpisodes: false,
            },
            originalTitleText: {
                text: '123',
            },
            releaseYear: {
                year: 123,
                endYear: '123'
            },
            releaseDate: {
                day: 123,
                month: 123,
                year: 123,
            }
        }));
    }

    const renderResult = () => {
        if (watchList?.MyMovies?.length > 0) {
            return (
                <Container>
                    <section className="main-container">
                        {watchList?.MyMovies &&
                            <MoviesSection title='My Favorite Videos' movies={watchList?.MyMovies} isFav={true} />}
                    </section>
                </Container>
            );
        } else {
            return (
                <Container>
                    <PageNotFound/>
                </Container>
            )
        }
    }

    return renderResult();

}
export default MyList;

