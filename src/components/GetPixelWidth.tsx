import { useState, useEffect } from "react";

const SMALL = "sm";
const MEDIUM = "md";
const LARGE = "lg";

function GetPixelWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (windowWidth >= 1200) return LARGE;
  if (windowWidth < 768) return SMALL;
  return MEDIUM
}

export default GetPixelWidth;