import { useEffect, useState } from "react";

function useWindowHeight() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(function () {
    function getHeight() {
      setWindowHeight(window.innerHeight);
    }

    window.addEventListener("resize", getHeight);
    return () => {
      window.removeEventListener("resize", getHeight);
    };
  }, []);

  return windowHeight;
}

export default useWindowHeight;
