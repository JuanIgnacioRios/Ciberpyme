import {
  Shield,
  ShieldAlert,
  ShieldMinus,
  ShieldPlus,
  ShieldX,
} from "lucide-react";
import React, { useMemo } from "react";
import { cn } from "../../utils/className";

interface Props {
  score: number;
}

export default function PasswordStrength({ score }: Props) {
  const { label, labelColor, backgroundColor, icon } = useMemo(() => {
    if (score <= 3) {
      return {
        label: "Baja",
        labelColor: "text-red-600",
        backgroundColor: "bg-red-200",
        icon: <ShieldX className={cn("text-red-600", "h-8 w-8")} />,
      };
    }
    if (score <= 6) {
      return {
        label: "Media",
        labelColor: "text-yellow-600",
        backgroundColor: "bg-yellow-200",
        icon: <ShieldAlert className={cn("text-yellow-600", "h-8 w-8")} />,
      };
    }
    if (score <= 8) {
      return {
        label: "Alta",
        labelColor: "text-blue-600",
        backgroundColor: "bg-blue-200",
        icon: <ShieldMinus className={cn("text-blue-600", "h-8 w-8")} />,
      };
    }
    return {
      label: "Muy Alta",
      labelColor: "text-green-600",
      backgroundColor: "bg-green-200",
      icon: <ShieldPlus className={cn("text-green-600", "h-8 w-8")} />,
    };
  }, [score]);

  return (
    <div className="flex gap-2 items-center">
      <h2 className="text-xl font-bold">Seguridad de tu contraseña:</h2>
      <div
        className={cn(
          "flex items-center justify-center transition-colors rounded-full py-1 px-4 gap-1",
          backgroundColor
        )}
      >
        {icon}
        <p className={cn(labelColor, "text-lg font-bold")}>{label}</p>
      </div>
    </div>
  );
}
