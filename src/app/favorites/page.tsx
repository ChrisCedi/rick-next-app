"use client";
import { useCharacterStore } from "@/store/character-store";
import {
  DndContext,
  closestCenter,
  useSensor,
  PointerSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import { Container } from "@/components/shared/Container";
import { Title } from "@/components/shared/Title";
import { FavoriteCard } from "@/components/favorites/FavoriteCard";

export default function FavoritesPage() {
  const { favorites, reorderFavorites } = useCharacterStore();
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handledragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    const oldIndex = favorites.findIndex((item) => item.id === active.id);
    const newIndex = favorites.findIndex((item) => item.id === over?.id);
    const newOrderFav = arrayMove(favorites, oldIndex, newIndex);
    reorderFavorites(newOrderFav);
  };

  return (
    <Container>
      <Title title="Favorites" />
      <h2 className="text-gray-600 text-xl pb-4 font-medium">
        order your characters however you want
      </h2>
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handledragEnd}
        sensors={sensors}
      >
        <SortableContext
          items={favorites}
          strategy={verticalListSortingStrategy}
        >
          {favorites.length > 0
            ? favorites.map((fav) => (
                <FavoriteCard key={fav.id} character={fav} />
              ))
            : "no elements, add some :D"}
        </SortableContext>
      </DndContext>
    </Container>
  );
}
