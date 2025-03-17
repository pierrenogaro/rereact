import MovieCard from "../components/MovieCard.jsx";
import {useState} from "react";

function Home () {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "Harry Potter", release_date: "2004"},
        {id: 2, title: "Hermione Granger", release_date: "2004"},
        {id: 3, title: "Ron Weasley", release_date: "2004"},
    ]

    const handleSearch = (e) => {
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("");
    }

    return <div className="home">

        <form onSubmit={handleSearch} className="search-form">
            <input
                type="text"
                className="search-input"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) =>setSearchQuery(e.target.value)}
            />
            <button className="search-button" type="submit">Search</button>

        </form>
        <div className="movies-grid">
            {movies.map(
            (movie) =>
                movie.title.toLowerCase().startsWith(searchQuery) &&
                <MovieCard movie={movie} key={movie.id} />)}
        </div>
    </div>
}

export default Home