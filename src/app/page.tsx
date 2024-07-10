"use client";
import { Button } from "@/components/ui/button";
import { Title } from "@/components/shared/Title";
import { Container } from "@/components/shared/Container";
import { CharacterCard } from "@/components/shared/CharacterCard";
import { gql, useSuspenseQuery } from "@apollo/client";
import { type CharactersData } from "@/types/types";

export default function Home() {
  const query = gql`
    query {
      characters(page: 1, filter: { name: "" }) {
        info {
          count
          pages
        }
        results {
          id
          name
          gender
          status
          image
        }
      }
    }
  `;

  const { data } = useSuspenseQuery<CharactersData>(query);

  return (
    <main>
      <Container>
        <Title title="Rick and Morty App" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          {data?.characters.results.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </Container>
    </main>
  );
}
