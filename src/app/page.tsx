import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p className="text-2xl text-primary font-semibold">
        Rick and Morty with Next js and Graphql
      </p>
      <Button>Iniciar</Button>
    </main>
  );
}
