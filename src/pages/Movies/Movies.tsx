import {useQuery} from "@tanstack/react-query";
import Container from '../../components/Container/Container';
import MoviesSection from "../../components/Sections/Movies/MoviesSection";
import {GetTypeMovie} from "../../services/api";

const Movies = () => {
    const moviesQry = useQuery({
        queryKey: ['movies', 'movie'],
        queryFn: () => GetTypeMovie('podcastSeries'),
        staleTime: 3600000,
    })

    return <Container>
        <section className="main-container">
            {moviesQry?.data?.results &&
                <MoviesSection title='Movies' movies={moviesQry?.data?.results}/>}
        </section>
    </Container>
}

export default Movies;
