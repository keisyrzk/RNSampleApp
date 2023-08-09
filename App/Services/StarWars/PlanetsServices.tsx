import { Planet } from './Entities/Planet';
import { baseEndpoints, fetchData } from './StarWarsServices';

export const planets = {
    getAll: async (): Promise<Planet[]> => {
        return fetchData<Planet[]>(baseEndpoints.planets);
    },

    get: async (id: string): Promise<Planet | null> => {
        return fetchData<Planet | null>(`${baseEndpoints.planets}/${id}`);
    },
  };