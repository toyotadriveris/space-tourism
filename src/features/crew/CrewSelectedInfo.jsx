import AnoushehAnsariInfo from "./AnoushehAnsari/AnoushehAnsariInfo";
import DouglasHurleyInfo from "./DouglasHurley/DouglasHurleyInfo";
import MarkShuttleworthInfo from "./MarkShuttleworth.jsx/MarkShuttleworthInfo";
import VictorGloverInfo from "./VictorGlover/VictorGloverInfo";

function CrewSelectedInfo({ isRole, size }) {
  return (
    <>
      {isRole === "commander" && <DouglasHurleyInfo size={size} />}
      {isRole === "mission-specialist" && <MarkShuttleworthInfo size={size} />}
      {isRole === "pilot" && <VictorGloverInfo size={size} />}
      {isRole === "flight-engineer" && <AnoushehAnsariInfo size={size} />}
    </>
  );
}

export default CrewSelectedInfo;
