import { Separator } from "@/ui/separator";
import { Badge } from "@/ui/badge";
import expData from "@/lib/data/experience.json";

function GroupArray(array: any[], size: number) {
  const res: any[][] = [];
  for (let i = 0; i < array.length; i += size)
    res.push(array.slice(i, i + size));
  return res;
}

function ExperienceEntry({
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
    <div className="text-left pb-8">
      <p className="text-xl font-medium">{title}</p>
      <div className="flex text-lg font-semibold justify-between w-full">
        <p>{co}</p>
        <p>{dur}</p>
      </div>
      <p className="text-md pb-2">{desc}</p>
      <div className="flex-col">
        {badgeGroups.map((badges, badgesIndex) => (
          <div key={badgesIndex} className="flex-row">
            {badges.map((badge, badgeIndex) => (
              <Badge key={badgeIndex} variant="secondary">
                {badge}
              </Badge>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Experience() {
  console.log("exp pahe");
  return (
    <div className="py-50">
      <div className="space-y-1">
        <h1 className="text-left text-5xl font-medium">Experience</h1>
      </div>
      <Separator className="my-2" />
      {expData.map((exp, key) => (
        <ExperienceEntry
          key={key}
          title={exp.title}
          co={exp.company}
          dur={exp.duration}
          desc={exp.description}
          badges={exp.badges}
        />
      ))}
    </div>
  );
}

export default Experience;
