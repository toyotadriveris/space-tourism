import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-transform: uppercase;
  span {
    font-family: "Barlow Condensed";
    font-size: 14px;
    letter-spacing: 2px;
    color: var(--color-blue-300);
  }
  strong {
    font-weight: 400;
    font-size: 28px;
  }
`;

function LabelAndInfo({ label, info }) {
  return (
    <StyledContainer>
      <span>{label}</span>
      <strong>{info}</strong>
    </StyledContainer>
  );
}

export default LabelAndInfo;
