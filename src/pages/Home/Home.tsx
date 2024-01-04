import {useQuery} from "@tanstack/react-query";
import Container from '../../components/Container/Container';
import {GetGenres, GetUpcoming, GetMovies} from "../../services/api";
import MoviesSection from "../../components/Sections/Movies/MoviesSection";
import UpcomingSection from "../../components/Sections/Movies/UpcomingSection";

const Home = () => {
    // const query = useQuery({
    //     queryKey: ['genres'],
    //     queryFn: GetGenres,
    // })

    const upComingQry = useQuery({
        queryKey: ['upcoming'],
        queryFn: GetUpcoming
    })

    const actionQry = useQuery({
        queryKey: ['movies'],
        queryFn: () => GetMovies('Action'),
    })

    const animationQry = useQuery({
        queryKey: ['movies'],
        queryFn: () => GetMovies('Animation'),
    })

    const RomanceQry = useQuery({
        queryKey: ['movies'],
        queryFn: () => GetMovies('Film-Noir'),
    })

    const adventureQry = useQuery({
        queryKey: ['movies'],
        queryFn: () => GetMovies('Adventure'),
    })

    if(upComingQry.isFetched) {
        console.log(upComingQry?.data?.results[0].titleText.text);
    }

    return <Container>
        <section className="main-container">
            {upComingQry?.data?.results && <UpcomingSection title='Upcoming Movies' movies={upComingQry?.data?.results} />}

            {actionQry?.data?.results && <MoviesSection title='Action' movies={actionQry?.data?.results} />}

            {RomanceQry?.data?.results && <MoviesSection title='Romance' movies={RomanceQry?.data?.results} />}

            {adventureQry?.data?.results && <MoviesSection title='Adventure' movies={adventureQry?.data?.results} />}

            {animationQry?.data?.results && <MoviesSection title='Animation' movies={animationQry?.data?.results} />}

        </section>

    </Container>
}
export default Home;
