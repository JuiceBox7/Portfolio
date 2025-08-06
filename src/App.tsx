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
      {showModal && <ContactModal close={closeModal} />}
    </div>
  );
}

export default App;
