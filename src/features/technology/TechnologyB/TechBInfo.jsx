import TitleAndParagraph from "../../../ui/Title&Paragraph";

function TechBInfo({ size }) {
  return (
    <>
      <TitleAndParagraph
        upperTitle="the terminology"
        title="SPACEPORT"
        para="A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        size={`${size}Crew`}
      />
    </>
  );
}

export default TechBInfo;
