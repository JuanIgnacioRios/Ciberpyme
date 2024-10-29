import React, { useEffect, useState } from "react";
import { getRandomNumber } from "../../utils/getRandomNumber";
import { TIPS } from "../../constants/tips";

export default function Robot() {
  const [tip, setTip] = useState("");

  useEffect(() => {
    if (!tip) {
      const number = getRandomNumber(0, TIPS.length - 1);
      const newTip = TIPS[number];
      setTip(newTip);
      return;
    }
    const interval = setInterval(() => {
      const number = getRandomNumber(0, TIPS.length - 1);
      const newTip = TIPS[number];
      setTip(newTip);
    }, 1000 * 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-end justify-end fixed bottom-4 right-2 w-[30%] animate-float">
      {tip && (
        <div className="absolute right-40 bottom-8 w-[30vw] bg-white border-2 rounded-lg shadow-lg p-4">
          <p className="text-center">{tip}</p>
        </div>
      )}
      <img src={"./botcitoconsombra.png"} />
    </div>
  );
}
