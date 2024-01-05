import {useQuery} from "@tanstack/react-query";
import { Spinner } from "@material-tailwind/react";

import Container from '../../components/Container/Container';
import {GetUpcoming, GetMovies,} from "../../services/api";
import MoviesSection from "../../components/Sections/Movies/MoviesSection";

const Home = () => {
    const upComingQry = useQuery({
        queryKey: ['upcoming'],
        queryFn: GetUpcoming
    })

    const actionQry = useQuery({
        queryKey: ['movies', 'Action'],
        queryFn: () => GetMovies('Action'),
        staleTime: 3600000,
    })

    const animationQry = useQuery({
        queryKey: ['movies', 'Animation'],
        queryFn: () => GetMovies('Animation'),
        staleTime: 3600000,
    })

    const RomanceQry = useQuery({
        queryKey: ['movies', 'Noir'],
        queryFn: () => GetMovies('Film-Noir'),
        staleTime: 3600000,
    })

    const adventureQry = useQuery({
        queryKey: ['movies', 'Adventure'],
        queryFn: () => GetMovies('Adventure'),
        staleTime: 3600000,
    })

    return <Container>
        <section className="main-container">
            {<MoviesSection title='Upcoming Movies' movies={upComingQry?.data?.results ?? []} />}

            {<MoviesSection title='Action' movies={actionQry?.data?.results ?? []} />}

            {<MoviesSection title='Romance' movies={RomanceQry?.data?.results ?? []} />}

            {<MoviesSection title='Adventure' movies={adventureQry?.data?.results ?? []} />}

            {<MoviesSection title='Animation' movies={animationQry?.data?.results ?? []} />}

        </section>

    </Container>
}
export default Home;
