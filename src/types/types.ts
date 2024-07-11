export interface Character {
  id: string;
  name: string;
  gender: string;
  status: string;
  image: string;
}

export interface CharactersData {
  characters: {
    info: {
      pages: number;
    };
    results: Character[];
  };
}

export interface CharacterStore {
  favorites: Character[];
  addFavorite: (character: Character) => void;
  removeFavorite: (id: string) => void;
  reorderFavorites: (list: Character[]) => void;
}
