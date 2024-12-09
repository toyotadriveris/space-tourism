import { useSearchParams } from "react-router-dom";
import Moon from "./Moon/Moon";
import Mars from "./Mars/Mars";
import Europa from "./Europa/Europa";
import Titan from "./Titan/Titan";

function Planet() {
  const [searchParams] = useSearchParams();
  const isPlanet = searchParams.get("planet");
  return (
    <>
      {(isPlanet === "moon" || isPlanet === null) && <Moon />}
      {isPlanet === "mars" && <Mars />}
      {isPlanet === "europa" && <Europa />}
      {isPlanet === "titan" && <Titan />}
    </>
  );
}

export default Planet;
