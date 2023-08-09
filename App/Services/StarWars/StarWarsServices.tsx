import { planets } from './PlanetsServices';
import { characters } from './CharactersServices';

let baseUrl = 'https://swapi.dev/api';

export const services = {
    starWars: {
      planets: planets,
      characters: characters
    },
  };

export const baseEndpoints = {
    planets:    baseUrl + '/planets',
    characters: baseUrl + '/people',
    starships:  baseUrl + '/starships',
    films:      baseUrl + '/films',
    vechicles:  baseUrl + '/vechicles'
}

export async function fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data as T;
  }
  