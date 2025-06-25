/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import mainVideo from "../../assets/videos/main-video.mp4";
import { css } from "@emotion/react";
import variables from "@/styles/Variables";
import { useRef } from "react";
import gsap from "gsap";
import { breakPoints, mqMax } from "@/styles/BreakPoint";

const VideoClip = () => {
  const containerRef = useRef<HTMLImageElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    if (!containerRef.current || !imgRef.current || !textRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const imgRect = imgRef.current.getBoundingClientRect();
    const textRect = textRef.current.getBoundingClientRect();

    const containerCenterX = containerRect.left + containerRect.width / 2;
    const imgCenterX = imgRect.left + imgRect.width / 2;
    const textCenterX = textRect.left + textRect.width / 2;

    const imgDistance = (containerCenterX - imgCenterX) * 2;
    const textDistance = (containerCenterX - textCenterX) * 2;

    // 이미지 오른쪽으로 이동
    gsap.to(imgRef.current, {
      x: imgDistance,
      duration: 0.5,
      ease: "power2.out",
    });
    // 텍스트 왼쪽으로 이동
    gsap.to(textRef.current, {
      x: textDistance,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    // 원래 위치로 복귀
    gsap.to(imgRef.current, { x: 0, duration: 0.5, ease: "power2.inOut" });
    gsap.to(textRef.current, { x: 0, duration: 0.5, ease: "power2.inOut" });
  };

  return (
    <>
      <VideoContainerStyle>
        <VideoOverlayText>
          <h1 css={titleStyle} ref={titleRef}>
            <span>FrontEnd Develop</span>
            <span>& UIUX Design</span>
            <span>Portfolio</span>
          </h1>
        </VideoOverlayText>
        <VideoCover />
        <video src={mainVideo} playsInline autoPlay muted loop />
        <div
          css={buttonStyle}
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="imgWrapper" ref={imgRef}>
            <object data="img/profile@1x.svg" type="image/svg+xml" />
          </div>
          <div ref={textRef}>
            <span>FE Interview</span>
            <span>video</span>
          </div>
        </div>
      </VideoContainerStyle>
    </>
  );
};

export default VideoClip;
const Montserrat = css`
  font-family: "Montserrat", sans-serif;
`;

const VideoContainerStyle = styled.div`
  width: 100%;
  height: 640px;
  overflow: hidden;
  position: relative;
  border-radius: 0 3rem 3rem 3rem;
  margin-top: 3rem;
  box-shadow: 10px 10px 10px rgba(153, 153, 153, 0.2);

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  ${mqMax(breakPoints.moMax)} {
    border-radius: 2rem;
    box-shadow: 3px 3px 3px rgba(153, 153, 153, 0.2);
  }
`;

const buttonStyle = css`
  position: absolute;
  background-color: ${variables.colors.gray100};
  bottom: 2rem;
  right: 2rem;
  border-radius: 6rem;
  border: 1px solid ${variables.colors.white};
  display: flex;
  padding: 0.4rem;
  align-items: center;
  box-shadow: 0px 0px 5px rgba(153, 153, 153, 0.6);

  .imgWrapper {
    width: 50px;
    order: 1;
    image-rendering: -webkit-optimize-contrast;
    image-rendering: crisp-edges;
  }

  div {
    display: flex;
    flex-direction: column;
    order: 2;

    span {
      ${Montserrat}
      padding: 0 2rem;
    }
  }
`;

const VideoCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 11rem;
  height: 16rem;
  background-color: ${variables.colors.gray100};
  z-index: 2;

  ${mqMax(breakPoints.moMax)} {
    height: 14.6rem;
    /* background-color: ${variables.colors.gray100}; */
    width: 1px;
  }

  ::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2rem;
    width: 2rem;
    height: 2rem;
    background-image: url("img/border.svg");
    background-size: contain;

    ${mqMax(breakPoints.pc)} {
      bottom: -1.4rem;
      width: 1rem;
      height: 1rem;
    }
  }
`;

const VideoOverlayText = styled.div`
  position: absolute;
  z-index: 3;
  left: 7%;

  ${mqMax(breakPoints.pc)} {
    left: -2rem;
  }
`;

const titleStyle = css`
  position: absolute;
  display: flex;
  flex-direction: column;

  span {
    ${Montserrat}
    display: inline-block;
    width: fit-content;
    font-size: 6rem;
    font-weight: 500;
    line-height: 6rem;
    background-color: ${variables.colors.gray100};
    padding: 0 3rem 2rem 3rem;
    white-space: nowrap;
    border-radius: 0 0 2rem 0;
    position: relative;

    ${mqMax(breakPoints.pc)} {
      font-size: 3rem;
      font-weight: 500;
      line-height: 2rem;
      padding: 1rem 3rem 2rem 3rem;
    }

    ::after {
      content: "";
      position: absolute;
      right: -2rem;
      top: 0;
      width: 2rem;
      height: 2rem;
      background-image: url("img/border.svg");
      background-size: contain;

      ${mqMax(breakPoints.pc)} {
        width: 1rem;
        height: 1rem;
        right: -1rem;
      }
    }
  }

  span:last-of-type {
    border-radius: 0 0 2rem 2rem;

    ${mqMax(breakPoints.pc)} {
      border-radius: 0 0 2rem 0;
    }

    ::before {
      content: "";
      position: absolute;
      right: -2rem;
      top: 0;
      width: 2rem;
      height: 2rem;
      background-image: url("img/border.svg");
      background-size: contain;

      ${mqMax(breakPoints.pc)} {
        border-radius: 0 0 2rem 0;
        width: 1rem;
        height: 1rem;
        right: -1rem;
      }
    }

    ::after {
      content: "";
      position: absolute;
      left: -2rem;
      bottom: -2rem;
      width: 2rem;
      height: 2rem;
      background-image: url("img/border-re.svg");
      background-size: contain;
    }
  }
`;
