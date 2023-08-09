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

// MARK: Using async/await
export async function getCinemas(): Promise<Cinema[]> {
  const response = await fetch('https://mocki.io/v1/dff8c19a-24b1-4449-bf9f-be76cca10aab');
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data as Cinema[];
}

// MARK: Using .then
// export function getCinemas(): Promise<Cinema[]> {
//   return fetch('https://mocki.io/v1/dff8c19a-24b1-4449-bf9f-be76cca10aab')
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => data as Cinema[]);
// }
