import { Badge } from "@/ui/badge";
import { Button } from "@/ui/button";
import { Card } from "@/ui/card";
import { useState } from "react";

interface link {
  title: string;
  link: string;
}

export function Entry({
  title,
  co = "",
  dur = "",
  desc,
  badges,
  links = [],
}: {
  title: string;
  co?: string;
  dur?: string;
  desc: string;
  badges: string[];
  links?: link[];
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
      className="w-full transform-gpu ease-out group perspective-[3000px] scale-95 hover:scale-100 transition-all duration-150 rounded-2xl bg-transparent shadow-xl text-white p-5"
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
        <div className="flex-row opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-150 z-10">
          <div className="pb-4 space-x-1 space-y-1">
            {badges.map((badge, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-300">
                {badge}
              </Badge>
            ))}
          </div>
          <div className="flex items-center justify-center gap-2">
            {links.length > 0 &&
              links.map((link, index) => (
                <a href={link.link}>
                  <Button
                    key={index}
                    className="bg-gray-400 hover:bg-gray-600 cursor-pointer"
                  >
                    {link.title}
                  </Button>
                </a>
              ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
