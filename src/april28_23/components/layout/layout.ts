import styled from "@emotion/styled";

export const Body = styled.body`
  height: 100vh;
  width: 100vw;
  background: rgb(255, 255, 255);
  background: -moz-linear-gradient(125deg, rgba(255, 255, 255, 1) 40%, rgba(196, 255, 240, 1) 100%);
  background: -webkit-linear-gradient(125deg, rgba(255, 255, 255, 1) 40%, #c4fff0 100%);
  background: linear-gradient(125deg, rgba(255, 255, 255, 1) 40%, rgba(196, 255, 240, 1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#c4fff0",GradientType=1);
`;

export const FloatingBody = styled.div`
  position: absolute;
  right: 0;
  height: 100vh;
  width: 100vw;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgb(255, 255, 255);
  background: linear-gradient(125deg, #0b2e37 40%, #3c6b7d 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#c4fff0",GradientType=1);
`;

export const Header = styled.header`
  display: flex;
  padding: 0.5rem 1rem;
  width: auto;
  z-index: 100;
  align-items: center;
  justify-content: space-between;

  background: transparent;

  border-bottom: solid 1px blue;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  width: auto;
  padding: 1rem 2rem;
  height: 100%;
  align-items: center;
  justify-content: space-around;

  background: linear-gradient(125deg, #111512 0%, #253011 50%);
`;
