import React from "react";
import {useQuery} from "@tanstack/react-query";
import {Button, Input, Spinner} from "@material-tailwind/react";

import Container from '../../components/Container/Container';
import {GetSearchMovies} from "../../services/api";
import MoviesSection from "../../components/Sections/Movies/MoviesSection";

const Search = () => {
    const [searchKey, setSearchKey] = React.useState("");
    const searchQry = useQuery({
        queryKey: ['searchMovies'],
        queryFn: () => GetSearchMovies(searchKey),
        staleTime: 0,
    });
    // @ts-ignore
    const onChange = ({ target }) => {
        setSearchKey(target.value);
    }
    const _searchMovies = () => {
        searchQry.refetch().then();
    }

    return <Container>
        <section className="main-container">
            <div className={'pt-5 z-0'}>
                <div className="relative flex w-full max-w-[24rem]">
                    <Input
                        crossOrigin={"crossOrigin"}
                        type="search"
                        label="Search Movies"
                        value={searchKey}
                        onChange={onChange}
                        className="pr-24"
                        containerProps={{
                            className: "min-w-0",
                        }}
                        // color={'red'}
                        color="white"
                    />
                    <Button
                        placeholder={'btn search'}
                        size="sm"
                        color={searchKey ? "red" : "blue-gray"}
                        disabled={!searchKey}
                        className="!absolute right-1 top-1 rounded"
                        onClick={_searchMovies}
                    >
                        Search
                    </Button>
                </div>
                {!searchQry?.isFetching && ((searchQry?.data?.results.length ?? 0) <= 0) && <h1>No data found.</h1>}
                {searchQry?.isFetching && <Spinner color={'red'} className="h-12 w-12 content-center mt-5" />}
                {((searchQry?.data?.results.length ?? 0) > 0) && <MoviesSection title='Movies Results' movies={searchQry?.data?.results ?? []}  />}
            </div>
        </section>
    </Container>
}

export default Search;
