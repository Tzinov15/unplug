import {
  faCcAmex,
  faCcDiscover,
  faCcMastercard,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition, faNfcSymbol } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import { CardDiv, MaskRow } from "./card.components";

const interFont = Inter({ subsets: ["latin"], variable: "--inter-font" });

interface Props extends PropsWithChildren {
  /**
   * This is the credit number (16 digits) in raw form
   */
  mask: number;

  /**
   * expiration date in the form of MM/YY
   */
  expiration: string;

  /**
   * Current Balance of the card
   */
  balance: number;

  cardType: "visa" | "mastercard" | "discover" | "amex";

  bankName: string;

  displayType: "primary" | "secondary";
}

const cardTypeToIconMapping: {
  [key in Props["cardType"]]: IconDefinition;
} = {
  amex: faCcAmex,
  visa: faCcVisa,
  discover: faCcDiscover,
  mastercard: faCcMastercard,
};

export const Card: React.FC<Props> = ({ children, ...props }) => {
  const { balance, cardType, expiration, mask, bankName, displayType } = props;
  const [first, second, third, fourth] = String(mask).match(/.{1,4}/g) ?? [];
  const icon = cardTypeToIconMapping[cardType];
  return (
    <CardDiv cardDisplayType={displayType}>
      <div className="flex items-center justify-between w-full mb-4">
        <span className={`${interFont.className} font-bold`}>{bankName}</span>
        <FontAwesomeIcon icon={faNfcSymbol} color="gray" size="1x" />
      </div>
      <MaskRow>
        <span className={interFont.className}>{first}</span>
        <span className={interFont.className}>****</span>
        <span className={interFont.className}>****</span>
        <span className={interFont.className}>{fourth}</span>
      </MaskRow>
      <div className="flex items-center w-full my-4">
        <span className={`${interFont.className} text-xs`}>{expiration}</span>
      </div>
      <div className="flex items-center justify-between  w-full mb-4">
        <span className={`${interFont.className} text-3xl font-bold `}>
          ${balance.toLocaleString()}
        </span>
        <FontAwesomeIcon
          icon={icon}
          color={displayType === "primary" ? "black" : "white"}
          size="3x"
        />
      </div>
    </CardDiv>
  );
};
