import {useQuery} from "@tanstack/react-query";
import Container from '../../components/Container/Container';
import {GetNewMovies} from "../../services/api";
import MoviesSection from "../../components/Sections/Movies/MoviesSection";

const NewPopular = () => {
    const moviesQry = useQuery({
        queryKey: ['newMovies'],
        queryFn: () => GetNewMovies(),
        staleTime: 3600000,
    })

    return <Container>
        <section className="main-container">
            {moviesQry?.data?.results &&
                <MoviesSection title='New Movies' movies={moviesQry?.data?.results}  />}
        </section>
    </Container>
}

export default NewPopular;
