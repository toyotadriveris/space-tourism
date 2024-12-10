import TitleAndParagraph from "../../../ui/Title&Paragraph";

function MarkShuttleworthInfo({ size }) {
  return (
    <div>
      <TitleAndParagraph
        upperTitle="Mission specialist"
        title="Mark Shuttleworth"
        para="Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
        size={size}
      />
    </div>
  );
}

export default MarkShuttleworthInfo;
