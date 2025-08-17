import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type Props = { name: string; image: string };

export const CharacterCard: React.FC<Props> = ({ name, image }) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle className="truncate">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full aspect-[4/3] overflow-hidden rounded-xl">
          <img src={image} alt={name} className="w-full h-full object-contain" loading="lazy" />
        </div>
      </CardContent>
    </Card>
  );
};
