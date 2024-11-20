import React from "react";

interface Props {
  title: string;
  stat: string;
  icon: React.ReactNode;
}

export default function Stat({ title, stat, icon }) {
  return (
    <div className="border-2 shadow-lg rounded-lg flex gap-2 py-4 px-8 items-center justify-between">
      <span className="text-primary [&>svg]:h-16 [&>svg]:w-16 basis-1/2">
        {icon}
      </span>
      <div className="flex flex-col basis-1/2 gap-2">
        <h3 className="font-bold text-lg text-secondary text-wrap">{title}</h3>
        <p className="text-5xl">{stat}</p>
      </div>
    </div>
  );
}
