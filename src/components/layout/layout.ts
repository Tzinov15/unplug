import styled from "@emotion/styled";

export const Body = styled.body`
  min-height: 100vh;
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
  min-height: 100vh;
  height: 100vh;
  align-items: center;
  justify-content: flex-start;

  scroll-snap-type: y mandatory;
  overflow-y: scroll;

  background: linear-gradient(125deg, #f8f3e4 0%, #f8f3e4 100%);
`;

export const Page = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  width: auto;
  min-height: 100vh;
  scroll-snap-align: center;
  padding: 3rem 1rem;
  @media (min-width: 500px) {
    padding: 3rem 3rem;
  }
  width: 100%;
  align-items: center;
  justify-content: flex-start;

  background: #b59d5f;
`;

export const IntroPage = styled(Page)`
  background: linear-gradient(125deg, #f8f3e4 0%, #f8f3e4 100%);
  justify-content: center;
  padding: 3rem 2rem;
  border-bottom: solid 3px #b59d5f;
`;

export const SecondPage = styled(Page)`
  background: #e2d1a8;
`;

export const LastPage = styled(Page)`
  background: black;
  color: #f7f1e0;
`;

export const ImageContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
  }

  @media (min-width: 500px) {
    img {
      width: 70%;
    }
  }
`;

export const SmallerImageContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
  }

  @media (min-width: 500px) {
    img {
      width: 40%;
    }
  }
`;
