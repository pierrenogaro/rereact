import MovieCard from "../components/MovieCard.jsx";

function Home () {
    const movies = [
        {id: 1, title: "Harry Potter", release_date: "2004"},
        {id: 2, title: "Hermione Granger", release_date: "2004"},
        {id: 3, title: "Ron Weasley", release_date: "2004"},
    ]

    return <div className="home">
        <div className="movies-grid">
            {movies.map(movie => <MovieCard movie={movie} key={movie.id} />)}
        </div>
    </div>
}

export default Home