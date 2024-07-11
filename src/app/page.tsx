import { Button } from "@/components/ui/button";
import { Title } from "@/components/shared/Title";
import { Container } from "@/components/shared/Container";
import { CharacterList } from "@/components/Home/CharacterList";

export default function Home() {
  return (
    <main>
      <Container>
        <Title title="Rick and Morty App" />
        <CharacterList />
      </Container>
    </main>
  );
}
