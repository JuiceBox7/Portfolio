import { Badge } from "@/ui/badge";
import { Card } from "@/ui/card";

function GroupArray(array: any[], size: number) {
  const res: any[][] = [];
  for (let i = 0; i < array.length; i += size)
    res.push(array.slice(i, i + size));
  return res;
}

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
  let badgeGroups = [badges];
  if (badges.length > 3) {
    badgeGroups = GroupArray(badges, 3);
  }
  return (
    <Card className="w-full rounded-2xl bg-transparent shadow-xl text-white p-6">
      <div className="text-left pb-8">
        <p className="text-2xl font-extralight pb-1">{title}</p>
        <div className="flex text-lg font-semibold justify-between w-full pb-3">
          <p>{co}</p>
          <p>{dur}</p>
        </div>
        <p className="text-md pb-4">{desc}</p>
        <div className="flex flex-col">
          {badgeGroups.map((badges, badgesIndex) => (
            <div key={badgesIndex} className="flex-row space-x-2 pb-1">
              {badges.map((badge, badgeIndex) => (
                <Badge
                  key={badgeIndex}
                  variant="secondary"
                  className="bg-blue-100"
                >
                  {badge}
                </Badge>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
