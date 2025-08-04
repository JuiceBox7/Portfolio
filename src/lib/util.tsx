import { Badge } from "@/ui/badge";
import { Card } from "@/ui/card";
import { useState } from "react";

export function Entry({
  title,
  co,
  dur,
  desc,
  badges,
}: {
  title: string;
  co: string;
  dur: string;
  desc: string;
  badges: string[];
}) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 30;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -30;
    setRotate({ x, y });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <Card
      className="w-full transform-gpu ease-out group perspective-[3000px] cursor-pointer scale-95 hover:scale-100 transition-all duration-150 rounded-2xl bg-transparent shadow-xl text-white p-5"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: `rotateX(${rotate.y}deg) rotateY(${rotate.x}deg)` }}
    >
      <div className="text-left pb-8">
        <p className="text-2xl font-extralight pb-1">{title}</p>
        <div className="flex space-x-10 text-lg font-semibold justify-between w-full pb-3">
          <p>{co}</p>
          <p>{dur}</p>
        </div>
        <p className="text-md pb-4">{desc}</p>
        <div className="flex-row space-y-1 space-x-2 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-150 z-10">
          {badges.map((badge, badgeIndex) => (
            <Badge key={badgeIndex} variant="secondary" className="bg-gray-300">
              {badge}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
