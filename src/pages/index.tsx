import {
  Content,
  ImageContainer,
  IntroPage,
  LastPage,
  SecondPage,
  SmallerImageContainer,
} from "@/components/layout/layout";
import { Comfortaa } from "next/font/google";
import Head from "next/head";
import Image from "next/image";

import autoReplyImage from "./autoreply.png";
import drivingImage from "./driving.png";
import focusImage from "./focus.png";
import messageImage from "./message.png";
import settingsIcon from "./settings-icon.png";

import logo from "./logo.png";

const stepIconSize = 32;

import { StyledText } from "@/components/typography/typography";
import { datadogRum } from "@datadog/browser-rum";
import { faArrowRight, faCircleArrowDown, faSquareCheck } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import confetti from "canvas-confetti";
import Script from "next/script";

const ComfortaaFont = Comfortaa({
  subsets: ["latin"],
  variable: "--comfortaa-font",
  weight: "variable",
});

datadogRum.init({
  applicationId: "b8ee845b-2f53-4604-88e1-2789cc1de3b6",
  clientToken: "pubde7234316a64cf0e2874146fedf97403",
  site: "datadoghq.com",
  service: "unplug",
  env: "<ENV_NAME>",
  // Specify a version number to identify the deployed version of your application in Datadog
  // version: '1.0.0',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 20,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: "mask-user-input",
});

export const PageBottomIcon: React.FC<{ color: string; first?: boolean }> = ({
  color,
  first = false,
}) => {
  return (
    <FontAwesomeIcon
      className="mr-2 fa-fade absolute"
      icon={faCircleArrowDown}
      onClick={() => {
        const el = document.getElementById("content");
        const pos = el!.getBoundingClientRect();
        const page2 = document.getElementById("page2");
        console.log({ el, pos, page2 });
        page2!.scrollTo(0, pos.top);
        // window.scrollBy({
        //   top: window.innerHeight,
        //   behavior: "smooth",
        // );
      }}
      style={{
        bottom: first ? "84px" : "48px",
      }}
      color={color}
      size="3x"
    />
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Unplug</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>
      <Content id="content">
        <IntroPage className="justify-end flex">
          <ImageContainer>
            <Image priority src="/unplug-slim.png" alt={""} width={0} height={0} sizes="100vw" />
          </ImageContainer>
          <p
            className={`${ComfortaaFont.className} text-2xl md:text-4xl text-center `}
            style={{ color: "#B59D5F", marginTop: "1rem" }}
          >
            A social movement of unplugging from technology responsibly.
            {/* Regain your time back one <b>unplugged</b> day at a time. */}
          </p>

          <hr
            className="my-4"
            style={{ height: "4px", borderTopColor: "#8B5C004D", width: "100%" }}
          />
          <div
            style={{
              color: "#B49C61",
              fontWeight: 800,
              margin: "0 auto",
            }}
            className={`${ComfortaaFont.className} flex flex-col items-center text-sm md:text-md my-1 w-full md:w-2/3 `}
          >
            <p
              className={`${ComfortaaFont.className} text-base md:text-lg `}
              style={{ color: "#B59D5F" }}
            >
              We&apos;re happier off our phones.
              {/* Regain your time back one <b>unplugged</b> day at a time. */}
            </p>
            <p
              className={`${ComfortaaFont.className} text-base md:text-lg `}
              style={{ color: "#B59D5F" }}
            >
              Yet we live in a connected world.
              {/* Regain your time back one <b>unplugged</b> day at a time. */}
            </p>
            <p
              className={`${ComfortaaFont.className} text-base md:text-lg `}
              style={{ color: "#B59D5F" }}
            >
              Our solve is simple.
            </p>
          </div>

          <PageBottomIcon color="#B49C61" first />
        </IntroPage>
        <SecondPage id="page2" style={{ justifyContent: "space-between", paddingBottom: 0 }}>
          <Script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></Script>
          <div
            style={{
              color: "#f7f1e0",
              fontWeight: 800,
              margin: "0 auto",
            }}
            className={`${ComfortaaFont.className} text-sm md:text-xl my-1 w-full md:w-2/3 `}
          >
            <p
              className={`${ComfortaaFont.className} text-lg md:text-lg `}
              style={{
                color: "#B59D5F",
                background: "black",
                padding: ".5rem 1rem",
                fontWeight: 200,
              }}
            >
              A{" "}
              <span className={ComfortaaFont.className} style={{ fontWeight: 800 }}>
                36 hour hiatus
              </span>{" "}
              from phones and screens while still staying reachable.
              {/* Regain your time back one <b>unplugged</b> day at a time. */}
            </p>

            <hr
              className="my-4"
              style={{ height: "4px", borderTopColor: "#f7f1e0", width: "100%" }}
            />
            <p className="my-3">
              <FontAwesomeIcon className="mr-2" icon={faSquareCheck} color="#f7f1e0" size="1x" />
              Setup an auto-reply message so others know why you&apos;re not replying.
            </p>
            <div className="flex items-center justify-center w-full">
              <div className="flex flex-col items-center">
                <Image
                  priority
                  src={settingsIcon}
                  alt={""}
                  width={stepIconSize}
                  height={stepIconSize}
                />
                <p
                  className={`${ComfortaaFont.className} text-xs md:text-md my-1 `}
                  style={{ color: "white" }}
                >
                  Settings
                </p>
              </div>
              <FontAwesomeIcon className="mx-1" icon={faArrowRight} color="#f7f1e0" size="2x" />
              <div className="flex flex-col items-center">
                <Image
                  priority
                  src={focusImage}
                  alt={""}
                  width={stepIconSize}
                  height={stepIconSize}
                />
                <p
                  className={`${ComfortaaFont.className} font-bold text-xs md:text-md my-1 `}
                  style={{ color: "#575ACE" }}
                >
                  Focus
                </p>
              </div>
              <FontAwesomeIcon className="mx-2" icon={faArrowRight} color="#f7f1e0" size="2x" />

              <div className="flex flex-col items-center">
                <Image
                  priority
                  src={drivingImage}
                  alt={""}
                  width={stepIconSize}
                  height={stepIconSize}
                />
                <p
                  className={`${ComfortaaFont.className} text-xs md:text-md my-1 `}
                  style={{ color: "#33379D" }}
                >
                  Driving
                </p>
              </div>
              <FontAwesomeIcon className="mx-1" icon={faArrowRight} color="#f7f1e0" size="2x" />
              <Image priority src={autoReplyImage} alt={""} width={94} height={32} />
            </div>

            <div className="flex w-100 items-center">
              <SmallerImageContainer className="my-2">
                <Image
                  priority
                  placeholder="blur"
                  src={messageImage}
                  alt={""}
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </SmallerImageContainer>
              <p className="text-center my-1">
                <u
                  onClick={async () => {
                    if (typeof window !== undefined) {
                      window.navigator.clipboard.writeText(
                        `Hi! You’ve reached me on an Unplugged day. I’m most likely enjoying the outdoors, reading in a coffee shop, or simply taking a break from technology. Feel free to call, I’d love to chat and will pick up, otherwise I won’t see your text until tomorrow and will get back to you then. Thanks! 😎 If you’re curious about what an Unplugged day is checkout https://www.unplug.club`
                      );
                      confetti({
                        colors: ["#f7f1e0"],
                      });
                    }
                  }}
                >
                  COPY
                </u>
              </p>
            </div>

            <p className="my-3">
              <FontAwesomeIcon className="mr-2" icon={faSquareCheck} color="#f7f1e0" size="1x" />
              Enable Driving Mode so all inbound messages get this response.
            </p>
            <p className="my-3">
              <FontAwesomeIcon className="mr-2" icon={faSquareCheck} color="#f7f1e0" size="1x" />
              Turn on ringer & keep phone on you to stay reachable for emergencies.
            </p>

            <p className="my-3">
              <FontAwesomeIcon className="mr-2" icon={faSquareCheck} color="#f7f1e0" size="1x" />
              Don&apos;t look at your phone for 36 hours.
            </p>
          </div>

          <PageBottomIcon color="#f7f1e0" />
        </SecondPage>
        <IntroPage
          style={{
            justifyContent: "flex-start",
          }}
        >
          <div className="flex items-center flex-col justify-start w-full">
            <p
              className={`${ComfortaaFont.className} text-3xl md:text-6xl my-6 `}
              style={{
                color: "#b59d5f",
                fontWeight: 800,
              }}
            >
              Unplugged =
            </p>

            <div className="flex items-start justify-between flex-col w-full">
              <div className="flex items-center flex-col w-full">
                <div
                  className={`${ComfortaaFont.className} text-lg md:text-xl mt-1 `}
                  style={{
                    color: "#b59d5f",
                    fontWeight: 800,
                  }}
                >
                  <p>- No TV</p>
                  <p>- No phone</p>
                  <p>- No computer</p>
                  <p>- No smart watch</p>
                  <p>- No social media</p>
                  <p>- No news</p>
                  <p>- No friends TV</p>
                  <p>- No meetings</p>
                  <p>- No work</p>
                  <p>- No email</p>
                  <p>- No video games</p>
                  <p>- No navigation</p>
                  <p>- No scrolling</p>
                  <p>- No screens</p>
                  <p>- No texting</p>
                </div>
              </div>
            </div>
          </div>

          <PageBottomIcon color="#B49C61" />
        </IntroPage>
        {/* <SecondPage>
          <p
            className={`${ComfortaaFont.className} text-3xl md:text-6xl my-2 `}
            style={{
              color: "black",
              fontWeight: 800,
            }}
          >
            Night Before
          </p>

          <p
            className={`${ComfortaaFont.className} text-sm md:text-xl my-1 `}
            style={{
              color: "black",
            }}
          >
            Let friends / family know you will only be responding to phone calls, setup auto-replies
            for messages, print out map directions if you have plans to drive somewhere, print out
            recipes ahead of time. Plan so that not a single phone or computer has to get used.
          </p>

          <p
            className={`${ComfortaaFont.className} text-3xl md:text-6xl my-2 `}
            style={{
              color: "black",
              fontWeight: 800,
            }}
          >
            Day Of
          </p>

          <p
            className={`${ComfortaaFont.className} text-sm md:text-xl my-1 `}
            style={{
              color: "black",
            }}
          >
            Allow yourself to be bored and see where your curiosity takes you that day. Pay
            attention to the habituated patterns to fill empty time with social media and
            doom-scrolling and instead try something new.
          </p>

          <p
            className={`${ComfortaaFont.className} text-3xl md:text-6xl my-2 `}
            style={{
              color: "black",
              fontWeight: 800,
            }}
          >
            Day After
          </p>

          <p
            className={`${ComfortaaFont.className} text-sm md:text-xl my-1 `}
            style={{
              color: "black",
            }}
          >
            Reconnect on missed messages, ease into the world, enjoy the new found space from the
            daily buzz, tell your friends about it.
            <br />
            <br />
            We will start surfacing stories from peoples Unplugged days so feel free to send them to
            unplug.club.stories@gmail.com
          </p>
          <hr
            className="my-4"
            style={{ height: "4px", borderTopColor: "#8B5C004D", width: "100%" }}
          />

          <FontAwesomeIcon
            className="mr-2 fa-fade absolute bottom-6"
            icon={faCircleArrowDown}
            style={{
              bottom: "64px",
            }}
            color="black"
            size="3x"
          />
        </SecondPage> */}
        <LastPage>
          <p
            className={`${ComfortaaFont.className} text-xl md:text-6xl `}
            style={{ marginTop: "2rem" }}
          >
            Why did Unplug happen?
          </p>
          <StyledText
            className={`${ComfortaaFont.className} text-base md:text-lg `}
            style={{ marginTop: "2rem" }}
          >
            We grew tired of doom-scrolling. <br />
            We grew tired of being tethered to screens. <br />
            We grew tired of lacking real human connection.
            <br />
            <br />
            We wanted to start something different. An occasional, socially responsible period of
            time to unplug and live more.
            <br />
            <br />
            We tried a few of these technology breaks. They were beautiful. And now we want to share
            the magic.
            <br />
            <br />
            No, this is not an app. That would defeat the purpose. It is an experiment, and we hope
            you try it and tell your friends about it. Happy Unplugging 🎉
          </StyledText>

          <Image priority src={logo} alt={""} width={100} height={100} className="my-3" />
        </LastPage>
      </Content>
    </>
  );
}
