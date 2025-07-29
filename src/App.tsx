import GetPixelWidth from "./components/GetPixelWidth";
import "./App.css";

function App() {
  const pixelWidth = GetPixelWidth();

  return (
    <>
      <div className="card">
        <p>
          Currently being redone to better showcase talents, skills, experience,
          and projects
        </p>
        <p>heres the current pixel width {pixelWidth}</p>
      </div>
    </>
  );
}

export default App;
