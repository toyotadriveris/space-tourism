import TitleAndParagraph from "../../../ui/Title&Paragraph";

function TechAInfo({ size }) {
  return (
    <>
      <TitleAndParagraph
        upperTitle="the terminology"
        title="launch vehicle"
        para="A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 meters tall, it's quite an awe-inspiring sight on the launch pad!"
        size={`${size}Crew`}
      />
    </>
  );
}

export default TechAInfo;
