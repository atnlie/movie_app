import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Home from "../pages/Home/Home";
import Movies from "../pages/Movies/Movies";
import MyList from "../pages/MyList/MyList";
import NewPopular from "../pages/NewPopular/NewPopular";
import TvShow from "../pages/TvShow/TvShow";
export default function RouterApp() {
    return (
        <Routes>
            <Route path="/" element={<NavBar />}>
                <Route index element={<Home />} />
                <Route path="movies" element={<Movies />} />
                <Route path="mylist" element={<MyList />} />
                <Route path="popular" element={<NewPopular />} />
                <Route path="tvshow" element={<TvShow />} />
            </Route>
        </Routes>
    );
}
