import styled from "@emotion/styled";

export const LogoText = styled.h1`
  font-size: ${(props) => props.theme.fonts.sizes.xl};
  line-height: ${(props) => props.theme.fonts.sizes.xl};
  color: ${(props) => props.theme.colors.second};
  font-family: var(--shantell-font);
  margin-left: 1rem;
  z-index: 5000;
  transition: all ease-in-out 0.3s;
`;

export const SecondaryText = styled.h2`
  font-size: 46px;
  line-height: 56px;
  font-family: var(--rubik-font);
  margin-left: 1rem;
  font-weight: 100;

  background: linear-gradient(125deg, #3c6b7d 0%, #8aaba5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  b {
    font-weight: 600;
  }
`;

type ButtonProps = {
  buttonType: "primary" | "secondary";
};
export const Button = styled.button<ButtonProps>`
  padding: 0.5rem 1.5rem;
  font-size: ${(props) => props.theme.fonts.sizes.md};
  display: flex;
  line-height: normal;

  align-items: center;
  border-radius: 24px;
  font-family: var(--phosphate-font);
  align-items: center;
  text-align: center;
  justify-content: center;

  transition: all ease-in-out 0.3s;

  background: ${(props) => (props.buttonType === "primary" ? props.theme.colors.second : "white")};
  color: ${(props) => (props.buttonType === "primary" ? "white" : props.theme.colors.second)};
  border: ${(props) =>
    `solid 2px ${props.buttonType === "primary" ? "white" : props.theme.colors.second}`};
`;

export const StyledText = styled.p`
  background: #bda66b;
  background: linear-gradient(to bottom right, #ffffff 0%, #bda66b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
