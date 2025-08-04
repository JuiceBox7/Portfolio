import { Separator } from "./ui/separator";

function SplashScreen() {
  return (
    <div>
      <h1 className="text-6xl font-medium gradient-name animate-gradient-shift">
        Julian Lara
      </h1>
      <Separator className="my-3" />
      <div className="flex h-12 items-center justify-center space-x-5 text-md sm:text-3xl font-medium">
        <p>Software Engineer</p>
        <Separator orientation="vertical" />
        <p>Full Stack Development</p>
        <Separator orientation="vertical" />
        <p>Web Development</p>
      </div>
    </div>
  );
}

export default SplashScreen;
