import TechAInfo from "./TechnologyA/TechAInfo";
import TechBInfo from "./TechnologyB/TechBInfo";
import TechCInfo from "./TechnologyC/TechCInfo";

function TechnologySelectedInfo({ size, isTech }) {
  return (
    <div>
      {isTech === "A" && <TechAInfo size={size} />}
      {isTech === "B" && <TechBInfo size={size} />}
      {isTech === "C" && <TechCInfo size={size} />}
    </div>
  );
}

export default TechnologySelectedInfo;
