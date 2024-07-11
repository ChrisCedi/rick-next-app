"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { CharacterCard } from "../shared/CharacterCard";
import { useSuspenseQuery } from "@apollo/client";
import { type CharactersData } from "@/types/types";
import { GET_CHARACTERS_BY_PAGE_AND_NAME } from "@/querys/queryCharacters";
import { Pagination } from "./Pagination";

export function CharacterList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchName, setSearchName] = useState("");

  const { data } = useSuspenseQuery<CharactersData>(
    GET_CHARACTERS_BY_PAGE_AND_NAME,
    {
      variables: { page: currentPage, name: searchName },
    }
  );

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const previousPage = () => {
    setCurrentPage((prev) => prev - 1);
  };

  console.log(data.characters);

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        nextPage={nextPage}
        previousPage={previousPage}
        totalPages={data.characters.info.pages}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
        {data?.characters.results.length > 0 ? (
          data?.characters.results.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))
        ) : (
          <p className="font-semibold">Sin resultados</p>
        )}
      </div>
    </div>
  );
}
