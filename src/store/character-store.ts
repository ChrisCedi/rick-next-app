import { create } from "zustand";
import { type CharacterStore } from "@/types/types";

export const useCharacterStore = create<CharacterStore>((set) => ({
  favorites: [],
  addFavorite: (character) =>
    set((state) => {
      const currentFavorites = state.favorites.filter(
        (fav) => fav.id !== character.id
      );

      if (currentFavorites.length < 5) {
        return { favorites: [...currentFavorites, character] };
      }
      return { favorites: [...currentFavorites.slice(1), character] };
    }),
  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((character) => character.id !== id),
    })),
}));
