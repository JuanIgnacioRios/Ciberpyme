import { Star } from "lucide-react";
import React, { useMemo } from "react";

interface Props {
  stars: number;
}

export default function Stars({ stars }: Props) {
  return (
    <div className="flex flex-col gap-2 w-fit items-center justify-center">
      <div className="flex gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            fill={index < stars ? "currentColor" : "none"}
            className="text-primary h-12 w-12"
          />
        ))}
      </div>
    </div>
  );
}
