"use client";
import { Character } from "@/types/types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card } from "../ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

interface FavoriteCardProps {
  character: Character;
}

export function FavoriteCard({ character }: FavoriteCardProps) {
  const router = useRouter();
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: character.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    router.push(`/${character.id}`);
  };

  return (
    <Card
      style={style}
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="px-10 py-8 border-primary border-2 my-4 flex items-center justify-between"
    >
      <div className="flex flex-col items-start">
        <h1 className="text-lg font-semibold mb-2">{character.name}</h1>
        <Button onClick={handleClick} size={"sm"}>
          see
        </Button>
      </div>
      <Image
        src={character.image}
        width={90}
        height={90}
        alt="avatar"
        className="rounded-full h-16 w-16 md:h-24 md:w-24"
      />
    </Card>
  );
}
