import { faCircleArrowRight } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import { SliderDiv } from "./slider.components";

const interFont = Inter({ subsets: ["latin"], variable: "--inter-font" });

interface Props extends PropsWithChildren {}

export const Slider: React.FC<Props> = ({ children, ...props }) => {
  return (
    <SliderDiv>
      <FontAwesomeIcon icon={faCircleArrowRight} color="white" size="5x" />
      <span>Order new card</span>
    </SliderDiv>
  );
};
