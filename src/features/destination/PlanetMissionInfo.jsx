import { useSearchParams } from "react-router-dom";
import MoonMissionInfo from "./Moon/MoonMissionInfo";
import MarsMissionInfo from "./Mars/MarsMissionInfo";
import EuropaMissionInfo from "./Europa/EuropaMissionInfo";
import TitanMissionInfo from "./Titan/TitanMissionInfo";

function PlanetMissionInfo() {
  const [searchParams] = useSearchParams();
  const isPlanet = searchParams.get("planet");
  return (
    <>
      {(isPlanet === "moon" || isPlanet === null) && <MoonMissionInfo />}

      {isPlanet === "mars" && <MarsMissionInfo />}
      {isPlanet === "europa" && <EuropaMissionInfo />}
      {isPlanet === "titan" && <TitanMissionInfo />}
    </>
  );
}

export default PlanetMissionInfo;
