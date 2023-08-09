export interface CharactersContainer {
  count: number,
  next: string | null,
  previous: string | null,
  results: Character[] 
}

export interface Character {
  name:       string | null;
  height:     string | null;
  mass:       string | null;
  hair_color: string | null;
  skin_color: string | null;
  eye_color:  string | null;
  birth_year: string | null;
  gender:     Gender | null;
  homeworld:  string | null;
  films:      string[] | null;
  species:    string[] | null;
  vehicles:   string[] | null;
  starships:  string[] | null;
}

type Gender = 'male' | 'female' | 'n/a'