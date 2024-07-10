"use client";
import { Button } from "@/components/ui/button";
import { Title } from "@/components/shared/Title";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Title title="Rick and Morty App" />

      <Button>Iniciar</Button>
    </main>
  );
}
