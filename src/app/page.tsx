import { Button } from "@/components/ui/button";
import { Title } from "@/components/shared/Title";
import { Container } from "@/components/shared/Container";
import { CharacterCard } from "@/components/shared/CharacterCard";

export default function Home() {
  const list = [
    {
      id: "1",
      name: "Mechanical Rick",
      gender: "Male",
      status: "unknown",
      image: "https://rickandmortyapi.com/api/character/avatar/218.jpeg",
    },
    {
      id: "2",
      name: "Mechanical Rick",
      gender: "Male",
      status: "unknown",
      image: "https://rickandmortyapi.com/api/character/avatar/218.jpeg",
    },
    {
      id: "6",
      name: "Mechanical Rick",
      gender: "Male",
      status: "unknown",
      image: "https://rickandmortyapi.com/api/character/avatar/218.jpeg",
    },
    {
      id: "3",
      name: "Mechanical Rick",
      gender: "Male",
      status: "unknown",
      image: "https://rickandmortyapi.com/api/character/avatar/218.jpeg",
    },
    {
      id: "4",
      name: "Mechanical Rick",
      gender: "Male",
      status: "unknown",
      image: "https://rickandmortyapi.com/api/character/avatar/218.jpeg",
    },
  ];
  return (
    <main>
      <Container>
        <Title title="Rick and Morty App" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          {list.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </Container>
    </main>
  );
}
