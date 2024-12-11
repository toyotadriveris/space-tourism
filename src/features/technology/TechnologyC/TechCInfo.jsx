import TitleAndParagraph from "../../../ui/Title&Paragraph";

function TechCInfo({ size }) {
  return (
    <>
      <TitleAndParagraph
        upperTitle="the terminology"
        title="SPACE CAPSULE"
        para="A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        size={`${size}Crew`}
      />
    </>
  );
}

export default TechCInfo;
