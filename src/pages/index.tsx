import {
  Content,
  ImageContainer,
  IntroPage,
  LastPage,
  Page,
  SecondPage,
  SmallerImageContainer,
} from "@/components/layout/layout";
import { Comfortaa } from "next/font/google";
import Head from "next/head";
import Image from "next/image";

import { faPlug, faSquareCheck, faTree } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ComfortaaFont = Comfortaa({ subsets: ["latin"], variable: "--comfortaa-font" });

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
      <Content>
        <IntroPage className="justify-end flex">
          <ImageContainer>
            <Image src="/unplug.png" alt={""} width={0} height={0} sizes="100vw" />
          </ImageContainer>
          <p
            className={`${ComfortaaFont.className} text-xl md:text-3xl `}
            style={{ color: "#B59D5F", marginTop: "2rem" }}
          >
            Regain your time back one <b>unplugged</b> day at a time.
          </p>
        </IntroPage>
        <IntroPage style={{ justifyContent: "space-between", paddingBottom: 0 }}>
          <div
            style={{
              color: "#B49C61",
              fontWeight: 800,
            }}
            className={`${ComfortaaFont.className} text-xl md:text-5xl my-6 `}
          >
            <p className="my-3">
              <FontAwesomeIcon className="mr-2" icon={faSquareCheck} color="#B49C61" size="1x" />
              Setup auto reply*
            </p>
            <p className="my-3">
              <FontAwesomeIcon className="mr-2" icon={faSquareCheck} color="#B49C61" size="1x" />
              Enable Do Not Disturb
            </p>
            <p className="my-3">
              <FontAwesomeIcon className="mr-2" icon={faSquareCheck} color="#B49C61" size="1x" />
              Lock your screen
            </p>
            <p className="my-3">
              <FontAwesomeIcon className="mr-2" icon={faSquareCheck} color="#B49C61" size="1x" />
              Ignore for 36 hours
            </p>
            <p className="my-3">
              <FontAwesomeIcon className="mr-2" icon={faSquareCheck} color="#B49C61" size="1x" />
              Take back your time
            </p>
          </div>
          <SmallerImageContainer>
            <Image src="/screenshot-demo.png" alt={""} width={0} height={0} sizes="100vw" />
          </SmallerImageContainer>
        </IntroPage>
        <Page>
          <div className="flex items-center flex-col w-full">
            <p
              className={`${ComfortaaFont.className} text-3xl md:text-6xl my-6 `}
              style={{
                color: "#F6F1E0",
                fontWeight: 800,
              }}
            >
              Unplugged =
            </p>
            <p
              className={`${ComfortaaFont.className} text-md md:text-xl mt-0 mb-5 `}
              style={{
                color: "#F6F1E0",
                fontWeight: 800,
              }}
            >
              A 36 hour break from technology
            </p>

            <div className="flex items-start justify-between flex-row w-full">
              <div className="flex items-start flex-col">
                <p
                  className={`${ComfortaaFont.className} text-xl md:text-3xl `}
                  style={{
                    color: "#F6F1E0",
                    fontWeight: 800,
                  }}
                >
                  <u>Not Allowed</u> <FontAwesomeIcon icon={faPlug} color="#F5EFDB" size="1x" />
                </p>
                <div
                  className={`${ComfortaaFont.className} text-md md:text-xl mt-1 `}
                  style={{
                    color: "#F6F1E0",
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
                  <p>- No navigation</p>
                  <p>- No scrolling</p>
                  <p>- No screens</p>
                  <p>- No texting</p>
                </div>
              </div>
              <div className="flex items-start flex-col">
                <p
                  className={`${ComfortaaFont.className} text-xl md:text-3xl `}
                  style={{
                    color: "black",
                    fontWeight: 800,
                  }}
                >
                  <u>Allowed</u> <FontAwesomeIcon icon={faTree} color="black" size="1x" />
                </p>
                <div
                  className={`${ComfortaaFont.className} text-md md:text-xl mt-1`}
                  style={{
                    color: "black",
                    fontWeight: 800,
                  }}
                >
                  <p>- Phone calls</p>
                  <p>- Arts & crafts</p>
                  <p>- Journaling</p>
                  <p>- Reading</p>
                  <p>- Exercise</p>
                  <p>- Camping</p>
                  <p>- Cooking</p>
                  <p>- Painting</p>
                  <p>- Meditation</p>
                  <p>- Outdoor walks</p>
                  <p>- Yoga</p>
                  <p>- Friends over</p>
                  <p>- Room organization</p>
                  <p>- Play sports</p>
                  <p>- Writing</p>
                </div>
              </div>
            </div>
          </div>
        </Page>
        <SecondPage>
          <p
            className={`${ComfortaaFont.className} text-3xl md:text-6xl my-2 `}
            style={{
              color: "black",
              fontWeight: 800,
            }}
          >
            Day Before
          </p>
          <p
            className={`${ComfortaaFont.className} text-sm md:text-xl my-1 `}
            style={{
              color: "black",
            }}
          >
            Let friends / family know you will only be responding to phone calls, setup auto-replies
            for messages, print out map directions if you have plans to drive somewhere, print out
            recipes ahead of time. Plan so that not a single phone or computer has to get used. Go
            to bed knowing tomorrows day is on your terms.
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
            <p />
            <hr
              className="my-4"
              style={{ height: "4px", borderTopColor: "#8B5C004D", width: "100%" }}
            />
            <p>
              * on iOS, to setup an auto reply you can go to Settings ➡️ Focus ➡️ Driving ➡️
              Auto-Reply and then paste our pre-written message which you can copy{" "}
              <u
                onClick={() => {
                  window.navigator.clipboard.writeText(
                    `Hi! You’ve reached me on an Unplugged day. I’m most likely enjoying the outdoors, reading in a coffee shop, or simply taking a break from technology. Feel free to call, I’d love to chat and will pick up, otherwise I won’t see your text until tomorrow and will get back to you then. Thanks! 😎 If you’re curious about what an Unplugged day is checkout https://www.unplug.club`
                  );
                }}
              >
                here
              </u>
              . Then simply turn on Driving mode and this will get sent to your contacts when they
              text you.
            </p>
          </p>
        </SecondPage>
        <LastPage>
          <p
            className={`${ComfortaaFont.className} text-xl md:text-6xl `}
            style={{ marginTop: "2rem" }}
          >
            Why did Unplug happen?
          </p>
          <p
            className={`${ComfortaaFont.className} text-base md:text-lg `}
            style={{ marginTop: "2rem" }}
          >
            We grew tired of how unfulfilling our days were becoming with hours spent every day
            doom-scrolling. We grew tired of how tethered we were to those digital hand-held
            attention prisons despite knowing they are not good for us. We grew tired of the void in
            human connection when all we ever do is communicate through social media.
          </p>
          <br />
          <p
            className={`${ComfortaaFont.className} text-base md:text-lg `}
            style={{ marginTop: "2rem" }}
          >
            We grew tired of being plugged in and wanted to start something new. An occasional,
            socially-accepted period of time where we get to unplug and remember what life is about.
          </p>
          <br />
          <p
            className={`${ComfortaaFont.className} text-base md:text-lg `}
            style={{ marginTop: "2rem" }}
          >
            No, this is not an app. That would defeat the purpose. It's a movement, and we hope you
            try it. Happy Unplugging 🎉
          </p>
        </LastPage>
      </Content>
    </>
  );
}
