import { useSearchParams } from "react-router-dom";
import MoonInfo from "./Moon/MoonInfo";
import EuropaInfo from "./Europa/EuropaInfo";
import MarsInfo from "./Mars/MarsInfo";
import TitanInfo from "./Titan/TitanInfo";

function PlanetInfo({ size }) {
  const [searchParams] = useSearchParams();
  const isPlanet = searchParams.get("planet");
  return (
    <>
      {(isPlanet === "moon" || isPlanet === null) && <MoonInfo size={size} />}
      {isPlanet === "mars" && <MarsInfo size={size} />}
      {isPlanet === "europa" && <EuropaInfo size={size} />}
      {isPlanet === "titan" && <TitanInfo size={size} />}
    </>
  );
}

export default PlanetInfo;
