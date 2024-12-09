import TitleAndParagraph from "../../../ui/Title&Paragraph";

function MarsInfo({ size }) {
  return (
    <TitleAndParagraph
      title="Mars"
      para="Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons,the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
      size={size}
    />
  );
}

export default MarsInfo;
