import { TextInformation } from "@/components/characterDetails/TextInformation";
import { Container } from "@/components/shared/Container";
import { Title } from "@/components/shared/Title";
import { getClient } from "@/lib/ApolloClient";
import { GET_CHARACTER_BY_ID } from "@/querys/getCharacterById";
import Image from "next/image";
import { Button } from "@/components/ui/button";

async function getCharacter(id: string) {
  const { data } = await getClient().query({
    query: GET_CHARACTER_BY_ID,
    variables: {
      id,
    },
  });

  return data.character;
}

export default async function CharacterDetail({
  params,
}: {
  params: { id: string };
}) {
  const character = await getCharacter(params.id);

  return (
    <Container>
      <Title title={character.name} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10">
        <div className="flex justify-center">
          <Image
            src={character.image}
            width={90}
            height={90}
            alt="image-character"
            className="rounded-full"
            style={{
              height: "85%",
              width: "85%",
            }}
          />
        </div>
        <div className="flex flex-col">
          <p className="text-2xl font-semibold pb-10">Details</p>

          <TextInformation label="Origin: " value={character.origin.name} />
          <TextInformation label="Location: " value={character.location.name} />
          <TextInformation
            label="Total episodes: "
            value={character.episode.length}
          />
          <TextInformation label="Gender: " value={character.gender} />
          <p
            className={`text-xl py-2 ${
              character.status === "Alive" ? "text-green-700" : "text-red-400"
            }`}
          >
            <b className={`text-primary`}>Status: </b> {character.status}
          </p>
          <Button className="bg-green-500 hover:bg-green-600">
            Agregar a favoritos
          </Button>
          <Button variant={"destructive"}>Quitar de favoritos</Button>
        </div>
      </div>
    </Container>
  );
}
