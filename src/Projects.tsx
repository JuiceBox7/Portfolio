import { Separator } from "@/ui/separator";
import { Entry } from "./lib/util";
import projData from "@/lib/data/projects.json";

function Projects() {
  return (
    <div className="py-30">
      <div className="space-y-1">
        <h1 className="text-left text-5xl font-medium">Projects</h1>
      </div>
      <Separator className="my-2 mb-6" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projData.map((proj, key) => (
          <Entry
            key={key}
            title={proj.title}
            desc={proj.description}
            badges={proj.badges}
            links={proj.links}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
