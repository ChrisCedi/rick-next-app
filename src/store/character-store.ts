import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type CharacterStore, type Character } from "@/types/types";

export const useCharacterStore = create<CharacterStore>()(
  persist(
    (set) => ({
      favorites: [],
      addFavorite: (character: Character) =>
        set((state) => {
          const currentState = state.favorites;
          if (currentState.length < 5) {
            return { favorites: [...currentState, character] };
          } else {
            const newState = [character, ...currentState.slice(0, 4)];
            return { favorites: newState };
          }
        }),
      removeFavorite: (id: string) =>
        set((state) => ({
          favorites: state.favorites.filter((character) => character.id !== id),
        })),

      reorderFavorites: (list: Character[]) =>
        set(() => ({
          favorites: list,
        })),
    }),
    {
      name: "character-store",
    }
  )
);
