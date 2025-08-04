import { Separator } from "@/ui/separator";
import { Entry } from "./lib/util";
import expData from "@/lib/data/experience.json";

function Experience() {
  console.log("exp pahe");
  return (
    <div className="py-50">
      <div className="space-y-1">
        <h1 className="text-left text-5xl font-medium">Experience</h1>
      </div>
      <Separator className="my-2 mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {expData.map((exp, key) => (
          <Entry
            key={key}
            title={exp.title}
            co={exp.company}
            dur={exp.duration}
            desc={exp.description}
            badges={exp.badges}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;
