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

export interface Order {
  cinemaName: string;
  filmName: string;
  hour: string;
  hall: number;
  tickets: Ticket[];
}

export interface Ticket {
  type: typeof TicketType;
  amount: number;
}

export const TicketType = {
  normal: 'Normal',
  discounted: 'Discounted'
};

// handle loading local JSON
import cinemasData from '../Resources/cinemas.json'
export function getCinemas(): Promise<Cinema[]> {
  return Promise.resolve(cinemasData);
}