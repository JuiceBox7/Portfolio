import Experience from "./Experience";
import Projects from "./Projects";
import SplashScreen from "./SplashScreen";
import ContactModal from "./components/ContactModal";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="p-5">
        <SplashScreen open={openModal} />
        <Experience />
        <Projects />
      </div>
      {showModal && (
        <div className="flex items-center justify-center">
          <ContactModal close={closeModal} />
        </div>
      )}
    </div>
  );
}

export default App;
