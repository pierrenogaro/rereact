import './App.css'
import MovieCard from "./components/MovieCard.jsx";

function App() {
    const movieNumber = 1;
    if (movieNumber === 1) {
        return (
            <>
                {movieNumber === 1 ? (
                    <MovieCard movie={{title :"Harry Potter", release_date: "2004"}}/>
                    ) :  (
                    <MovieCard movie={{title :"Interstellar", release_date: "2020"}}/>
                    )
                }
            </>
        )
    }
}

export default App
