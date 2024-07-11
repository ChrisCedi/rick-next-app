"use client";
import { useCharacterStore } from "@/store/character-store";
import { Button } from "../ui/button";
import { Character } from "@/types/types";

interface Props {
  character: Character;
}

export function FavoriteActions({ character }: Props) {
  const { favorites, addFavorite, removeFavorite } = useCharacterStore();

  const findCharacter = favorites.find((fav) => fav.id === character.id);

  return (
    <div className="flex flex-col pt-10">
      {!!findCharacter ? (
        <Button
          variant={"destructive"}
          onClick={() => removeFavorite(character.id)}
        >
          Quitar de favoritos
        </Button>
      ) : (
        <Button
          className="bg-green-500 hover:bg-green-600"
          onClick={() => addFavorite(character)}
        >
          Agregar a favoritos
        </Button>
      )}
    </div>
  );
}
