import { CharactersContainer, Character } from './Entities/Character';
import { baseEndpoints, fetchData } from './StarWarsServices';

export const characters = {
    getAll: async (): Promise<CharactersContainer> => {
        return fetchData<CharactersContainer>(baseEndpoints.characters);
    },

    get: async (id: string): Promise<Character | null> => {
        return fetchData<Character | null>(`${baseEndpoints.characters}/${id}`);
      },
  };