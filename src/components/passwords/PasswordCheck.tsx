import React from "react";
import { cn } from "../../utils/className";
import { Check, X } from "lucide-react";

interface Props {
  label: string;
  isChecked: boolean;
}

export default function PasswordCheck({ label, isChecked }: Props) {
  return (
    <div className="flex gap-2 items-start transition-colors">
      <div
        className={`rounded-full p-1 ${
          isChecked ? "bg-green-200" : "bg-red-200"
        }`}
      >
        {isChecked ? (
          <Check className="text-green-600 h-4 w-4" />
        ) : (
          <X className="text-red-600 h-4 w-4" />
        )}
      </div>

      <p
        className={cn(
          isChecked ? "text-green-600" : "text-red-600",
          "text-left"
        )}
      >
        {label}
      </p>
    </div>
  );
}
