import {useQuery} from "@tanstack/react-query";
import Container from '../../components/Container/Container';
import {GetTypeMovie} from "../../services/api";
import MoviesSection from "../../components/Sections/Movies/MoviesSection";
const TvShow = () => {
    const moviesQry = useQuery({
        queryKey: ['movies', 'series'],
        queryFn: () => GetTypeMovie('tvMiniSeries'),
        staleTime: 3600000,
    })

    return <Container>
        <section className="main-container">
            {moviesQry?.data?.results &&
                <MoviesSection title='TV Series' movies={moviesQry?.data?.results}/>}
        </section>
    </Container>
}

export default TvShow;
