/** @jsxImportSource @emotion/react */

import animationData from "@/assets/json/loading.json";
import { TypoCapSmR } from "@/styles/Common";
import variables from "@/styles/Variables";
import { css } from "@emotion/react";
import Lottie from "lottie-react";

interface ILoading {
  size?: "small" | "big";
  phrase?: string;
}

const Loading = ({ size = "small", phrase }: ILoading) => {
  return (
    <div data-testid="loading-box" css={lottieBox(size)}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
        style={{ width: size === "big" ? "20rem" : "14rem" }}
      />
      {phrase && <p className="loadingText">{phrase}</p>}
    </div>
  );
};

export default Loading;

const Montserrat = css`
  font-family: "Montserrat", sans-serif;
  font-size: ${TypoCapSmR};
  color: ${variables.colors.gray700};
`;

const lottieBox = (size: string) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${Montserrat}

  ${size === "small" && "min-height: 50vh;"}
  ${size === "big" &&
  `    
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);`}

  .loadingText {
    font-weight: 500;
  }
`;
