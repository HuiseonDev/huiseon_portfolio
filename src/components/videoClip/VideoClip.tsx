/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import mainVideo from "../../assets/videos/main-video.mp4";
import { css } from "@emotion/react";
import variables from "@/styles/Variables";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { breakPoints, mqMax } from "@/styles/BreakPoint";

const VideoClip = () => {
  const containerRef = useRef(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    // 이미지와 텍스트 사이의 x축 거리 계산 (중심 기준)
    if (imgRef.current && textRef.current) {
      const imgRect = imgRef.current.getBoundingClientRect();
      const textRect = textRef.current.getBoundingClientRect();
      const dist = textRect.right - imgRect.left;
      setDistance(dist);
    }
  }, []);

  const handleMouseEnter = () => {
    // 이미지 오른쪽으로 이동
    gsap.to(imgRef.current, {
      x: distance / 1.2,
      duration: 0.5,
      ease: "power2.out",
    });
    // 텍스트 왼쪽으로 이동
    gsap.to(textRef.current, {
      x: -distance / 4,
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
          <h1 css={titleStyle}>
            <span>FrontEnd Engineer</span>
            <span>and UIUX Design</span>
            <span>Portfolio</span>
          </h1>
        </VideoOverlayText>
        <VideoCover />
        <video src={mainVideo} autoPlay muted loop />
        <div
          css={buttonStyle}
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img src="img/profile.svg" ref={imgRef} />
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
  border-radius: 3rem;
  margin-top: 3rem;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const buttonStyle = css`
  position: absolute;
  width: 18rem;
  height: 6rem;
  background-color: ${variables.colors.gray100};
  bottom: 3rem;
  right: 3rem;
  border-radius: 6rem;
  display: flex;
  padding: 0.4rem;
  align-items: center;
  gap: 1rem;

  img {
    width: 5rem;
    order: 1;
  }

  div {
    display: flex;
    flex-direction: column;
    order: 2;

    span {
      ${Montserrat}
    }
  }
`;

const VideoCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 160px;
  background-color: ${variables.colors.gray100};
  z-index: 2;

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
      bottom: -2.4rem;
    }
  }
`;

const VideoOverlayText = styled.div`
  position: absolute;
  z-index: 3;
  left: 8%;

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
      font-weight: 600;
      line-height: 3rem;
      padding: 0 3rem 2rem 3rem;
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
