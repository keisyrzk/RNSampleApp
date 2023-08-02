export interface FilmShow {
  hour: string;
  hall: number;
  availableSeats: number[];
}

export interface Film {
  name: string;
  filmDescription: string;
  poster: string;
  filmShows: FilmShow[];
}

export interface Cinema {
  name: string;
  films: Film[];
}

// handle loading local JSON
import cinemasData from '../Resources/cinemas.json';
export function getCinemas(): Promise<Cinema[]> {
  return Promise.resolve(cinemasData);
}
