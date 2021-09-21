import { MovieCard } from '../components/MovieCard';

interface MoviesStateAndSelectedGenreTitleProps {
    moviesState: {
        movies: MovieProps[]
    },
    selectedGenreTitle: string
}

interface MovieProps {
    imdbID: string;
    Title: string;
    Poster: string;
    Ratings: Array<{
        Source: string;
        Value: string;
    }>;
    Runtime: string;
}

export function Content(props: MoviesStateAndSelectedGenreTitleProps) {

    return (
        <div className="container">
        <header>
          <span className="category">Categoria:<span> {props.selectedGenreTitle}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {props.moviesState.movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
    );
}