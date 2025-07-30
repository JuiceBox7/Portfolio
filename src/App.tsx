import "./App.css";
import Experience from "./Experience";
import SplashScreen from "./SplashScreen";
import { Separator } from "./ui/separator";

function App() {
  return (
    <div className="p-5">
      <p className="pb-20 text-xl font-semibold">
        Currently being redone to better showcase talents, skills, experience,
        and projects
      </p>
      <SplashScreen />
      <Experience />
    </div>
  );
}

export default App;
