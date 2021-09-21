import { useEffect } from 'react';
import { api } from '../services/api';
import { Button } from "./Button";

interface StatesProps {
    genresState: {
        genres: GenreResponseProps[];
        setGenres(genre: GenreResponseProps[]): void;
    }

    selectedGenreIdState: {
        selectedGenreId: number;
        setSelectedGenreId(genreId: number): void;
    }
}

interface GenreResponseProps {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
}


export function SideBar(props: StatesProps) {

    useEffect(() => {
        api.get<GenreResponseProps[]>('genres').then(response => {
          props.genresState.setGenres(response.data);
        });
      }, []);

    function handleClickButton(id: number) {
        props.selectedGenreIdState.setSelectedGenreId(id);
    }

    return (
        <nav className="sidebar">
            <span>Watch<p>Me</p></span>

            <div className="buttons-container">
            {props.genresState.genres.map(genre => (
                <Button
                key={String(genre.id)}
                title={genre.title}
                iconName={genre.name}
                onClick={() => handleClickButton(genre.id)}
                selected={props.selectedGenreIdState.selectedGenreId === genre.id}
                />
            ))}
            </div>

        </nav>
  )
}