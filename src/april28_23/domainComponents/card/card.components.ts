import styled from "@emotion/styled";

type CardDivProps = {
  cardDisplayType: "primary" | "secondary";
};

export const CardDiv = styled.div<CardDivProps>`
  width: 90vw;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${(props) =>
    props.cardDisplayType === "primary" ? "#e4fe4d" : "rgba(255,255,255,.1)"};
  color: ${(props) => (props.cardDisplayType === "primary" ? "black" : "white")};

  border-radius: 16px;

  margin: 1rem 0;

  padding: 1rem;

  transform: ${(props) => `rotate(${props.cardDisplayType === "primary" ? "6deg" : "-10deg"})`};

  z-index: ${(props) => (props.cardDisplayType === "secondary" ? 5 : 0)};

  /* backdrop-filter: blur(10px); */
`;

export const MaskRow = styled.div`
  span {
    margin: 0 0.5rem;
    font-weight: 300;
    &:first-of-type {
      margin: 0;
    }
  }
`;
