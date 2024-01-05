import { useAppSelector } from '../../hooks/Hooks';
import Container from '../../components/Container/Container';
import PageNotFound from "../NotFound/NotFound";
import MoviesSection from "../../components/Sections/Movies/MoviesSection";

const MyList = () => {
    const watchList = useAppSelector((state) => state.watchList);
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

