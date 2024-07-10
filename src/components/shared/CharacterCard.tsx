"use client";
import Image from "next/image";
import { Card, CardHeader, CardContent, CardTitle } from "../ui/card";
import { motion } from "framer-motion";

interface CardProps {
  character: {
    id: string;
    name: string;
    gender: string;
    status: string;
    image: string;
  };
}

export function CharacterCard({ character }: CardProps) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
      <Card>
        <CardHeader>
          <CardTitle>{character.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center">
            <div className="flex items-center justify-center">
              <Image
                src={character.image}
                alt="image of character"
                width={80}
                height={80}
                className="rounded-md h-24 w-24 lg:h-28 lg:w-28"
              />
            </div>
            <div className="pl-6">
              <p className="font-semibold pb-4">Information</p>
              <p>Gender: {character.gender}</p>
              <p>Status: {character.status}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
