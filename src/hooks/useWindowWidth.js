import { useEffect, useState } from "react";

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(function () {
    function getWidth() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener("resize", getWidth);
    return () => {
      window.removeEventListener("resize", getWidth);
    };
  }, []);

  return windowWidth;
}

export default useWindowWidth;
