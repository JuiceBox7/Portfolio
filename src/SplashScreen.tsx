import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";

function SplashScreen({ open }: { open: () => void }) {
  const handleContactClick = () => {
    open();
  };

  return (
    <div className="py-75">
      <h1 className="text-6xl font-medium gradient-name animate-gradient-shift">
        Julian Lara
      </h1>
      <Separator className="my-3" />
      <div className="flex h-12 items-center justify-center space-x-5 text-md sm:text-3xl font-medium mb-8">
        <p>Software Engineer</p>
        <Separator orientation="vertical" />
        <p>Full Stack Development</p>
        <Separator orientation="vertical" />
        <p>Web Development</p>
      </div>
      <Button
        variant="glass"
        size="xl"
        className="gradient-button"
        onClick={handleContactClick}
      >
        Contact Me
      </Button>
    </div>
  );
}

export default SplashScreen;
